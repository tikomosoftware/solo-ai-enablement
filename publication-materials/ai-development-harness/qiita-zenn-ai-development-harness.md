# Claude Codeをチームで安全に試すための運用テンプレートを作った話

## はじめに

社内でAI活用を進めるにあたって、最初は「AIとは何か」「AIを業務でどう使うか」という社内共有用の記事を作るところから始めました。

ただ、話を進めるうちに、単に記事を配るだけでは足りないと感じました。

特に開発チームでClaude CodeやGitHub Copilotを使う場合、次のような不安があります。

- AIが危険なコマンドを提案しないか
- `git reset` や force push を実行しないか
- `.env` や秘密鍵を読もうとしないか
- VS Codeでどのフォルダを開いて使えばいいのか
- チーム全員が同じルールで使えるのか
- 事故やヒヤリハットをどう共有するのか

そこで、Claude Codeを中心に、チームでAI開発支援を安全に使うための運用テンプレートを作りました。

この記事では、こうしたルール、権限設定、作業手順、チェックリストをまとめたものを **AI Development Harness** と呼ぶことにします。

ただし、これは英語圏で完全に定着した標準用語というより、今回の取り組みを説明するための呼び方です。近い言葉としては、agent harnessやAI harnessのような表現があります。

リポジトリはこちらです。

