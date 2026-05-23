# セッションログ: AI啓蒙記事からTeam AI Development Harnessまで

日付: 2026-05-23  
対象リポジトリ: `tikomosoftware/solo-ai-enablement`  
ローカル作業場所: `C:\ProjectsDEV\solo-ai-enablement`

## このログの目的

このファイルは、AI啓蒙・AI開発支援の社内展開に向けて、ユーザーがCodexへどのように依頼し、Codexがどのように資料構成を作っていったかを残すための記録です。

注意:

- ここには、ユーザーとCodexの見えているやり取り、判断、作成物、コミットを中心に記録しています。
- Codexの内部推論や非表示の思考過程そのものは記録していません。
- ただし、Codexがユーザーに説明した判断理由や作業方針は、できるだけ残しています。

## 全体の流れ

最初は、AIをまだ使っていないプロジェクトメンバー向けの記事を作る相談から始まりました。

その後、Markdown記事を作成し、GitHubリポジトリ化し、MarkdownからHTMLを生成する仕組みを入れました。

途中で、業務利用の主軸がGitHub CopilotとClaude Codeであることが分かり、これらの使い方記事を追加しました。

さらに、Claude Codeを業務利用するための安全設定、AI開発利用ポリシー、チーム向けのAI Development Harness構成へと発展しました。

最終的に、ユーザー向け資料として以下が整いました。

- AI啓蒙記事
- GitHub Copilot / Claude Code利用記事
- Claude Code安全設定サンプル
- Team AI Development Harness
- メンバー向けドキュメント
- ポリシー
- ワークフロー
- チェックリスト
- プロンプトテンプレート
- 用語集
- FAQ
- よくある失敗例
- プロジェクト導入プロファイル
- ファシリテーター向け資料の初期構成

## 1. AI啓蒙記事の構想

### ユーザーの依頼

ユーザーは、新しいプロジェクトとして、アプリを作るのではなく、プロジェクトメンバーに対してAIについて啓蒙する取り組みを始めたいと相談しました。

主な意図:

- 大手企業でいう「AI推進部」のような活動をしたい。
- AIを全く使っていないメンバーに向けて説明したい。
- AIの使い方だけでなく、使ってよいこと、いけないこと、事例も扱いたい。
- 記事として少しずつ、または一気に公開したい。

### Codexの提案

Codexは、最初の構成として以下を提案しました。

1. AIとは何か
2. なぜ今チームでAIを使うのか
3. AIにできること・苦手なこと
4. AIを使ってよいこと・いけないこと
5. 情報管理とセキュリティ
6. 実際の業務活用例
7. よい依頼の仕方、プロンプトの基本
8. 失敗例と注意点
9. チーム内ルール
10. まず試す小さな実践課題

この段階では、記事だけでなく、最終的に以下へ育てるとよいと説明しました。

- 社内AI活用ガイドライン
- 業務別プロンプト集
- 活用事例集

## 2. 初期Markdown記事の作成

### ユーザーの依頼

ユーザーは、1〜9についてはこの場で記事ドラフトを書けるはずなので、まず9本のMarkdownファイルとして作ってほしいと依頼しました。

10番は実践例を後から書くため、インデックスのような形にしたいという意図でした。

### Codexの作業

最初に `C:\ProjectsDEV\AI_Enablement_Articles` を作成し、以下のMarkdownを作りました。

- `README.md`
- `01_ai-toha-nanika.md`
- `02_naze-ima-team-de-ai.md`
- `03_dekiru-koto-nigate-na-koto.md`
- `04_tsukatte-yoi-koto-ikenai-koto.md`
- `05_jouhou-kanri-security.md`
- `06_gyoumu-katsuyou-rei.md`
- `07_prompt-no-kihon.md`
- `08_shippai-rei-chuui-ten.md`
- `09_team-rule.md`
- `10_jissen-index.md`

このフォルダは後に旧ドラフトとなり、リポジトリ作成後に `AI_Enablement_Articles_old` へリネームしました。

## 3. OneNote運用の検討

### ユーザーの質問

ユーザーは、MarkdownをOneNoteへ直接アップロードできるか、またOneNote上で編集するのではなく、Markdownを正本としてOneNoteを更新していく運用が可能か質問しました。

### Codexの説明

