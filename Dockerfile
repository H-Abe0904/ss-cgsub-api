# ベースイメージとしてNode.jsを選択
FROM node:20

# 作業ディレクトリを設定
WORKDIR /app
# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# アプリケーションが使用するポートを公開
EXPOSE 3000

# コンテナ起動時に実行するコマンド
CMD [ "npm", "start" ]