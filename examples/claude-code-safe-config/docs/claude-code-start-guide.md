# Claude Code初回セットアップガイド

## このドキュメントの目的

このドキュメントは、開発者が業務リポジトリでClaude Codeを使い始めるための初回セットアップ手順です。

細かい機能説明ではなく、「どこにファイルを置くか」「どこで起動するか」「VS Codeでどう始めるか」「最初に何を確認するか」に絞っています。

## まず最初に確認すること

Claude Codeを使う前に、次を確認します。

- Claude Codeを利用できるアカウントがある。
- 対象リポジトリをローカルにcloneしている。
- VS Codeを利用する場合、対象リポジトリをVS Codeで開ける。
- `CLAUDE.md` と `.claude/settings.json` を配置できる。
- 業務データ、秘密情報、本番データをAIに入力しないルールを理解している。

## 推奨フォルダ構成

Claude Code用の設定は、対象リポジトリのプロジェクトルートに置きます。

プロジェクトルートとは、VS Codeで「フォルダーを開く」ときに選ぶ一番上のフォルダです。通常は `.git`、`README.md`、`package.json`、`src/` などがある場所です。

例:

```text
my-app/
  .git/
  .claude/
    settings.json
  docs/
    ai-development-policy.md
    claude-code-start-guide.md
    policies/
      common.md
      frontend.md
      backend.md
      windows-app.md
      devops.md
      qa.md
  src/
  tests/
  README.md
  CLAUDE.md
```

最低限必要なファイル:

```text
my-app/
  CLAUDE.md
  .claude/
    settings.json
  docs/
    ai-development-policy.md
    claude-code-start-guide.md
    policies/
      common.md
```

担当領域に応じて、`policies/` に補足ファイルを追加します。

## VS Codeでの始め方

VS Codeで使う場合は、次の流れにします。

1. VS Codeを開く。
2. `File > Open Folder` から対象リポジトリのプロジェクトルートを開く。
3. 複数プロジェクトを同じVS Codeウィンドウに追加しない。
4. VS Codeの統合ターミナルを開く。
5. ターミナルの場所がプロジェクトルートであることを確認する。
6. `claude` を実行する。

```text
claude
```

最初は、調査だけに向いたmodeから始めるのがおすすめです。

```text
claude --permission-mode plan
```

通常利用を始める場合は、確認が入りやすいdefault modeを使います。

```text
claude --permission-mode default
```

## VS Code拡張の入れ方

Claude Codeは、VS Codeの統合ターミナルから `claude` を実行すると、VS Code拡張が自動で入る場合があります。

自動で入らない場合は、次を確認します。

- VS Codeの統合ターミナルから実行しているか。
- VS Codeで対象リポジトリを開いているか。
- VS CodeがRestricted Modeになっていないか。
- VS Codeに拡張機能をインストールする権限があるか。
- `code` コマンドがPATHに入っているか。

`code` コマンドが使えない場合は、VS Codeのコマンドパレットから次を探して実行します。

```text
Shell Command: Install 'code' command in PATH
```

Windows環境や会社PCでは、拡張機能のインストールが管理者設定で制限されている場合があります。その場合は、情シスまたは管理者に確認します。

## 外部ターミナルからVS Codeに接続する

Windows TerminalやPowerShellなど、VS Code外のターミナルからClaude Codeを起動している場合は、Claude Code内で次を実行します。

```text
/ide
```

これでVS Codeと連携できる場合があります。

ただし、最初はVS Codeの統合ターミナルから起動するほうがわかりやすいです。

## multi-root workspaceは原則使わない

VS Codeには、複数フォルダを1つのウィンドウに入れるmulti-root workspaceがあります。

Claude Codeの業務利用では、最初は使わないことを推奨します。

理由:

- 作業対象のプロジェクトが曖昧になる。
- どの `CLAUDE.md` が読まれているか分かりにくくなる。
- どの `.claude/settings.json` が効いているか迷いやすい。
- 関係ないプロジェクトのファイルを参照するリスクが上がる。
- VS Code連携時のcurrent directoryとworkspace folderがずれる可能性がある。