Codexは次のように説明しました。

- Markdownを正本、OneNoteを公開ビューにする運用はよい。
- OneNote APIを使うにはMicrosoft Graph APIが必要。
- Microsoft 365 Businessアカウントがあっても、Graph APIの利用やアプリ登録、権限同意は会社の管理設定に左右される。
- Graph Explorerで `GET https://graph.microsoft.com/v1.0/me/onenote/notebooks` を試すと権限確認できる。

その後、Graph Explorerが使えない、権限がないという状況が分かり、OneNote自動同期はいったん後回しにする判断になりました。

### 代替案

Codexは、MarkdownからHTMLを生成し、HTMLをOneNoteに貼り付ける運用を提案しました。

```text
Markdownを書く
↓
git push
↓
自動処理でHTMLへ変換
↓
HTMLをOneNoteに貼る、または将来的にAPI同期
```

## 4. GitHubリポジトリ作成とHTML生成構成

### ユーザーの依頼

ユーザーはGitHubリポジトリを作ることにし、名前候補として「ひとりAI推進部」の英語名を相談しました。

Codexは `solo-ai-enablement` を提案しました。

ユーザーは以下のリポジトリを作成しました。

```text
https://github.com/tikomosoftware/solo-ai-enablement.git
```

### Codexの作業

Codexはリポジトリをクローンし、以下の構成を作りました。

```text
articles/
docs/
scripts/
.github/workflows/
package.json
README.md
```

主なファイル:

- `articles/`: Markdown原本
- `docs/`: 生成HTML
- `scripts/build-html.js`: MarkdownからHTMLを生成するNode.jsスクリプト
- `.github/workflows/build-html.yml`: GitHub ActionsでHTMLを再生成するワークフロー

HTML生成スクリプトは依存ライブラリなしのNode.jsで作成しました。

### 初回コミット

初回コミット:

```text
483be79 Initial AI enablement article workflow
```

## 5. GitHub Copilot / Claude Codeの記事追加

### ユーザーの依頼

業務で使う代表的なAIツールは以下の2つだと説明されました。

- GitHub Copilot
- Claude Code

ユーザーは、それぞれについて使い方記事を追加したいと依頼しました。

特に:

- GitHub CopilotはCLIとVS Code
- Claude CodeもCLIとVS Code
- Claude Codeは機能が多いため、代表的な機能も扱いたい

### Codexの作業

Codexは公式ドキュメントを確認した上で、以下の記事を追加しました。

- `11_github-copilot-cli.md`
- `12_github-copilot-vscode.md`
- `13_claude-code-cli.md`
- `14_claude-code-vscode.md`
- `15_claude-code-advanced.md`

Claude Codeの代表的な拡張機能として扱ったもの:

- 設定ファイル
- MCP
- Hooks
- Skills
- Agents
- Plugins

コミット:

```text
5a9b5a7 Add Copilot and Claude Code articles
```

## 6. Claude Code業務利用の安全設定サンプル

### ユーザーの依頼

ユーザーは、Claude Codeを業務でメインに使ってよいという話になったが、最低限の安全設定が必要だと考えていました。

特に気にしていたこと:

- ファイルを大量削除するようなコマンド
- force push
- 履歴をなかったことにする操作
- ファイル削除や移動はユーザーに確認してほしい
- 開発者目線でルールファイルのサンプルがほしい

### Codexの判断

Codexは、Claude Codeには以下の2種類があると整理しました。

```text
CLAUDE.md
  Claudeに読ませる作業ルール

.claude/settings.json
  実際に許可・確認・禁止する権限設定
```

`CLAUDE.md` だけでは危険操作の防波堤としては不十分で、権限設定も必要だと説明しました。

### 作成物

記事:

- `articles/16_claude-code-business-rules.md`

サンプル:

```text
examples/claude-code-safe-config/
  CLAUDE.md
  .claude/settings.json
```

内容:

- 削除、`git reset`、`git clean`、`git rebase`、force pushを禁止
- `.env` や秘密鍵の読み書きを禁止
- ファイル編集、commit、push、ファイル移動を確認対象に設定
- `bypassPermissions` は通常の業務リポジトリでは使わない方針

コミット:

```text
1503fcb Add Claude Code business safety rules
```

## 7. AI開発利用ポリシーの追加

