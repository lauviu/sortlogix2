# SortLogix — 使用者儀表板

> AIoT 智能垃圾分類系統的使用者 Web App，無需後端、無需安裝，直接開啟即可使用。

![SortLogix](https://img.shields.io/badge/SortLogix-AIoT-3B6D11?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-純前端-E34F26?style=flat-square&logo=html5)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 頁面總覽

| 頁面 | 檔案 | 說明 |
|------|------|------|
| 總覽儀表板 | `index.html` | 積分、減碳量、連續天數、近期記錄 |
| 回收歷史 | `history.html` | 完整紀錄、篩選、詳細彈窗 |
| 機台地圖 | `map.html` | 校園 SVG 地圖、機台狀態 |
| 獎勵兌換 | `rewards.html` | 積分兌換商品、即時扣點 |

## 快速開始

### 方法一：直接開啟（推薦）
```bash
# Clone 專案
git clone https://github.com/YOUR_USERNAME/sortlogix-dashboard.git
cd sortlogix-dashboard

# 直接在瀏覽器開啟
open index.html
```

### 方法二：本地伺服器
```bash
# Python 3
python -m http.server 8080

# 然後開啟 http://localhost:8080
```

### 方法三：GitHub Pages
1. Fork 這個 repository
2. 前往 Settings → Pages
3. Source 選擇 `main` branch，目錄選 `/ (root)`
4. 儲存後等待幾分鐘即可上線

## 專案結構

```
sortlogix/
├── index.html        # 總覽儀表板
├── history.html      # 回收歷史紀錄
├── map.html          # 機台地圖
├── rewards.html      # 獎勵兌換
├── css/
│   └── style.css     # 共用樣式（CSS Variables）
├── js/
│   └── shared.js     # 共用資料、元件（Sidebar、Toast）
└── README.md
```

## 功能特色

- **零依賴** — 純 HTML / CSS / JavaScript，無 framework、無 npm
- **完整互動** — 所有按鈕、篩選、彈窗均可點擊
- **跨頁導航** — 側邊欄與快捷按鈕可在四頁間切換
- **模擬兌換** — 獎勵兌換後積分即時更新
- **機台地圖** — 點擊地圖 pin 或清單查看機台詳情
- **響應式** — 支援桌機與手機瀏覽

## 技術規格

- Google Fonts：DM Sans + DM Mono
- CSS Variables 色彩系統（森林綠、沙灘米、木炭灰）
- 無 localStorage 依賴，資料存於 `js/shared.js`

## 自訂資料

編輯 `js/shared.js` 中的 `DATA` 物件即可更換使用者資料、回收紀錄、機台清單與獎勵內容。

## License

MIT © SortLogix Team
