# 翰林雲端學院【網頁設計人員】應聘作業

> githubPage：https://ivy2846357.github.io/project-ehanlin/

## 設計理念

由於是國小至高中的線上課程平台，所以配色方面會選用比較鮮豔的配色，整體網頁以翰林 LOGO 的藍色為主色調，並搭配橘黃色作為強調色。

另外，為了讓畫面豐富一些，還搭配了偏卡通類型的線上課程圖片，以此彰顯線上課程的特點。

LOGO 主題是新年，配色以藍色及紅色為主，並搭配虎年及新年元素（卷軸、金幣、金元寶）做妝點，因為客群為國小至高中，所以圖片也是選擇比較偏卡通的樣式。

## 網頁優化部分

看過貴公司的網頁後，我會做以下的調整：

- 導覽列
  - 增加網頁版的 padding 讓編排不會太過壅擠，而手機版 padding 則變窄
  - 變更排版位置，將 LOGO 放在左測、功能放在右側，並將功能分隔為網頁內容及購物車、登入按鈕
  - 新增【e教程（名字自訂）】的子選單，內容為e名師、e家教及e評量的課程，並使用名師授課的方式強調課程優點
  - 新增滑鼠 hover 及 click 效果
  - 將登入及註冊放為同一區塊，並使用底色來凸顯按鈕
  - 新增漢堡選單動畫

- 內容
  - 將登入及註冊放在同一頁面，並在上方新增列表讓使用者可以選擇要登入還是註冊
  - 變更排版位置，將表單放在正中間，旁邊以圖片為輔
  - 將會員註冊及社群註冊放在同一區塊

- 頁尾
  - 變更排版位置，改分為公司介紹及功能列兩種
  - 功能面再依照內容區分為三大項：關於我們、服務總覽、聯絡我們
  - copyright 改放置最尾端


## 資料夾結構

- app
  -assets
    -image
    -js
      -all.js
    -style
      -base
        -_base.scss
      -components
        -_background-img.scss
        -_btn.scss
        -_cart.scss
        -_dropdown-arrow.scss
        -_dropdown-menu.scss
        -_effect.scss
        -_hamburger.scss
        -_login-btn.scss
        -_nav.scss
      -helpers
        -_variables.scss
      -layout
        -_footer.scss
        -_sign.scss
      -all.scss
  -index.html
  -layout.ejs

## 資料來源

圖片及 LOGO 皆有使用 freepik 圖庫再稍加修改

