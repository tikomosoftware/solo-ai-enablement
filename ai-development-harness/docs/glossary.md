# AI開発支援 用語集

## この用語集の目的

この用語集は、Claude CodeやAI Development Harnessを使うときに出てくる用語を、チームメンバーが同じ意味で理解するための資料です。

ここでは厳密な製品仕様よりも、仕事で使うときの理解しやすさを優先しています。

## AI Development Harness

AIに開発作業を任せる前に、前提、権限、作業手順、確認方法を整えるための仕組みです。

AIに「いい感じにやって」と丸投げするのではなく、作業できる範囲、やってはいけないこと、確認方法を先に決めます。

このリポジトリでは、`CLAUDE.md`、`.claude/settings.json`、`policies/`、`workflows/`、`checklists/` などをまとめてharnessとして扱います。

## Context

AIに渡す前提情報です。

例:

- プロジェクト概要
- 設計方針
- コーディング規約
- テスト方針
- 変更してよい範囲
- 変更してはいけない範囲

AIは前提が不足すると一般論で判断します。チームの事情を反映するには、Contextを明示します。

## Guardrails

AIに許可すること、確認が必要なこと、禁止することを決める仕組みです。

例:

- `.env` を読ませない
- force pushを禁止する
- ファイル削除を禁止する
- ファイル編集は確認する
- 本番環境操作を禁止する

Claude Codeでは、`.claude/settings.json` が代表的なGuardrailsです。

## Workflow

AIと人間がどう作業を進めるかを決めた手順です。

例:

1. まず調査する
2. 方針を説明する
3. 人間が確認する
4. 実装する
5. テストする
6. 差分を確認する

このリポジトリでは、`workflows/` に作業手順を置いています。

## Verification

AIの作業結果を確認する方法です。

例:

- テスト
- ビルド
- lint
- 型チェック
- コードレビュー
- PRチェックリスト

AIが作ったコードでも、人間が作ったコードと同じように確認します。

## Claude Code

AnthropicのClaudeを使った、ターミナル上で動くAIコーディングエージェントです。

コードベースを読み、ファイルを編集し、コマンドを実行しながら開発作業を支援できます。

便利ですが、強力なぶん、起動場所、権限設定、禁止操作を明確にする必要があります。

## CLAUDE.md

Claude Codeに読ませるプロジェクトルールです。

例:

- 作業前に影響範囲を説明する
- 削除やforce pushをしない
- 既存の設計に合わせる
- 依頼範囲外のリファクタリングをしない

`CLAUDE.md` は「Claudeへの指示」です。実際に危険操作を止めるには、`.claude/settings.json` などの権限設定も必要です。

## .claude/settings.json

Claude Codeの権限設定ファイルです。

どの操作を許可するか、確認するか、禁止するかを設定します。

例:

- `allow`: 確認なしで許可
- `ask`: 実行前に確認
- `deny`: 禁止

削除、履歴改変、force push、秘密情報の読み取りなどは、原則としてdenyします。

## permissions

Claude Codeが実行できる操作の権限です。

Claude Code内で次を実行すると、現在の権限設定を確認できます。

```text
/permissions
```

## permission mode

Claude Codeの権限モードです。

初回利用では、次のどちらかを使うことを推奨します。

- `plan`: 調査や方針整理向け。ファイル編集をさせたくないときに使う
- `default`: 通常利用向け。編集やコマンド実行で確認が入りやすい

`bypassPermissions` は、通常の実務リポジトリでは使いません。

## /memory

Claude Codeが読み込んでいるルールやメモリを確認するコマンドです。

初回起動時に、`CLAUDE.md` が読み込まれているか確認します。

```text
/memory
```

## /permissions

Claude Codeの権限設定を確認するコマンドです。

`.claude/settings.json` が効いているか、危険操作がdenyになっているかを確認します。

```text
/permissions
```

## /ide

Claude CodeとVS CodeなどのIDE連携を確認・接続するためのコマンドです。

VS Code連携がうまくいかない場合に使います。

```text
/ide
```

## Project Root

対象リポジトリの一番上のフォルダです。

VS Codeで「フォルダーを開く」ときに選ぶフォルダと考えると分かりやすいです。

例:

```text
my-app/
  .git/
  CLAUDE.md
  .claude/
  src/
  tests/
```

