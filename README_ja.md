# 複数の言語での prisma schema の呼び出し 
複数のプログラミング言語でprisma schemaを使用するサンプルです。

# # コンセプト
### スキーマ管理用フォルダ
スキーマ自体の管理、migrateによる環境の反映、studioによる編集環境の起動などに使用するフォルダです。

### 実際の処理を記述するフォルダ
各フォルダで `prisma generate` を呼び出すことができます。  
この場合、使用するジェネレータは言語ごとに異なるため、環境変数 `$PRISMA_CLIENT` で指定します。

## フォルダーとファイル
### `/prisma`
以下の内容が含まれています。
* スキーマファイルそのものです。
* 操作用のクライアントをインストールするための `package.json` です。  
主にこのフォルダの中で、スキーマ自体の編集と `migrate` を行います。

設定は以下のコマンドで行います。

```
cd . /prisma
npm install
npx prisma migrate dev
```

### `/node`
以下の内容が含まれています。
* `package.json` 環境設定用のパッケージです。
* 簡単なnode.jsのサンプルです。

`npm install` で環境構築します。
スキーマを更新する場合は、`npm run update_schema` を実行します。

### `/python`
以下の内容が含まれています。
* 環境設定用の `Pipfile` です。
* 簡単な python の例です。

`pipenv install` で環境構築します。
スキーマを更新する際には `pipenv run update_schema` を実行します。

## +1
各フォルダの内容は、`schema.prisma`以外は独立しています!  
そのため、`git submodule`などを使って、DBスキーマの管理と実装の側面を分離することが可能です。  
その場合は、以下のような対応が必要になります。
* `git submodule` などを使用して、最新のスキーマファイルを参照できるようにする。
* `update_schema` コマンドで参照するスキーマファイルのリファラーを変更する。
