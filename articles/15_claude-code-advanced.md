# 15. Claude Codeの代表的な拡張機能

## この記事の目的

この記事では、Claude Codeの基本利用に慣れたあとに知っておきたい代表的な機能を整理します。

Claude Codeは、単にCLIで会話するだけの道具ではありません。設定ファイル、MCP、Hooks、Skills、Agents、Pluginsなどを使うことで、チームの開発フローに合わせて拡張できます。

## 設定ファイル

Claude Codeは、設定ファイルで動作を調整できます。

公式ドキュメントでは、`settings.json` がClaude Codeの設定機構として説明されています。ユーザー全体に効く設定、プロジェクトで共有する設定、個人用のローカル設定、企業管理ポリシーの設定があります。

代表的な配置は次のとおりです。

- `~/.claude/settings.json`
- `.claude/settings.json`
- `.claude/settings.local.json`

チームで共有したいルールは `.claude/settings.json`、個人だけの試行錯誤は `.claude/settings.local.json` に分けると運用しやすくなります。

## MCP

MCPはModel Context Protocolの略で、Claude Codeを外部ツールやデータソースにつなぐための仕組みです。

公式ドキュメントでは、MCPを使うことで、Issue管理、監視ツール、データベース、Figma、Slack、Gmailなど、外部ツールと連携できると説明されています。

たとえば、次のような使い方が考えられます。

- GitHub Issueの内容を読んで実装する
- Sentryのエラー情報を見て原因を調べる
- Figmaのデザインを参照してUIを修正する
- 社内DBを参照して調査する
- SlackやGmailなどの業務ツールと連携する

ただし、MCPは外部データにアクセスできるぶん、権限管理が重要です。接続するサーバー、扱う情報、ログに残る内容を確認してから使います。

## Hooks

Hooksは、Claude Codeの作業ライフサイクルに合わせてコマンドを実行する仕組みです。

たとえば、次のような用途があります。

- ファイル編集後にformatterを実行する
- テスト完了後に通知する
- 特定の危険操作を検知する
- 作業終了時にログを保存する
- Claudeが入力待ちになったら通知する

Hooksは便利ですが、コマンドを自動実行する仕組みなので、慎重に設計します。特に、削除、デプロイ、データベース更新、本番環境操作につながるHookは避けるか、明確な承認フローを入れます。

## Skills

Skillsは、Claude Codeに特定の作業手順や知識を与えるための仕組みです。

たとえば、チーム専用のSkillとして次のようなものを用意できます。

- リリースノート作成
- コードレビュー観点
- 障害調査手順
- フロントエンド実装ルール
- API設計ルール
- 社内ドキュメント作成ルール

Skillは、毎回長い指示を手入力しなくても、チームで共通の作業品質を保つために役立ちます。

## Agents

Agentsは、役割ごとにClaude Codeの振る舞いを分ける考え方です。

たとえば、次のような役割を作れます。

- 調査担当
- 実装担当
- レビュー担当
- テスト担当
- ドキュメント担当
- セキュリティ確認担当

作業ごとにエージェントの役割を分けると、指示が明確になります。たとえば「まず調査担当で影響範囲を整理し、そのあと実装担当で修正する」という流れにできます。

## Plugins

Pluginsは、コマンド、エージェント、Skills、Hooks、MCPサーバーなどをまとめて配布するための仕組みです。

チームで共通の開発支援セットを作る場合、Pluginとしてまとめておくと再利用しやすくなります。

たとえば、社内向けPluginとして次をまとめられます。

- 標準レビューエージェント
- リリースノートSkill
- テスト実行Hook
- 社内ツール用MCP設定
- よく使うスラッシュコマンド

最初からPlugin化する必要はありません。まずは手作業の運用を固め、繰り返し使うものが見えてからまとめるのが現実的です。

## チームで導入するときの順番

Claude Codeの拡張機能は多いので、最初から全部使う必要はありません。

おすすめの順番は次のとおりです。

- まずCLIとVS Code連携に慣れる
- プロジェクトの基本ルールを設定ファイルやドキュメントに書く
- よく使う作業をSkill化する
- 安全な範囲でHooksを使う
- 必要な外部ツールだけMCPで接続する
- チーム運用が固まったらPlugin化を検討する

## 注意点

拡張機能を使うと、Claude Codeはより強力になります。そのぶん、権限と安全性の確認が重要です。

- MCPで接続する外部ツールの権限を最小限にする
- Hooksで危険なコマンドを自動実行しない
- SkillsやAgentsに社内ルールを明記する
- チーム共有する設定と個人設定を分ける
- 機密情報や認証情報をリポジトリに置かない

## この章のまとめ

Claude Codeは、CLIとVS Code連携だけでなく、設定、MCP、Hooks、Skills、Agents、Pluginsで拡張できます。

最初から全部使うより、基本操作に慣れたあと、チームの反復作業や安全確認から少しずつ仕組み化していくのがよいです。

参考:

- [Claude Code settings](https://docs.anthropic.com/en/docs/claude-code/settings)
- [Connect Claude Code to tools via MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [Plugins](https://docs.claude.com/en/docs/claude-code/plugins)

