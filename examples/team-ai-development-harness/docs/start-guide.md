# Claude Code初回セットアップガイド

## 目的

このドキュメントは、チームのリポジトリでClaude Codeを安全に使い始めるための手順です。

## プロジェクトルートで始める

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

VS Codeで使う場合:

```text
1. VS Codeで my-app/ を開く
2. 統合ターミナルを開く
3. claude --permission-mode default を実行する
```

CLIで使う場合:

```text
cd C:\ProjectsDEV\my-app
claude --permission-mode default
```

調査だけから始める場合:

```text
claude --permission-mode plan
```

## 避ける起動場所

次の場所では起動しないでください。

```text
C:\
C:\Users\your-name
C:\ProjectsDEV
```

広いフォルダで起動すると、関係ないファイルや別プロジェクトまで作業対象に見えてしまう可能性があります。

## VS Codeの注意

原則として、1つのVS Codeウィンドウには1つのプロジェクトルートだけを開きます。

multi-root workspaceは、最初は使わないことを推奨します。

理由:

- 作業対象のプロジェクトが曖昧になる
- どの `CLAUDE.md` が読まれているか分かりにくい
- どの `.claude/settings.json` が効いているか迷いやすい
- 関係ないプロジェクトを参照するリスクが上がる

フロントエンドとバックエンドを同時に見る場合は、最初は別々のVS Codeウィンドウで開きます。

## 初回確認

Claude Codeを起動したら、次を確認します。

```text
/memory
```

`CLAUDE.md` が読み込まれているか確認します。

```text
/permissions
```

`.claude/settings.json` の設定が効いているか確認します。

VS Code連携が必要な場合:

```text
/ide
```

## 最初の依頼

初回は、実装ではなく調査から始めます。

```text
まずこのリポジトリの構成を調査してください。
変更はまだ行わず、主要なフォルダ、実行方法、テスト方法、注意点を整理してください。
```

次に、ルール確認を依頼します。

```text
CLAUDE.md、policies/common.md、docs/ai-development-policy.mdを読み、作業時に守るべきルールを要約してください。
まだファイル変更はしないでください。
```

