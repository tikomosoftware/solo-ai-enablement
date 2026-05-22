# 16. Claude Codeを業務で使うための安全設定サンプル

## この記事の目的

この記事では、開発者がClaude Codeを業務で使うときに、最低限入れておきたいルールと設定の考え方を整理します。

特に注意したいのは、ファイル削除、ファイル移動、Git履歴を壊す操作、force push、機密ファイルの読み取りです。Claude Codeは強力な開発支援ツールですが、強力だからこそ「AIに任せる範囲」と「人間の承認が必要な範囲」を先に決めておく必要があります。

## まず理解すること

Claude Codeには、大きく分けて2種類のルールがあります。

- `CLAUDE.md` のような、Claudeに読ませる指示
- `.claude/settings.json` のような、Claude Codeの権限設定

この2つは役割が違います。

`CLAUDE.md` は「こう振る舞ってください」という作業ルールです。たとえば「削除前に確認する」「テストを実行する」「既存の設計に合わせる」といった指示を書きます。

一方で、権限設定は「実際にその操作を許可するか、確認するか、禁止するか」を決める設定です。公式ドキュメントでも、`CLAUDE.md` の指示はClaudeの振る舞いを形作るが、Claude Codeが許可する操作自体は変えない、と説明されています。

つまり、安全運用では `CLAUDE.md` だけでは不十分です。`CLAUDE.md` と `.claude/settings.json` の両方を使います。

## 推奨する基本方針

業務利用では、最初は少し厳しめに始めるのがおすすめです。

- permission modeは `default` または `plan` から始める
- `bypassPermissions` は使わない
- 削除系コマンドは原則禁止、または必ず確認
- force pushや履歴改変は原則禁止
- `.env`、秘密鍵、認証情報は読ませない、書かせない
- ファイル移動や大量リネームは必ず確認
- Git pushはAIに任せず、人間が実行する
- 変更後は人間が差分を確認してからコミットする

Claude Codeのpermission modeでは、`default` は読み取り中心で、編集やコマンド実行時に確認が入ります。`plan` は調査向けで、ファイル編集をしません。`acceptEdits` は編集や一部のファイル操作が通りやすくなるため、慣れるまでは避けたほうが安全です。

`bypassPermissions` は権限確認をほぼ飛ばすモードです。公式ドキュメントでも、コンテナやVMのような隔離環境でのみ使うべきものとして説明されています。通常の業務PCや本物の業務リポジトリでは使わない方針にします。

## サンプル: CLAUDE.md

プロジェクトのルートに `CLAUDE.md` を置きます。

```markdown
# Claude Code 業務利用ルール

このリポジトリでは、Claude Codeを開発支援として使います。
最終判断と最終責任は人間の開発者が持ちます。

## 基本姿勢

- 変更前に目的、影響範囲、変更予定ファイルを説明してください。
- 大きな変更は小さなステップに分けてください。
- 既存の設計、命名、フォルダ構成、テスト方針に合わせてください。
- 依頼範囲外のリファクタリングや整形は行わないでください。
- 判断に迷う場合は、実装せずに質問してください。

## 禁止または事前確認が必要な操作

- ファイル削除、ディレクトリ削除は、必ず事前に理由と対象パスを説明して確認してください。
- ファイル移動、リネーム、大量置換は、必ず事前に理由と対象パスを説明して確認してください。
- `git reset`、`git clean`、`git rebase`、`git checkout --`、`git restore` は実行しないでください。
- `git push --force`、`git push --force-with-lease` は実行しないでください。
- 通常の `git push` も、人間から明示的に依頼された場合だけ行ってください。
- `.env`、秘密鍵、APIキー、トークン、認証情報、個人情報、顧客情報を読んだり書いたりしないでください。
- データベース削除、初期化、マイグレーションのロールバック、シード投入は実行前に必ず確認してください。

## 作業フロー

1. まず関連ファイルを調査してください。
2. 変更方針を短く説明してください。
3. 変更してよいか確認が必要な場合は、そこで止まってください。
4. 実装後は変更内容と確認結果を報告してください。
5. テストやビルドを実行できなかった場合は、その理由を報告してください。

## Git運用

- コミット前に `git status --short` を確認してください。
- 差分の要約を出してください。
- コミットやpushは、人間が明示的に依頼した場合だけ行ってください。
- 履歴を書き換える操作は行わないでください。
```