### ユーザーの依頼

ユーザーは、エンジニア向けに `ai-development-policy.md` のサンプルを作りたいと依頼しました。

分けるなら:

- フロントエンド
- バックエンド
- Windowsアプリ
- など

### Codexの作業

最初は `examples/claude-code-safe-config/docs/ai-development-policy.md` として全部入りのポリシーを作成しました。

その後、ユーザーから「エンジニア向けとかQA向けとかは、このファイルを編集して必要なものだけ抜き出すのか」と質問がありました。

Codexは、全部入りでは迷うため、以下のように分割しました。

```text
examples/claude-code-safe-config/docs/
  ai-development-policy.md
  policies/
    common.md
    frontend.md
    backend.md
    windows-app.md
    devops.md
    qa.md
```

コミット:

```text
8eedc2d Add AI development policy sample
78cae9d Split AI development policy by role
```

## 8. プロジェクトルートとVS Code利用の注意

### ユーザーの質問

ユーザーは、Claude CodeをCLIで使う場合、プロジェクトルートという感覚が分かりにくいと質問しました。

また、PC全体を見てしまうのではないか、サンドボックスではないのかを心配しました。

### Codexの説明

Codexは以下のように説明しました。

- プロジェクトルートとは、VS Codeで「フォルダーを開く」ときに選ぶ一番上のフォルダ。
- CLIでも、対象リポジトリに `cd` してから `claude` を起動する。
- `C:\`、`C:\Users`、`C:\ProjectsDEV` など広い場所では起動しない。
- Claude CodeはOSレベルで完全に隔離されたサンドボックスではない。
- 起動場所、`CLAUDE.md`、`.claude/settings.json` で安全に扱う。

この説明は、後に `docs/start-guide.md` と記事に反映されました。

コミット:

```text
d295daa Document Claude Code project root setup
```

## 9. Claude Code初回セットアップガイド

### ユーザーの依頼

ユーザーは、Tips的なものは別ファイルにした方がよいか、VS Code拡張の入れ方や設定も含めるべきか質問しました。

Codexは、`claude-code-start-guide.md` のような初回セットアップガイドとして分けることを提案しました。

### 作成物

```text
examples/claude-code-safe-config/docs/claude-code-start-guide.md
```

内容:

- プロジェクトルートとは何か
- VS Codeでの始め方
- VS Code拡張の入れ方
- `code` コマンドがPATHにない場合
- `/ide` で外部ターミナルから接続
- multi-root workspaceは原則使わない
- CLIでの起動場所
- `/memory` と `/permissions` の確認
- 最初にClaudeへ依頼する内容

コミット:

```text
5f1e7be Add Claude Code start guide
```

## 10. 旧ドラフトフォルダのリネーム

### 状況

ユーザーは、右下に表示されるファイル一覧が10までしか出ていないことに気づきました。

Codexが確認したところ、以下の2つのフォルダがありました。

```text
C:\ProjectsDEV\AI_Enablement_Articles
C:\ProjectsDEV\solo-ai-enablement
```

前者は最初に作った旧ドラフトで、後者がGitHubリポジトリの正本でした。

### ユーザーの依頼

ユーザーは、削除は自分で行うので、リネームだけしてほしいと依頼しました。

### 作業

```text
C:\ProjectsDEV\AI_Enablement_Articles
↓
C:\ProjectsDEV\AI_Enablement_Articles_old
```

Codexは、削除やリネームは人間に確認するという方針が大事だと説明しました。

## 11. Team AI Development Harnessへの発展

### ユーザーの相談

ユーザーは、最近「harness」という考え方を聞くことがあり、チーム開発では今回のようなルールを共有する形になるのか質問しました。

### Codexの説明

Codexは、harnessを以下の4層で説明しました。

```text
Context      AIに渡す前提
Guardrails   危険操作を止める仕組み
Workflow     作業の進め方
Verification 確認方法
```

現在の `claude-code-safe-config` はClaude Code安全設定サンプルとしてはよいが、チーム開発向けには、よりharnessとして整理した構成を別に作ることを提案しました。

### 作成物

```text
examples/team-ai-development-harness/
```

初期構成:

```text
README.md
CLAUDE.md
.claude/settings.json
docs/
policies/
workflows/
checklists/
prompts/
```

作成した主な資料:

- `docs/harness-concept.md`
- `docs/start-guide.md`
- `docs/ai-development-policy.md`
- `policies/common.md`
- `policies/frontend.md`
- `policies/backend.md`
- `policies/windows-app.md`
- `policies/devops.md`
- `policies/qa.md`
- `workflows/ai-assisted-development.md`
- `workflows/code-review.md`
- `workflows/pull-request.md`
- `checklists/before-ai-work.md`
- `checklists/before-commit.md`
- `checklists/before-pr.md`
- `prompts/investigate.md`
- `prompts/implement.md`
- `prompts/review.md`
- `prompts/test-design.md`

コミット:

```text
5672511 Add team AI development harness template
```

## 12. 展開用資料の追加

### ユーザーの相談

ユーザーは、会社メンバーへ展開するには何が足りないか質問しました。

Codexは、以下が必要になると指摘しました。

- 導入ロードマップ
- メンバー向け最初の課題
- FAQ
- 使い分け表
- 事故・ヒヤリハット共有テンプレート
- 承認が必要な操作リスト
- リポジトリ導入手順

### 作成物

```text
docs/rollout-plan.md
docs/first-exercise.md
docs/faq.md
docs/tool-selection-guide.md
docs/approval-required-operations.md
docs/repository-adoption-guide.md
templates/incident-report.md
```

後に `rollout-plan.md` はファシリテーター向けへ移動しました。

コミット:

```text
e83a6fe Add AI rollout and adoption materials
```

## 13. FAQ、よくある失敗例、ヒヤリハット記入例

### ユーザーの依頼

ユーザーは、FAQやヒヤリハット共有テンプレートは空欄ではなく、ある程度想定される質問や失敗例を先に入れておいた方がよいと考えました。

### Codexの作業

FAQを拡充しました。

追加した主な質問:

- Claude Codeを起動する場所が分かりません
- VS Codeで複数プロジェクトを開いています。このままでいいですか
- `/memory` でCLAUDE.mdが出てきません
- `/permissions` で想定した設定になっていません
- permission modeは何を使えばいいですか
- AIにcommit/pushしてもらっていいですか
- AIに依存パッケージを追加してもらっていいですか
- AIが「テストは不要」と言っています。信じていいですか
- AIが知らないライブラリを使おうとしています

よくある失敗例:

```text
docs/common-pitfalls.md
```

事故・ヒヤリハット共有テンプレートに記入例を追加しました。

記入例:

- 危険なGitコマンドの提案
- `.env`を読もうとした
- 依頼範囲外のリファクタリング
- 存在しないAPIを使った

コミット:

```text
eb1ad0a Add common AI usage pitfalls and examples
```

## 14. ファシリテーター向け資料の分離

### ユーザーの指摘

ユーザーは、`rollout-plan.md` は説明者側の資料に見えるため、メンバー向け資料とは分けた方がよいと指摘しました。

### Codexの判断

Codexは、`docs/` はメンバー向け、`facilitator/` は展開担当者向けと分けることを提案しました。

### 作成物

```text
facilitator/
  README.md
  rollout-plan.md
  session-plan-30min.md
  explanation-script-30min.md
  adoption-checklist.md
