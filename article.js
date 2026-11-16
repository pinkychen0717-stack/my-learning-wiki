// 取得文章顯示區域
const articleContent = document.getElementById("articleContent");
// 取得網址中的文章路徑
const params = new URLSearchParams(window.location.search);
const file = params.get("file");
// 允許讀取的文章清單
const allowedArticles = [
    "wiki/programming/cpp.md",
    "wiki/programming/python.md",
    "wiki/ai/machine-learning.md",
    "wiki/courses/data-structure.md"
];
// 載入文章
async function loadArticle() {
    if (!file || !allowedArticles.includes(file)) {
        articleContent.innerHTML = "<h2>找不到這篇文章</h2>";
        return;
    }
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error("文章載入失敗");
        }
        const markdown = await response.text();
        // 將 Markdown 轉換成 HTML
        articleContent.innerHTML = marked.parse(markdown);
        // 使用第一個標題作為網頁標題
        const title = articleContent.querySelector("h1");
        if (title) {
            document.title = title.textContent + " | My Learning Wiki";
        }
    } catch (error) {
        articleContent.innerHTML =
            "<h2>文章載入失敗</h2><p>請確認檔案是否存在，或重新整理頁面。</p>";
        console.error(error);
    }
}
// 執行文章載入
loadArticle();