[tikomosoftware/solo-ai-enablement](https://github.com/tikomosoftware/solo-ai-enablement)

実際のセッションログも残しています。

[セッションログ](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/publication-materials/ai-development-harness/2026-05-23-ai-enablement-harness-session.md)

## 1. 最初はAI活用の社内共有記事から始めた

最初に作ったのは、AIをまだ使っていないメンバー向けの記事群です。

Markdownを原本にして、GitHubで管理し、HTMLへ変換できる構成にしました。

記事群はこちらです。

[articles](https://github.com/tikomosoftware/solo-ai-enablement/tree/main/articles)

最初に用意したテーマは、たとえば次のようなものです。

- AIとは何か
- なぜ今チームでAIを使うのか
- AIにできること・苦手なこと
- AIを使ってよいこと・いけないこと
- 情報管理とセキュリティ
- 実際の業務活用例
- プロンプトの基本
- 失敗例と注意点
- チーム内ルール

この時点では、どちらかというと「AI活用の読み物」を作るつもりでした。

## 2. Claude Codeを業務で使うにはルールが必要だった

次に、業務で使う主なツールとして、GitHub CopilotとClaude Codeを想定しました。

GitHub Copilotは、VS Code上の補完や小さな編集に向いています。

一方でClaude Codeは、リポジトリを読み、ファイルを編集し、コマンドを実行できるため、かなり強力です。

強力なぶん、業務で使うには最低限の安全設定が必要だと感じました。

そこで、Claude Code向けに次のようなサンプルを作りました。

[Claude Code安全設定サンプル](https://github.com/tikomosoftware/solo-ai-enablement/tree/main/examples/claude-code-safe-config)

主なファイルはこの2つです。

- [`CLAUDE.md`](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/claude-code-safe-config/CLAUDE.md)
- [`.claude/settings.json`](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/claude-code-safe-config/.claude/settings.json)

考え方としては、次のように分けました。

```text
CLAUDE.md
  Claudeに読ませる作業ルール

.claude/settings.json
  許可・確認・禁止する操作の設定
```

たとえば、削除、`git reset`、`git clean`、`git rebase`、force push、`.env` や秘密鍵の読み書きは制限するようにしています。

## 3. 個人ルールではなくチームのharnessにする

最初はClaude Codeの安全設定サンプルとして作っていましたが、チーム開発ではそれだけでは足りません。

一人で使うなら自分のルールで済みますが、チームで使う場合は、次のようなものが必要になります。

- チーム共通のルール
- 職種別の注意点
- 作業前後のチェックリスト
- プロンプトテンプレート
- FAQ
- よくある失敗例
- 事故・ヒヤリハットの共有方法

そこで、よりチーム開発向けに整理したものとして、`team-ai-development-harness` を作りました。

[Team AI Development Harness](https://github.com/tikomosoftware/solo-ai-enablement/tree/main/examples/team-ai-development-harness)

構成はこのようにしています。

```text
team-ai-development-harness/
  README.md
  STRUCTURE.md
  CLAUDE.md
  .claude/
    settings.json
  docs/
  facilitator/
  policies/
  workflows/
  checklists/
  prompts/
  templates/
```

全体構成はこちらにまとめています。

[STRUCTURE.md](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/STRUCTURE.md)

このharnessでは、以下の4つを意識しています。

```text
Context      AIに渡す前提
Guardrails   危険操作を止める仕組み
Workflow     作業の進め方
Verification 確認方法
```

詳しくはこちらに書きました。

[AI Development Harnessの考え方](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/harness-concept.md)

## 4. メンバー向けに「最初に読む資料」を用意する

資料が増えてくると、今度は「どれから読めばいいのか」が分かりにくくなります。

そこで、メンバー向けには入口を絞りました。

また、いきなり資料を渡して「読んでおいてください」にするのではなく、最初の30分説明会で一緒に起動、ルール確認、変更なしの調査まで試せるようにしました。

まず読むもの:

- [AI開発利用ポリシー](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/ai-development-policy.md)
- [Claude Code初回セットアップガイド](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/start-guide.md)
- [AI開発支援 用語集](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/glossary.md)
- [最初の実践課題](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/first-exercise.md)

説明会用:

- [第1回 30分説明会 資料](https://github.com/tikomosoftware/solo-ai-enablement/tree/main/examples/team-ai-development-harness/facilitator/session-01-30min)
- [30分説明会スライド](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/facilitator/session-01-30min/02-slides-30min.marp.md)
- [30分説明会 台本](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/facilitator/session-01-30min/03-explanation-script-30min.md)
- [メンバー向けはじめ方メモ](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/facilitator/session-01-30min/04-member-start-note.md)

特に `start-guide.md` では、実際の初回作業に寄せて、次のような手順にしています。

- プロジェクトルートを確認する
- VS Codeで対象リポジトリだけを開く
- `Get-Location` で起動場所を確認する
- 初回は `claude --permission-mode plan` で始める
- `/memory` で `CLAUDE.md` を確認する
- `/permissions` で権限設定を確認する
- 変更なしでリポジトリ調査を依頼する

VS Codeのmulti-root workspaceは、最初は使わないことを推奨しています。

理由は、どのプロジェクトを対象にしているのか、どの `CLAUDE.md` や `.claude/settings.json` が効いているのかが分かりにくくなるためです。

## 5. よくある質問と失敗を先回りして書く

AI導入では、だいたい同じような質問や不安が出ると思っています。

そこで、FAQとよくある失敗例も先に用意しました。

- [FAQ](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/faq.md)
- [よくある失敗例](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/common-pitfalls.md)
- [承認が必要な操作](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/approval-required-operations.md)

たとえばFAQには、次のような質問を入れています。

- Claude Codeを起動する場所が分かりません
- VS Codeで複数プロジェクトを開いています。このままでいいですか
- `/memory` で `CLAUDE.md` が出てきません
- `/permissions` で想定した設定になっていません
- AIにcommitしてもらっていいですか
- AIにpushしてもらっていいですか
- Skillsは最初から作るものですか
- 今回のharnessやルールファイルはSkillsですか

また、ヒヤリハット共有テンプレートも作りました。

[事故・ヒヤリハット共有テンプレート](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/templates/incident-report.md)

記入例として、以下のようなケースを入れています。

- 危険なGitコマンドの提案
- `.env` を読もうとした
- 依頼範囲外のリファクタリング
- 存在しないAPIを使った

## 6. 実プロジェクトに導入するときのテンプレも作った

共通harnessは、そのまま全プロジェクトで完成形になるわけではありません。

実際のプロジェクトに入れるときは、プロジェクト固有の情報を埋める必要があります。

たとえば:

- 実際のテストコマンド
- 実際のビルドコマンド
- ブランチ運用
- PRルール
- 使用してよいAIツール
- 入れてはいけない情報
- 相談先
- 具体的な対象リポジトリ

そのために、プロジェクト導入プロファイルを作りました。

[project-adoption-profile.md](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/templates/project-adoption-profile.md)

導入手順はこちらです。

[リポジトリ導入手順](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/examples/team-ai-development-harness/docs/repository-adoption-guide.md)

この流れを想定しています。

```text
共通harnessをコピーする
↓
project-adoption-profile.md を埋める
↓
CLAUDE.md / settings / policies / workflows をプロジェクト向けに調整する
↓
小さく試す
↓
FAQやヒヤリハットを更新する
```

## 7. 実際の作業手順はセッションログに残した

今回の作業は、Codexとの対話で少しずつ進めました。

最初はAI活用の入口づくりから始まり、OneNote運用、GitHubリポジトリ化、HTML生成、Claude Code安全設定、そしてTeam AI Development Harnessへと育っていきました。

その流れをセッションログとして残しています。

[セッションログ: AI活用記事からTeam AI Development Harnessまで](https://github.com/tikomosoftware/solo-ai-enablement/blob/main/publication-materials/ai-development-harness/2026-05-23-ai-enablement-harness-session.md)

セッションログには、以下をまとめています。

- ユーザーがどのように依頼したか
- Codexがどのように構成を提案したか
- どのファイルを作ったか
- どのような設計判断をしたか
- どのコミットで何を追加したか

完全な逐語録ではありませんが、実際にどう進めたかを追える記録になっています。

## まとめ

AI開発支援ツールは、個人で使うだけならすぐに始められます。

ただ、チームで使う場合は、便利さだけでなく、安全性、ルール、確認方法、共有方法が必要になります。

今回作ったharnessは、完璧な完成品というより、チームでAI活用を始めるための土台です。

特に大事だと思ったのは、次の3つです。

- AIに任せる前に、作業範囲と禁止事項を決める
- 最初は実装ではなく、調査と確認から始める
- FAQやヒヤリハットをチームで育てる

このharnessをもとに、社内説明用の30分説明会スライド、台本、メンバー向けはじめ方メモも用意しました。

まずは「安全に触ってみる」ところまでをチームでそろえ、そのあと実際の利用例やヒヤリハットを反映しながら、少しずつ育てていくつもりです。

これからClaude Codeをチームで使い始めるときの、最初のたたき台になればうれしいです。
