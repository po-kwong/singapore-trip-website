# 新加坡英語學習團 | Singapore English Study Tour

香海正覺蓮社佛教普光學校的雙語學習團網站，介紹 2026 年 10 月 26–30 日的校際交流、文化探索及生活英語活動。

A bilingual site for HHCKLA Buddhist Po Kwong School's 26–30 October 2026 English study tour, featuring school exchange, cultural visits and everyday English.

- [瀏覽網站 | View the site](https://po-kwong.github.io/singapore-trip-website/)
- [旅程相簿 | Trip album](https://drive.google.com/drive/folders/1ojsLkS6dXNV5zDAw7mvNs0oIZnGh9p9F?usp=sharing)
- [旅程影片 | Trip film](https://www.youtube.com/watch?v=Jx1DkG-ZAoI)

## 更新網站 | Build the site

在 `apps-script/` 編輯網站來源。使用 Node.js 執行以下命令，重新產生 `docs/index.html`，然後提交源檔及輸出。GitHub Pages 從 `main` 的 `/docs` 發布。

Edit the site in `apps-script/`, run the following command with Node.js, and commit both the source and the resulting `docs/index.html`. GitHub Pages publishes from `main` at `/docs`.

```sh
node scripts/build-pages.mjs
```

Pages 直接載入指定 Google Drive 相片和 YouTube 影片。五天例句讀音隨網頁提供。

Pages loads photos and video from the linked Google Drive album and YouTube. The five itinerary pronunciations are included in the page.