このファイルは「Claudeに守ってほしい行動規範」です。ただし、これはあくまで指示です。強制的にブロックするには、次の `.claude/settings.json` を使います。

## サンプル: .claude/settings.json

プロジェクト内に `.claude/settings.json` を作ります。チームで共有する場合はGit管理します。

```json
{
  "permissions": {
    "defaultMode": "default",
    "disableBypassPermissionsMode": "disable",
    "allow": [
      "Bash(git status *)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Bash(git branch *)",
      "Bash(npm run build)",
      "Bash(npm run test *)",
      "Bash(npm test *)",
      "Bash(* --version)",
      "Bash(* --help *)",
      "PowerShell(Get-ChildItem *)",
      "PowerShell(Get-Content *)",
      "PowerShell(git status *)",
      "PowerShell(git diff *)",
      "PowerShell(git log *)",
      "PowerShell(git branch *)",
      "PowerShell(npm run build)",
      "PowerShell(npm run test *)",
      "PowerShell(npm test *)"
    ],
    "ask": [
      "Edit",
      "Write",
      "Bash(git push *)",
      "Bash(git commit *)",
      "Bash(mv *)",
      "Bash(cp *)",
      "Bash(mkdir *)",
      "PowerShell(git push *)",
      "PowerShell(git commit *)",
      "PowerShell(Move-Item *)",
      "PowerShell(Copy-Item *)",
      "PowerShell(New-Item *)"
    ],
    "deny": [
      "Read(.env)",
      "Read(**/.env)",
      "Read(//**/.env)",
      "Read(**/*.pem)",
      "Read(**/*.key)",
      "Read(**/id_rsa)",
      "Read(**/id_ed25519)",
      "Edit(.env)",
      "Edit(**/.env)",
      "Edit(//**/.env)",
      "Edit(**/*.pem)",
      "Edit(**/*.key)",
      "Edit(**/id_rsa)",
      "Edit(**/id_ed25519)",
      "Bash(rm *)",
      "Bash(rmdir *)",
      "Bash(git reset *)",
      "Bash(git clean *)",
      "Bash(git rebase *)",
      "Bash(git checkout -- *)",
      "Bash(git restore *)",
      "Bash(git push --force*)",
      "Bash(git push * --force*)",
      "Bash(git push --force-with-lease*)",
      "Bash(git push * --force-with-lease*)",
      "PowerShell(Remove-Item *)",
      "PowerShell(del *)",
      "PowerShell(rmdir *)",
      "PowerShell(git reset *)",
      "PowerShell(git clean *)",
      "PowerShell(git rebase *)",
      "PowerShell(git checkout -- *)",
      "PowerShell(git restore *)",
      "PowerShell(git push --force*)",
      "PowerShell(git push * --force*)",
      "PowerShell(git push --force-with-lease*)",
      "PowerShell(git push * --force-with-lease*)"
    ]
  }
}
```

このサンプルでは、読み取り系のGit操作やテスト実行は通しやすくし、編集、コミット、通常push、ファイル移動は確認対象にしています。削除、履歴改変、force push、機密ファイルの読み書きはブロックします。

## deny、ask、allowの考え方

権限設定では、`deny`、`ask`、`allow` を使い分けます。

- `allow`: 確認なしで許可する
- `ask`: 毎回確認する
- `deny`: 禁止する

公式ドキュメントでは、評価順は `deny`、`ask`、`allow` です。つまり、どこかでdenyされた操作は、別の設定でallowしても通りません。

業務利用では、次の考え方がわかりやすいです。