推奨:

```text
1つのVS Codeウィンドウ = 1つのプロジェクトルート
```

フロントエンドとバックエンドを同時に見る必要がある場合も、最初は別々のVS Codeウィンドウで開きます。

```text
VS Code window 1: my-frontend/
VS Code window 2: my-backend/
```

それぞれの統合ターミナルで、それぞれのルートから `claude` を起動します。

## CLIでの始め方

CLIだけで使う場合も、必ず対象プロジェクトに移動してから起動します。

よい例:

```text
cd C:\ProjectsDEV\my-app
claude --permission-mode default
```

調査だけから始める例:

```text
cd C:\ProjectsDEV\my-app
claude --permission-mode plan
```

避ける例:

```text
cd C:\
claude
```

```text
cd C:\Users\your-name
claude
```

```text
cd C:\ProjectsDEV
claude
```

広いフォルダで起動すると、関係ないファイルや別プロジェクトまで作業対象に見えてしまう可能性があります。

## 初回起動後に確認すること

Claude Codeを起動したら、まず次を確認します。

### 1. 読み込まれているルールを確認する

```text
/memory
```

`CLAUDE.md` が読み込まれているか確認します。

### 2. 権限設定を確認する

```text
/permissions
```

`.claude/settings.json` のdeny、ask、allowが想定どおりに入っているか確認します。

### 3. VS Code連携を確認する

VS Code連携が必要な場合は、次を実行します。

```text
/ide
```

差分表示やファイル参照がVS Codeと連携できているか確認します。

## 最初にClaudeへ依頼する内容

初回は、いきなり実装させず、調査だけを依頼します。

```text
まずこのリポジトリの構成を調査してください。
変更はまだ行わず、主要なフォルダ、実行方法、テスト方法、注意点を整理してください。
```

次に、ルール確認を依頼します。

```text
このリポジトリのCLAUDE.mdとAI開発利用ポリシーを読み、作業時に守るべきルールを要約してください。
まだファイル変更はしないでください。
```

## 安全な依頼の型

実装を依頼するときは、次の型を使います。

```text
目的:
変更してよい範囲:
変更してはいけない範囲:
確認してほしいこと:
実行してよいコマンド:
実行してはいけないコマンド:
```

例:

```text
目的: ログイン画面のエラーメッセージを分かりやすくしたい
変更してよい範囲: src/pages/login 配下
変更してはいけない範囲: API仕様、認証処理、ルーティング
確認してほしいこと: 既存の文体、テスト有無、表示崩れ
実行してよいコマンド: npm run test, npm run build
実行してはいけないコマンド: git reset, git clean, git push, rm, Remove-Item
```

## よくあるつまずき

### Claudeが別のフォルダを見ている

起動したターミナルのカレントディレクトリを確認します。

```text
pwd
```

Windows PowerShellの場合:

```text
Get-Location
```

対象リポジトリのルートでなければ、移動してから起動し直します。

### CLAUDE.mdが読まれていない

`/memory` で読み込み状況を確認します。

`CLAUDE.md` がプロジェクトルートにあるか、または `.claude/CLAUDE.md` にあるか確認します。

### 権限設定が効いていない

`/permissions` で確認します。

`.claude/settings.json` がプロジェクトルート配下にあるか確認します。

### VS Code拡張が動かない

次を確認します。

- VS Codeで対象フォルダを開いているか。
- Restricted Modeになっていないか。
- 統合ターミナルから `claude` を実行しているか。
- `code` コマンドがPATHにあるか。
- 拡張機能のインストールが会社ポリシーで制限されていないか。

## まとめ

Claude Codeを安全に使い始めるポイントは、次の3つです。

- 対象リポジトリのプロジェクトルートで起動する。
- VS Codeでは原則1プロジェクト1ウィンドウにする。
- 最初は `plan` または `default` modeで始め、`/memory` と `/permissions` を確認する。

