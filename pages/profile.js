import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'

const markdown = `
# 職務履歴書
## 個人データ

- 氏名: 佐藤 公基（Koki Sato）
- 性別: 男
- 国籍: 日本
- 年齢: 27 歳(1991 年生まれ)
- 最終学歴: 大学卒業
- 各種 URL
  - twitter: https://twitter.com/hi_im_Corki
  - github: https://github.com/Bernkastel07th
  - codepen: https://codepen.io/Bernkastel07th/
  - 当ポートフォリオサイトのソースコード: https://github.com/Bernkastel07th/portfolio

## 職務経歴（概要）
フロントエンドエンジニア(FE)
- 某保険会社のポータルサイト構築（e-larningシステム）
  - 制作: 6ヶ月
  - ポジション: FEチーム（４人）に所属し、画面構築業務担当
  - 開発体制: ウォーターフォール
  - 開発管理: Git(独自サーバー)
- 某小学生向けWebアプリ（iPadむけ）の開発
  - 制作: 6ヶ月
  - ポジション: FEチーム（８人）に所属し、機能モジュールの開発を担当
  - 開発体制: ウォーターフォール
  - 開発管理: Git(BitBucket)
- 某漫画雑誌の配信Webアプリの開発
  - 制作: 2ヶ月
  - ポジション: FEチーム（２人）に所属し、各画面の実装を担当。新人と二人で協力し、実装を教えながらの作業。
  - 開発体制: アジャイル
  - 開発管理: Git(GitLab)
- 某ソーシャルゲーム向けSNSプラットフォーム（Webアプリ）開発
  - 制作: 6ヶ月
  - ポジション: WEBチーム（４人）に所属し、各画面のSEO対策を担当
  - 開発体制: アジャイル
  - 開発管理: Git(GitHub)
- 某POSレジのプラットフォーム開発 
  - 制作: 2年3ヶ月
  - ポジション: FEチーム（４人）に所属し、各画面のリニューアルを担当
  - 開発体制: アジャイル
  - 開発管理: Git(GitHub)
## プログラミングスキル
  - HTML
    - HTML4.1、HTML5を使って実装経験あり
    - FileAPIなどのHTMLAPIを使ってWebアプリの実装経験あり
    - PugでHTMLテンプレート実装の経験あり
    - Canvasを使ったアニメーション実装の経験あり
  - CSS3
    - BEMやFlocssのようなCSS設計を元に実装経験あり
    - HTMLCanvasを使ったアニメーション実装の経験あり
    - Sass,Less,Stylusを使った実装の経験あり
    - BurbonやBootstarpを使った実装の経験あり
    - CSSモジュール開発の経験あり
  - JavaScript
    - es5,es6の開発経験あり
    - HTMLCanvasを使ったアニメーション実装の経験あり
    - **React + Redux環境**での開発経験あり（２年）
    - Next.js + next-mdxを使ってUIデザインのガイドライン作成の経験あり
    - Backborn.js + jQueryでの開発経験あり（6ヶ月）
    - Vue.jsでの開発経験あり（3ヶ月）
    - Angular.js(1系)での開発経験あり（6ヶ月）
    - CoffeeScriptのようなシンタックスシュガーを用いた開発経験あり
  - その他
    - **JestとReact-testing-libraryを用いたTDD経験あり**
    - JenkinsやDroneのようなCIのConfigurationを書いた経験あり
    - Node.jsとexpressでServer構築経験あり
    - FireBase + Netlifyを使ったWebアプリの開発経験あり
## 職務経歴（前職）
### 株式会社リクルートライフスタイル（2016年11月 ~ 2019年2月）
- POSレジのWebアプリ
- ポジション: フロントエンドエンジニア（FE）
- 開発体制: アジャイル + TDD
- チーム規模: FEチーム（４人）
- 開発管理: 
  - フロント側: Github + Drone
  - バックエンド側: Github + Jenkins
#### プロダクト開発
- 旧画面のリニューアル実装を担当
  - Backborn.js + jQueryを使った旧画面を**React.js + Redux**を使ってデザインごとリニューアルした
  - デザイナーとコミュニケーションをとり、デザイン要件を元に実装を担当する画面のSketchとProttを使ってプロトタイピングデザイン
  - 開発はTDDで行い、チームなかでモブプログラミングで画面の基本機能部分を実装
  - 各画面にサイカタ実装
- プロダクト共通UIのライブラリ開発(React.js)
  - 複数プロダクトで使う共通UIのライブラリの開発やバグ修正などのメンテナンスを対応
  - 共通UIのデザインガイドラインの作成（Next.js）
## 職務経歴（前職以前）
### 某面白法人（2016年4月 ~ 2016年10月）
- 某ソーシャルゲーム向けSNSプラットフォーム（Webアプリ）開発
- Angular.js(1系)
- ポジション: フロントエンドエンジニア（FE）
- 開発体制: アジャイル
- チーム規模: FEチーム（4人）
- 開発管理: Git(GitHub)
#### SEO対策
- 各画面にバナーの設置
- Googleアナリティクスのタグ実装
#### 運用・保守
- デザイン更新
- チャット機能の実装
### 株式会社E（2016年2月 ~ 2016年3月）
- 某漫画雑誌の配信Webアプリ
- Vue.js
- ポジション: フロントエンドエンジニア（FE）
- 開発体制: アジャイル
- チーム規模: FEチーム（2人）
- 開発管理: Git(GitLab)
#### 運用・保守
- デザイン更新業務
- 新機能の実装
### 株式会社4D（2015年7月 ~ 2016年1月）
- 某小学生向けWebアプリ（iPadむけ）の開発
- ポジション: フロントエンドエンジニア（FE）
- 開発体制: ウォーターフォール
- チーム規模: FEチーム（8人）
- 開発管理: Git(BitBucket)
#### プロダクト開発
- 各画面内で使う機能モジュールの開発(JavaScript es6)
  - 作った機能: お絵描きメモ、漢字のなぞり書き、動画フレーム、国語用の縦文字描画、音声読み上げ 
### 某外資系企業(2015年1月 ~ 2015年6月)
- 保険会社向けポータルサイト構築（e-larning）
- ポジション: フロントエンドエンジニア（FE）
- 開発体制: ウォーターフォール
- チーム規模: FEチーム（４人）
- 開発管理: Git(独自サーバー)
#### プロダクト開発
- Backborn.js + jQueryを用いた画面構築
- 画面定義書の作成
`

const Profile = props => (
  <Layout>
    <Markdown source={markdown} />
  </Layout>
)

export default Profile