- 何度実行しても安全な確認コマンドは `allow`
- ファイル変更、コミット、push、移動、作成は `ask`
- 削除、履歴改変、force push、秘密情報へのアクセスは `deny`

## ファイル削除はdenyかaskか

実務では、ファイル削除を `ask` にするか `deny` にするか迷うところです。

おすすめは、最初は `deny` です。

理由は、削除は取り返しがつきにくく、AIが「不要」と判断したファイルが実は必要だった、という事故が起こりやすいからです。削除が必要な場合は、Claude Codeに理由と対象ファイルを説明させ、人間が手で削除する運用のほうが安全です。

削除もClaude Codeに任せたいチームでは、`Bash(rm *)` や `PowerShell(Remove-Item *)` を `deny` から `ask` に移します。ただし、その場合でも `git status --short` と差分確認を必須にします。

## ファイル移動とリネーム

ファイル移動やリネームは、削除ほどではありませんが影響範囲が広がりやすい操作です。

たとえば、importパス、ビルド設定、テスト、ドキュメント、CI設定に影響します。そのため、最初は `ask` に入れて、毎回確認するのがおすすめです。

Claude Codeには次のように依頼します。

```text
ファイル移動が必要な場合は、実行前に対象パス、理由、影響範囲を説明して確認してください。
確認が取れるまで移動しないでください。
```

## Git pushとforce push

通常の `git push` は、チーム方針によります。

AIにpushまで任せると便利ですが、業務では「push前に人間が差分を見る」ほうが安全です。そのため、最初は `ask` にします。

force pushは原則 `deny` です。`git push --force` や `git push --force-with-lease` は、リモート履歴を書き換える可能性があります。チームの作業やレビュー中の履歴を壊すことがあるため、AIに任せるべきではありません。

## .envや秘密情報

`.env`、秘密鍵、APIキー、トークンは、読み取りも書き込みも避けます。

AIにエラー調査を依頼するときに `.env` の中身を見せたくなる場面がありますが、原則として値そのものは渡しません。

代わりに、次のように相談します。

```text
.envの中身は見せません。
必要な環境変数名だけ説明します。
設定漏れの可能性を確認してください。
```

## Hooksを使う場合

より強く運用したい場合は、Hooksを使います。

Hooksは、Claude Codeがツールを実行する前後に独自の処理を挟む仕組みです。公式ドキュメントでは、危険なシェルコマンドや不正なファイルアクセスを実行前にブロックできると説明されています。

たとえば、次のような用途があります。

- 削除コマンドを実行前にブロックする
- `.env` 編集をブロックする
- ファイル編集後にformatterを実行する
- permission requestを監査ログに残す
- 危険操作をSlackなどに通知する

最初からHooksまで入れる必要はありません。まずは `CLAUDE.md` と `.claude/settings.json` で運用し、チームで使ってみて不足が見えたらHooksを追加します。

## チーム導入時のおすすめセット

最初のチーム導入では、次の3つを用意するのがおすすめです。

- `CLAUDE.md`: チームの作業ルール
- `.claude/settings.json`: 権限設定
- `docs/ai-development-policy.md`: 人間向けの運用説明

特に大事なのは、設定ファイルを置くだけで終わらせないことです。メンバーに「なぜこの操作がブロックされるのか」「どこまでAIに任せてよいのか」を説明します。

## この章のまとめ

Claude Codeを業務で使うなら、`CLAUDE.md` と `.claude/settings.json` を分けて考えることが大切です。

`CLAUDE.md` は作業ルール、`.claude/settings.json` は実際の権限設定です。削除、履歴改変、force push、秘密情報アクセスは最初から厳しめに制限し、ファイル編集や移動、pushは人間の確認を挟む運用から始めるのがおすすめです。

参考:

- [Configure permissions](https://code.claude.com/docs/en/permissions)
- [Choose a permission mode](https://code.claude.com/docs/en/permission-modes)
- [How Claude remembers your project](https://code.claude.com/docs/en/memory)
- [Hooks reference](https://code.claude.com/docs/en/hooks)

