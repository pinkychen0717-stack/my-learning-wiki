# My Learning Wiki

**Personal Learning Knowledge Base｜個人學習知識庫**

## 一、專案簡介

My Learning Wiki 是一個個人學習知識庫網站，主要整理大學生在程式設計、人工智慧及大學課程中學習到的知識。

本專案以人工智慧（Artificial Intelligence）為主要主題，透過蒐集資料、整理知識及建立 Wiki 文章，將不同的 AI 概念分類保存。

此外，也利用 Wiki 中的知識內容製作 HTML 教學簡報，讓使用者能夠透過文章及簡報學習人工智慧的基本概念。

本專案使用 AGENTS.md 制定 AI 開發規則，讓 AI 能依照統一的架構及格式協助新增與維護內容。

## 二、網站分類

### 1. Programming（程式設計）
- C++ 程式設計入門
- Python 程式設計入門

### 2. Artificial Intelligence（人工智慧）
- 人工智慧入門
- 機器學習入門
- 深度學習入門
- 生成式人工智慧
- 大型語言模型

### 3. Course Notes（課程筆記）
- 資料結構入門

## 三、專案成果

### 1. My Learning Wiki
個人學習知識庫網站，提供文章分類、搜尋及閱讀功能。

- 網站連結：[My Learning Wiki](https://pinkychen0717-stack.github.io/my-learning-wiki/)

### 2. AI Introduction Slides
以人工智慧為主題製作的 HTML 教學簡報，共 8 頁，介紹 AI、機器學習、深度學習、生成式 AI 及大型語言模型。

- HTML 簡報：[點此觀看八頁簡報](https://pinkychen0717-stack.github.io/my-learning-wiki/slides/ai-introduction.html)

## 四、資料來源

本專案整理了以下五個 AI 相關資料來源：

1. Google Cloud — What is Artificial Intelligence?
   https://cloud.google.com/learn/what-is-artificial-intelligence

2. Google Developers — Introduction to Machine Learning
   https://developers.google.com/machine-learning/intro-to-ml

3. Google Cloud — Deep Learning vs Machine Learning
   https://cloud.google.com/discover/deep-learning-vs-machine-learning

4. IBM — What is Generative AI?
   https://www.ibm.com/think/topics/generative-ai

5. OpenAI — How ChatGPT and Our Foundation Models Are Developed
   https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-foundation-models-are-developed

以上資料經過整理後，作為 AI Wiki 文章的參考來源。

## 五、網站功能

- 個人學習知識庫首頁
- 三大知識分類
- 知識文章搜尋功能
- Markdown 文章閱讀
- 共用文章閱讀版型
- Wiki 文章與教學簡報互相連結
- 支援電腦及手機瀏覽

## 六、使用技術

| 技術 | 用途 |
|---|---|
| HTML | 建立網頁結構及教學簡報 |
| CSS | 設計網站外觀 |
| JavaScript | 實作搜尋、文章載入及簡報切換 |
| Markdown | 整理知識文章 |
| Marked.js | 將 Markdown 轉換成 HTML |
| GitHub Pages | 公開網站 |

## 七、專案架構

```text
My Learning Wiki/
├── AGENTS.md
├── README.md
├── workflow.md
├── index.html
├── article.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── article.js
├── raw/
│   ├── source-01.md
│   ├── source-02.md
│   ├── source-03.md
│   ├── source-04.md
│   └── source-05.md
├── wiki/
│   ├── index.md
│   ├── programming/
│   ├── ai/
│   │   ├── introduction-to-ai.md
│   │   ├── machine-learning.md
│   │   ├── deep-learning.md
│   │   ├── generative-ai.md
│   │   └── large-language-models.md
│   └── courses/
├── slides/
│   └── ai-introduction.html
└── logs/
    └── workflow-log.md
```

## 八、Workflow 設計

本專案的工作流程分為六個階段：

1. Data Collection：蒐集五個 AI 相關資料來源。
2. Data Ingestion：整理資料並儲存至 raw 資料夾。
3. Wiki Creation：將資料整理成五篇 AI Wiki 文章。
4. Review：檢查文章內容、檔案路徑及文章讀取功能。
5. Slide Generation：根據 Wiki 知識內容製作 HTML 教學簡報。
6. Final Testing：測試簡報切換及延伸閱讀功能。

### Loop 設計

本專案設計兩個主要的檢查循環：

- Wiki 檢查循環：如果文章內容或檔案路徑有問題，就回到 Wiki 建立階段修改，再重新檢查。
- 簡報檢查循環：如果簡報頁面或延伸閱讀連結無法正常運作，就回到簡報製作階段修正，再重新測試。

透過反覆檢查與修正，降低錯誤累積的情況。

詳細流程請參考 `workflow.md`。

## 九、執行紀錄與反思

本專案將實際執行過程記錄在：

`logs/workflow-log.md`

製作過程中，曾遇到簡報直接連結 Markdown 檔案時，瀏覽器顯示原始文字的問題。

後來將延伸閱讀連結改為透過 `article.html` 載入，並使用 `article.js` 將 Markdown 轉換成 HTML，成功解決文章顯示問題。

透過這次實作，我了解到知識庫不只是整理文章，也需要注意資料來源、文章分類、檔案路徑及前後端功能的整合。

## 十、AI 開發規則

本專案使用 AGENTS.md 作為 AI 開發規範。

AI 在新增或修改內容之前，應先閱讀 AGENTS.md，並遵守其中的檔案管理、文章格式、網站設計及程式碼修改規則。

透過統一規範，讓未來新增知識文章時，可以沿用原有的網站架構及閱讀版型。

## 十一、未來擴充方向

- 新增更多程式設計文章。
- 擴充人工智慧相關知識。
- 增加不同課程的學習筆記。
- 持續改善搜尋及文章瀏覽功能。
- 增加更多互動式教學內容。

---


**My Learning Wiki — Learn, Explore, And Grow.**
