# Laravel × Next.js の CMS

## 技術スタック

- Laravel8
- Next.js12

## 開発時コマンド

```
// apiコンテナ起動
docker-compose up -d
// frontコンテナ起動
docker-compose exec front yarn dev

// apiコンテナへアクセス
docker-compose exec api /bin/sh
// frontコンテナへアクセス
docker-compose exec front /bin/sh

// コンテナ停止
docker-compose stop
```
