# AI Project Template 構成ガイド

## このファイルの目的

このファイルは、`ai-project-template/` の中身を実プロジェクトへコピーするときの地図です。

このフォルダは、AI開発支援ツールをチームで安全に使うためのテンプレートです。読み物としての導入ガイドやFAQではなく、対象リポジトリに配置して使うファイルをまとめています。

## 全体構成

```text
ai-project-template/
  README.md
  STRUCTURE.md
  minimal/
    CLAUDE.md
    .claude/
      settings.json
  materials/
    checklists/
    policies/
    prompts/
    templates/
    workflows/
```

## コピー対象とコピー先

### 最小構成

まず導入する最小構成です。

コピー元:

```text
minimal/CLAUDE.md
minimal/.claude/settings.json
```

コピー先:

```text
my-app/
  CLAUDE.md
  .claude/
    settings.json
```

役割:

- `CLAUDE.md`: Claude Codeへの作業ルール
- `.claude/settings.json`: 権限設定
- 最初に守らせたい禁止事項
- 小さく安全に始めるための入口

### 追加構成

チームで運用をそろえる場合に、必要なものだけ追加します。

コピー元:

```text
materials/checklists/
materials/policies/
materials/prompts/
materials/templates/
materials/workflows/
```

コピー先:

```text
my-app/
  CLAUDE.md
  .claude/
    settings.json
    checklists/
    policies/
    prompts/
    templates/
    workflows/
```

追加した資料は、置いてあるだけでClaude Codeが毎回すべて自動で読むわけではありません。AIに守らせたい資料は、コピー後の `CLAUDE.md` から参照させます。

## minimal/

最初にコピーする最小構成です。

主なファイル:

- `CLAUDE.md`
- `.claude/settings.json`

`CLAUDE.md` は、Claude Codeが作業を始めるときの入口になるルールファイルです。プロジェクト固有のテストコマンド、禁止操作、レビュー方針、相談先などを追記して使います。

`.claude/settings.json` は、危険な操作を止めるための権限設定です。チームの運用に合わせて、許可する操作、確認を求める操作、禁止する操作を調整します。

## materials/policies/

人間とAIの両方が参照する利用ルールです。

主なファイル:

- `common.md`: 全エンジニア共通
- `frontend.md`: フロントエンド向け
- `backend.md`: バックエンド向け
- `windows-app.md`: Windowsアプリ向け
- `devops.md`: インフラ・DevOps向け
- `qa.md`: QA・テスト向け

`common.md` は基本的に残します。領域別ポリシーは、対象プロジェクトに関係するものを残し、不要なものは削るか参考資料として扱います。

## materials/workflows/

AIを使う作業の進め方です。

主なファイル:

- `ai-assisted-development.md`: AI支援開発の標準フロー
- `code-review.md`: AI利用時のコードレビュー
- `pull-request.md`: AI利用時のPR運用

実装、レビュー、PR作成など、AIに依頼するときの進め方を揃えるために使います。

## materials/checklists/

作業前後の確認リストです。

主なファイル:

- `before-ai-work.md`: AI作業前
- `before-commit.md`: コミット前
- `before-pr.md`: PR前

主に人間の確認用ですが、AIに「このチェックリストで確認して」と依頼することもできます。

## materials/prompts/

AIに依頼するときのプロンプトテンプレートです。

主なファイル:

- `investigate.md`: 調査
- `implement.md`: 実装
- `review.md`: レビュー
- `test-design.md`: テスト設計

そのまま正解として固定するものではなく、チームで依頼の型を育てるためのたたき台です。

## materials/templates/

AIや人間が記入して共有するテンプレートです。

主なファイル:

- `incident-report.md`: 事故・ヒヤリハット共有
- `project-adoption-profile.md`: 実プロジェクト導入時に埋めるプロジェクト固有設定
- `repository-security-guidance.md`: 対象リポジトリ固有のセキュリティ観点
- `personal-collaboration-guidance.md`: 個人の相談スタイルやレビュー姿勢

導入時には、まず `project-adoption-profile.md` を使って対象リポジトリの前提を整理すると、`CLAUDE.md` やポリシーを調整しやすくなります。

`repository-security-guidance.md` は、対象リポジトリに合わせて編集し、必要に応じて `.claude/policies/security.md` のような名前でコピーします。認証、認可、ログ、マルチテナント、XSS、SSRF、シークレット管理など、AIに毎回見てほしい観点を書きます。

`personal-collaboration-guidance.md` は、個人の使い方に合わせて編集する任意テンプレートです。チーム全員に強制するルールではなく、AIとの相談の仕方を整えるために使います。

## 導入時に決めること

実プロジェクトへコピーした後、最低限次を確認します。

- 実際のテストコマンド
- 実際のビルドコマンド
- ブランチ運用
- PRルール
- AIに入力してよい情報、いけない情報
- 削除、履歴操作、本番環境操作などの禁止事項
- 相談先
- チーム固有のレビュー観点
- リポジトリ固有のセキュリティ観点
- 個人設定として持つ指示と、チーム共有する指示の分け方

## 育て方

最初から完璧なルールにしようとせず、小さく始めます。

1. `minimal/` だけをコピーする
2. チームで試す
3. よく使う確認や依頼を `materials/` から追加する
4. 実際の事故や迷いをもとにルールを更新する

このテンプレートは固定された完成品ではありません。対象プロジェクトの技術、リスク、チームの慣れに合わせて削り、追記しながら使います。
