# Claude Code初回セットアップガイド

## このガイドの目的

このガイドは、チームのリポジトリでClaude Codeを安全に使い始めるための初回作業手順です。

最初のゴールは、コードを変更することではありません。正しい場所でClaude Codeを起動し、ルールと権限設定を確認し、変更なしでリポジトリ調査ができる状態にすることです。

## 初回作業のゴール

このガイドを終えると、次の状態になります。

- 対象リポジトリのプロジェクトルートでClaude Codeを起動できる。
- `CLAUDE.md` が読み込まれていることを確認できる。
- `.claude/settings.json` の権限設定を確認できる。
- 変更なしでリポジトリ構成を調査できる。
- 次に何を相談すればよいか分かる。

## 事前確認

作業前に次を確認します。

- 対象リポジトリをローカルにcloneしている。
- VS Codeで対象リポジトリを開ける。
- 対象リポジトリに `CLAUDE.md` がある。
- 対象リポジトリに `.claude/settings.json` がある。
- AIに入力してはいけない情報を理解している。

まだ対象リポジトリにharnessが入っていない場合は、先に `docs/repository-adoption-guide.md` を確認してください。

## Step 1: プロジェクトルートを確認する

プロジェクトルートとは、VS Codeで「フォルダーを開く」ときに選ぶ一番上のフォルダです。

例:

```text
my-app/
  .git/
  CLAUDE.md
  .claude/
    settings.json
  docs/
  policies/
  workflows/
  checklists/
  prompts/
  src/
  tests/
```

この例では `my-app/` がプロジェクトルートです。

プロジェクトルートには、通常 `.git/`、`README.md`、`src/`、`package.json`、`.sln` などがあります。

## Step 2: VS Codeで対象リポジトリを開く

VS Codeで使う場合は、対象リポジトリのプロジェクトルートだけを開きます。

```text
File > Open Folder > my-app/
```

原則として、1つのVS Codeウィンドウには1つのプロジェクトルートだけを開きます。

multi-root workspaceは、最初は使わないことを推奨します。

理由:

- 作業対象のプロジェクトが曖昧になる。
- どの `CLAUDE.md` が読まれているか分かりにくい。
- どの `.claude/settings.json` が効いているか迷いやすい。
- 関係ないプロジェクトを参照するリスクが上がる。

フロントエンドとバックエンドを同時に見る場合は、最初は別々のVS Codeウィンドウで開きます。

## Step 3: 統合ターミナルで場所を確認する

VS Codeの統合ターミナルを開きます。

PowerShellの場合:

```text
Get-Location
```

表示された場所が対象リポジトリのプロジェクトルートであることを確認します。

よい例:

```text
C:\ProjectsDEV\my-app
```

避ける例:

```text
C:\
C:\Users\your-name
C:\ProjectsDEV
```

広いフォルダで起動すると、関係ないファイルや別プロジェクトまで作業対象に見えてしまう可能性があります。

## Step 4: 最初はplan modeで起動する

初回は、ファイル編集をさせずに調査から始めます。

```text
claude --permission-mode plan
```

通常利用を始める場合は、確認が入りやすいdefault modeを使います。

```text
claude --permission-mode default
```

初回説明会や最初の練習では、`plan` を推奨します。

`bypassPermissions` は通常の業務リポジトリでは使いません。

## Step 5: ルールが読まれているか確認する

Claude Codeを起動したら、次を実行します。

```text
/memory
```

確認すること:

- `CLAUDE.md` が読み込まれている。
- チームルールが見えている。
- プロジェクト固有の注意点が反映されている。

`CLAUDE.md` が出てこない場合は、起動場所が違う可能性があります。

## Step 6: 権限設定を確認する

次を実行します。

```text
/permissions
```

確認すること:

- `.claude/settings.json` が効いている。
- 削除、reset、clean、rebase、force pushが禁止されている。
- 編集、commit、push、ファイル移動が確認対象になっている。
- `.env`、秘密鍵、トークンが読み取り禁止になっている。

想定と違う場合は、作業を進めず、展開担当者またはリポジトリ管理者に確認してください。

## Step 7: VS Code連携を確認する

VS Code連携が必要な場合は、Claude Code内で次を実行します。

```text
/ide
```

うまく連携しない場合は、次を確認します。

- VS Codeで対象リポジトリを開いている。
- VS Codeの統合ターミナルから `claude` を起動している。
- VS CodeがRestricted Modeになっていない。
- `code` コマンドがPATHに入っている。
- 拡張機能のインストールが会社ポリシーで制限されていない。

## Step 8: 変更なしでリポジトリを調査する

最初の依頼は、実装ではなく調査にします。

```text
まずこのリポジトリの構成を調査してください。
変更はまだ行わず、主要なフォルダ、実行方法、テスト方法、注意点を整理してください。
```

確認すること:

- ファイル変更が発生していない。
- リポジトリの概要が説明されている。
- 実行方法やテスト方法が整理されている。
- 不明点を勝手に推測せず、質問している。

## Step 9: ルールを要約させる

次に、ルールを理解しているか確認します。

```text
CLAUDE.md、policies/common.md、docs/ai-development-policy.mdを読み、
このリポジトリでAIを使うときに守るべきルールを要約してください。
まだファイル変更はしないでください。
```

確認すること:

- 禁止操作が説明されている。
- 情報管理の注意が説明されている。
- 作業フローが説明されている。
- 最終判断は人間が行うと説明されている。

## Step 10: 初回作業の結果を共有する

初回作業が終わったら、次をチームに共有します。

- 起動できたか。
- `/memory` と `/permissions` は想定どおりだったか。
- リポジトリ調査で便利だったこと。
- 不安に感じたこと。
- FAQに追加したい質問。

## 次に進む前に

コード変更を伴う作業を始める前に、次を読んでください。

- `policies/common.md`
- `docs/approval-required-operations.md`
- `checklists/before-ai-work.md`
- `prompts/investigate.md`
- `prompts/implement.md`

最初の実装は、小さく、戻しやすい作業から始めます。