```

説明:

- 説明会で使う資料は、参加者に見せる資料
- 展開担当者向け資料は、説明する人が準備や進行に使う裏方資料

コミット:

```text
7f09244 Separate facilitator rollout materials
```

## 15. READMEとSTRUCTURE.mdの分離

### ユーザーの相談

ユーザーは、全体構成が見にくくなってきたため、`STRUCTURE.md` のような構成ガイドを `README.md` と分けるべきか相談しました。

### Codexの提案

Codexは、役割を以下のように整理しました。

```text
README.md
  最初に読む入口

STRUCTURE.md
  フォルダとファイルの意味を説明する地図
```

### 作成物

```text
examples/team-ai-development-harness/STRUCTURE.md
```

内容:

- フォルダごとの役割
- メンバーが最初に読むもの
- 展開担当者が読むもの
- AIに読ませるもの
- 人間が確認に使うもの
- 説明会で使う資料と展開担当者向け資料の違い
- 初回説明会で扱う範囲
- 最初に育てるべき資料

コミット:

```text
7acafcf Add harness structure guide
```

## 16. プロジェクト導入プロファイル

### ユーザーの依頼

ユーザーは、実際のプロジェクトにharnessを入れる段階では、テストコマンドやブランチ運用などを具体的に考える必要があるため、それを整理するテンプレートがほしいと依頼しました。

### 作成物

```text
templates/project-adoption-profile.md
```

項目:

- 基本情報
- 対象リポジトリ
- AI支援の対象範囲 / 対象外範囲
- 使用してよいAIツール
- 入力してはいけない情報
- 実際のビルドコマンド
- 実際のテストコマンド
- lint / 型チェック
- AIに実行させないコマンド
- ブランチ運用
- PRルール
- レビュー観点
- テスト方針
- デプロイ / 本番操作
- 相談先
- 導入時に更新するファイル
- 決まっていないこと / あとで見直すこと

コミット:

```text
e4d6a6a Add project adoption profile template
```

## 17. start-guideとcommon policyの改善

### ユーザーの依頼

Codexが以前に指摘していた以下2点を充実させてほしいと依頼しました。

- `docs/start-guide.md` をもう少し実際の初回作業に寄せる
- `policies/common.md` を社内ルールとして使いやすい文体に整える

### Codexの作業

`docs/start-guide.md` をStep形式に変更しました。

追加・整理した内容:

- 初回作業のゴール
- 事前確認
- プロジェクトルート確認
- VS Codeで開く手順
- `Get-Location` で起動場所確認
- 初回は `plan` mode 推奨
- `/memory` の確認
- `/permissions` の確認
- `/ide` の確認
- 変更なしでリポジトリ調査
- ルール要約
- 初回結果の共有
- 次に読む資料

`policies/common.md` は、社内ルールとして読ませやすい文体に変更しました。

追加・整理した内容:

- このポリシーの目的
- 基本方針
- 最初に守ること
- AIに任せてよい作業
- AIに任せない作業
- 入力禁止情報
- 事前承認が必要な操作
- 標準フロー
- レビュー観点
- よく使う依頼の型
- 事故・ヒヤリハット共有

コミット:

```text
a1645a9 Refine start guide and common AI policy
```

## 18. 用語集の追加

### ユーザーの質問

ユーザーは、Claude Codeの「Skills」とは、今回作ったharnessやルールファイルのことだと思ってよいのか質問しました。

Codexは、近いが同じものではないと説明しました。

整理:

```text
CLAUDE.md
  プロジェクトで守るルール、前提、作業方針

