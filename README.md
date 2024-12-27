🚨ChatGPTAPIのCreditが0$で不足しており現在機能しておりません
<div align="center">
  <img src="./img/logo.png" width="70%">
  <div>新しい学びに最適な手順を</div>
</div>

# RoadMapper
<div align="center">
  <img src="./img/top.png" width="90%">
  <img src="./img/content.png" width="90%">
</div>

## フロントエンド仕様
### 機能
- レスポンシブ対応
- 入力欄全てを埋めたときのみ送信(HTTPリクエスト)
- フロー生成時間の待機アニメーション

<div align="center">
  <img src="./img/loading.gif" width="90%">
</div>

- フロー生成待機中は送信不可

## 使用技術
- TypeScript
- Next.js(React)
- Sass


(関連)
- dotenv
- vercel

## 課題
- APIを叩く待機時間が長い  

※初期生成時はバックエンドの初期起動も入るため1分半程待つ必要があります。二回目以降は約30秒程で生成されます。  
→バックエンドの初期起動はバックエンドのデプロイ先のRenderの仕様なのでアップグレードして解決するしかない
