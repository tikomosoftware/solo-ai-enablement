# AI開発支援ツール使い分けガイド

## 目的

このドキュメントは、GitHub Copilot、GitHub Copilot CLI、Claude Codeをどう使い分けるかを整理します。

## 使い分けの基本

| やりたいこと | 向いているツール |
| --- | --- |
| コードを書いている途中の補完 | GitHub Copilot |
| 小さな関数やテストの補完 | GitHub Copilot |
| エディタ内でコードの説明を聞く | GitHub Copilot Chat |
| 選択範囲の小さな修正 | GitHub Copilot Edit |
| 複数ファイルにまたがる実装 | Claude Code |
| リポジトリ全体の調査 | Claude Code |
| テストやビルドを実行しながら作業 | Claude Code |
| ターミナルのエラー相談 | Claude Code または Copilot CLI |
| Git操作やCLIコマンドの相談 | Copilot CLI または Claude Code |
| PR前の差分レビュー | Claude Code |
| テスト観点の洗い出し | Claude Code |

## GitHub Copilotが向いている場面

GitHub Copilotは、エディタ内での短い補完や小さな修正に向いています。

例:

- 関数の続きを補完する。
- テストコードのたたき台を作る。
- 選択したコードを説明してもらう。
- 小さなリファクタリング案を出す。
- コメントからコードを生成する。

## GitHub Copilot CLIが向いている場面

Copilot CLIは、ターミナル作業やコマンド相談に向いています。

例:

- コマンドの意味を説明してもらう。
- エラー原因を相談する。
- Git操作の手順を確認する。
- シェルコマンドの候補を出す。

ただし、削除、reset、force pushなどの危険操作は実行前に必ず人間が確認します。

## Claude Codeが向いている場面

Claude Codeは、リポジトリを読みながら作業を進めるエージェント型の使い方に向いています。

例:

- コードベース全体を調査する。
- 複数ファイルにまたがる修正をする。
- テストやビルドを実行して確認する。
- PR前に差分をレビューする。
- 既存設計に合わせて実装する。

Claude Codeは強力なぶん、起動場所、権限設定、作業範囲を明確にします。

## 最初のおすすめ

初めて使うメンバーには、次の順番をおすすめします。

1. GitHub Copilotでコード補完を試す。
2. Claude Codeを `plan` modeで起動し、リポジトリ調査だけを試す。
3. Claude Codeで小さな修正を試す。
4. PR前レビューやテスト観点洗い出しに使う。

## 判断に迷ったとき

次の基準で選びます。

- 1ファイル内の小さな作業ならCopilot。
- 複数ファイルをまたぐならClaude Code。
- ターミナル作業の相談ならCopilot CLIまたはClaude Code。
- 影響範囲が大きいなら、まずClaude Codeに調査だけさせる。