.claude/settings.json
  許可、確認、禁止する操作の設定

policies / workflows / checklists / prompts
  チームで共有する運用資料、手順、テンプレート

Skills
  特定の作業をClaudeにうまくやらせるための再利用パッケージ

Harness
  それらをまとめて、チームで安全にAIを使うための上位構造
```

### 作成物

```text
docs/glossary.md
```

主な用語:

- AI Development Harness
- Context
- Guardrails
- Workflow
- Verification
- Claude Code
- `CLAUDE.md`
- `.claude/settings.json`
- permissions
- permission mode
- `/memory`
- `/permissions`
- `/ide`
- Project Root
- multi-root workspace
- Skills
- Agents
- Hooks
- MCP
- GitHub Copilot
- GitHub Copilot CLI
- Prompt
- Prompt Template
- Checklist
- Incident / Near Miss
- Project Adoption Profile

コミット:

```text
2e74673 Add AI development glossary
```

## 19. Skillsの位置づけを追記

### ユーザーの質問

ユーザーは、Skillsは仕事をしていく上で溜まった情報を後からまとめるものなのか、それとも記事やYouTubeで見るように最初から作るものなのか質問しました。

### Codexの説明

Codexは、Skillsは最初から作ってもよいし、後から育ったノウハウをまとめてもよいと説明しました。

整理:

```text
最初から作るSkill
  すでに手順が決まっている反復作業

後から作るSkill
  実運用で何度も使われたpromptsやworkflows
