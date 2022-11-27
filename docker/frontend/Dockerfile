## nodeは安定版を選択 https://nodejs.org/ja/download/
FROM node:18.12.1-alpine  

ENV APP_HOME /var/www/frontend 

## dockerイメージ内にアプリケーションディレクトリを作成する
WORKDIR $APP_HOME

## ローカルのfrontend以下をコピーする
COPY ./frontend $APP_HOME