この場合、`my-app/` がProject Rootです。

Claude Codeは、必ずProject Rootで起動します。

## multi-root workspace

VS Codeで複数のフォルダを1つのウィンドウに開く機能です。

便利ですが、Claude Codeの初回利用では推奨しません。

理由:

- 作業対象が曖昧になる
- どの `CLAUDE.md` が対象か分かりにくい
- どの `.claude/settings.json` が効いているか迷いやすい

最初は、1つのVS Codeウィンドウに1つのプロジェクトだけを開きます。

## Skills

Claudeに特定の作業能力や手順を追加するための再利用パッケージです。

今回作っているharnessそのものがSkillというわけではありません。

関係は次のように考えます。

```text
Harness
  チームでAIを安全に使うための上位構造

Skill
  特定の作業をうまくやるための再利用部品
```

例:

- コードレビューSkill
- テスト設計Skill
- リリースノート作成Skill
- セキュリティレビューSkill

このharness内の `prompts/` や `workflows/` は、将来的にSkills化できる材料になります。

Skillsは、必ず最初に作らなければいけないものではありません。

考え方は2つあります。

```text
最初から作るSkill
  すでに手順が決まっている反復作業

後から作るSkill
  実運用で何度も使われたpromptsやworkflows
```

たとえば、コードレビュー、テスト観点洗い出し、PR説明文作成のように作業の型があるものは、最初からSkill化してもよい候補です。

一方で、プロジェクト固有のデプロイ手順、組織固有のレビュー観点、独自ライブラリの使い方は、運用しながらノウハウが溜まってからSkill化する方が自然です。

初期導入では、まず `prompts/` と `workflows/` に作業の型を置き、繰り返し使うものが見えてきたらSkills化する進め方を推奨します。

## Agents

特定の役割を持つAIの振る舞いです。

例:

- 調査担当
- 実装担当
- レビュー担当
- テスト担当
- セキュリティ確認担当

作業の性質に合わせて役割を分けると、AIへの依頼が明確になります。

## Hooks

Claude Codeの作業タイミングに合わせて処理を実行する仕組みです。

例:

- ファイル編集後にformatterを実行する
- 危険なコマンドを実行前に検知する
- 作業終了時にログを残す

便利ですが、自動実行される仕組みなので、最初から無理に使う必要はありません。

## MCP

Model Context Protocolの略です。

Claude Codeを外部ツールやデータソースにつなぐための仕組みです。

例:

- GitHub
- Slack
- Figma
- Sentry
- データベース

外部ツールにアクセスできるぶん、権限管理と情報管理が重要です。

## GitHub Copilot

GitHubが提供するAI開発支援ツールです。

VS Codeなどのエディタでコード補完、チャット、編集支援に使えます。

短い補完や、エディタ内の小さな修正に向いています。

## GitHub Copilot CLI

ターミナル上でGitHub Copilotを使うための機能です。

コマンドの説明、Git操作の相談、エラー調査などに使えます。

危険なコマンドを提案された場合は、意味を確認してから実行します。

## Prompt

AIへの依頼文です。

よいPromptには、目的、背景、変更範囲、禁止事項、出力形式が含まれます。

例:

```text
まず関連ファイルを調査してください。
変更はまだ行わず、影響範囲、変更候補、確認すべきリスクを整理してください。
```

## Prompt Template

繰り返し使えるPromptの型です。

このリポジトリでは、`prompts/` に調査、実装、レビュー、テスト設計用のテンプレートを置いています。

## Checklist

作業前後に人間が確認する項目です。

例:

- AI作業前チェック
- コミット前チェック
- PR前チェック

AIを使う場合でも、人間の確認を省略しません。

## Incident / Near Miss

事故またはヒヤリハットです。

実害が出たものだけでなく、危険な提案、誤った説明、不要な変更、機密情報に触れそうな挙動も共有対象です。

共有には `templates/incident-report.md` を使います。

## Project Adoption Profile

実プロジェクトにharnessを導入するときに埋めるプロジェクト固有情報のテンプレートです。

例:

- 対象リポジトリ
- テストコマンド
- ビルドコマンド
- ブランチ運用
- PRルール
- 相談先
- AIに実行させないコマンド

このリポジトリでは、`templates/project-adoption-profile.md` に置いています。