```

最初から作る候補:

- コードレビュー
- テスト観点洗い出し
- PR説明文作成
- リリースノート作成

後から作る候補:

- プロジェクト固有のデプロイ手順
- 社内独自のレビュー観点
- 独自ライブラリの使い方
- よくある障害対応

### 反映先

- `docs/glossary.md`
- `docs/harness-concept.md`
- `docs/faq.md`

FAQに追加した質問:

- Skillsは最初から作るものですか
- 今回のharnessやルールファイルはSkillsですか

コミット:

```text
db1e43c Clarify how Skills fit into harness
```

## 20. 現在の主要構成

最終的な主要構成:

```text
solo-ai-enablement/
  articles/
  docs/
  examples/
    claude-code-safe-config/
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
  scripts/
  session-logs/
```

Team AI Development Harness:

```text
examples/team-ai-development-harness/
  README.md
  STRUCTURE.md
  CLAUDE.md
  .claude/settings.json
  docs/
    ai-development-policy.md
    harness-concept.md
    start-guide.md
    glossary.md
    first-exercise.md
    faq.md
    common-pitfalls.md
    tool-selection-guide.md
    approval-required-operations.md
    repository-adoption-guide.md
  facilitator/
    README.md
    rollout-plan.md
    session-plan-30min.md
    explanation-script-30min.md
    adoption-checklist.md
  policies/
    common.md
    frontend.md
    backend.md
    windows-app.md
    devops.md
    qa.md
  workflows/
    ai-assisted-development.md
    code-review.md
    pull-request.md
  checklists/
    before-ai-work.md
    before-commit.md
    before-pr.md
  prompts/
    investigate.md
    implement.md
    review.md
    test-design.md
  templates/
    incident-report.md
    project-adoption-profile.md
```

## 21. 主要な設計判断

### Markdownを正本にする

OneNoteを直接編集するのではなく、Markdownを正本にする方針にしました。

理由:

- 変更履歴が残る
- GitHubで管理できる
- HTML生成や将来的なOneNote同期へつなげやすい

### docsとfacilitatorを分ける

`docs/` はメンバー向け、`facilitator/` は展開担当者向けに分けました。

理由:

- メンバーに不要な運営側資料を読ませない
- 説明者が使う台本や展開計画を分けて管理できる

### READMEとSTRUCTUREを分ける

`README.md` は入口、`STRUCTURE.md` は全体地図にしました。

理由:

- READMEが重くなりすぎるのを防ぐ
- 構成理解を別資料に逃がせる

### HarnessとSkillsを分けて説明する

Harnessはチームで安全にAIを使うための上位構造、Skillsは特定作業の再利用パッケージとして整理しました。

理由:

- Claude Code固有名詞の誤解を減らす
- 初期導入でSkillsまで詰め込みすぎない
- prompts/workflowsからSkillsへ育てる道筋を作る

## 22. 最後の状態

ユーザーは、ファシリテーター向け資料は今後考えるとして、ユーザー向け資料は概ねこの形でよいと判断しました。

Codexは、ユーザー向け資料としては70〜80%程度の完成度に来ており、次はファシリテーター向け資料を育てるのが自然だと説明しました。

次回以降の候補:

- `facilitator/session-01-30min/explanation-script-30min.md` を本番用に磨く
- 説明会スライド構成を作る
- デモ手順を作る
- 説明後アンケートを作る

## 23. コミット履歴メモ

このセッションで作成・更新された主なコミット:

```text
483be79 Initial AI enablement article workflow
5a9b5a7 Add Copilot and Claude Code articles
1503fcb Add Claude Code business safety rules
8eedc2d Add AI development policy sample
78cae9d Split AI development policy by role
d295daa Document Claude Code project root setup
5f1e7be Add Claude Code start guide
5672511 Add team AI development harness template
e83a6fe Add AI rollout and adoption materials
eb1ad0a Add common AI usage pitfalls and examples
7f09244 Separate facilitator rollout materials
7acafcf Add harness structure guide
e4d6a6a Add project adoption profile template
a1645a9 Refine start guide and common AI policy
2e74673 Add AI development glossary
db1e43c Clarify how Skills fit into harness
```

## 24. このログ作成時点の補足

このログは、会話内容を完全な逐語録としてではなく、作業記録として再構成したものです。

できるだけユーザーの依頼内容、Codexの提案、作成したファイル、設計判断を残しています。

より完全な逐語録が必要な場合は、今後のセッションでは、節目ごとに `session-logs/` へログを追記していく運用にするとよいです。
