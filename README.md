## パッケージの利用
1. プロジェクトのルートに`.npmrc`ファイルを作成し、以下を記入する。
```
//npm.pkg.github.com/:_authToken={TOKEN}
@{NAMESPACE}:registry=https://npm.pkg.github.com
```
- `{TOKEN}`には発行したPATを入力する
  - 発行するトークンについては以下を参照
  - https://docs.github.com/ja/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
- `{NAMESPACE}`にはインストールするパッケージのネームスペースを入力する
  - このパッケージの場合は`@TaikiHoshika:registry=https://npm.pkg.github.com`となる

2. `package.json`の依存関係にパッケージを追記する
```json
  "dependencies": {
    "@TaikiHoshika/example-package": "1.0.0"
  }
```

3. パッケージをインストール
```bash
npm install
```

## テストメッセージ 2