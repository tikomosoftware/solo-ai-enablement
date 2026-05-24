# AI開発利用ポリシー インフラ・DevOps向け

## AIに任せてよい例

- GitHub Actionsの修正案
- Dockerfileの改善案
- TerraformやCloudFormationのレビュー
- CIエラーの調査
- ログの読み解き
- 手順書の下書き

## 注意すること

- 本番環境への変更はAIに実行させない。
- シークレットをAIに入力しない。
- IAM、権限、ネットワーク設定を人間が確認する。
- Terraform applyなどの変更適用は人間が実行する。
- 削除系のIaC変更は特にレビューする。
- CI/CDの認証情報をログに出さない。

## 禁止または事前確認が必要な操作

- `terraform apply`
- `terraform destroy`
- `kubectl delete`
- `helm uninstall`
- 本番環境へのdeploy
- クラウドリソース削除
- IAMポリシー変更

