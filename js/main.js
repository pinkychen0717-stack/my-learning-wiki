// 取得搜尋欄位、提示訊息及所有分類卡片
const searchInput = document.getElementById("searchInput");
const searchMessage = document.getElementById("searchMessage");
const categoryCards = document.querySelectorAll(".category-card");
// 監聽使用者輸入
searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;
    // 逐一檢查分類卡片
    categoryCards.forEach(function (card) {
        const content = card.textContent.toLowerCase();

        if (content.includes(keyword)) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });
    // 顯示搜尋結果
    if (keyword === "") {
        searchMessage.textContent = "";
    } else if (visibleCount === 0) {
        searchMessage.textContent = "找不到相關分類，請試試其他關鍵字。";
    } else {
        searchMessage.textContent = `找到 ${visibleCount} 個相關分類`;
    }
});