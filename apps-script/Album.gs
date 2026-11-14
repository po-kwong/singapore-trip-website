// Configuration for the Google Drive folder selected for this Web App.
const ALBUM_URL = "https://drive.google.com/drive/folders/1ojsLkS6dXNV5zDAw7mvNs0oIZnGh9p9F?usp=sharing";
const ALBUM_PHOTOS = [
  {
    "id": "1jeAuAhBzMHLMhG5eOMGWYLG3AVo34Pkw",
    "name": "2026-10-26_新加坡英語學習交流團 (4).jpeg",
    "alt": "蘇丹回教堂前，留下文化探索的足跡 / The study tour group at Sultan Mosque",
    "caption": "蘇丹回教堂前，留下文化探索的足跡",
    "width": 958,
    "height": 718,
    "captionEn": "The study tour group at Sultan Mosque"
  },
  {
    "id": "1jB3OsKHfRKcwUl14LjxcKcMB2SRTMDIU",
    "name": "2026-10-26_新加坡英語學習交流團 (1).jpeg",
    "alt": "機場候機，準備展開英語學習之旅 / At the airport, ready to start the English study tour",
    "caption": "機場候機，準備展開英語學習之旅",
    "width": 958,
    "height": 718,
    "captionEn": "At the airport, ready to start the English study tour"
  },
  {
    "id": "1nPUyRXiM4iNmTSFRQaOTszdkM9076pk3",
    "name": "2026-10-26_新加坡英語學習交流團 (2).jpeg",
    "alt": "星耀樟宜雨漩渦前的旅程合照 / Group photo at the Rain Vortex, Jewel Changi Airport",
    "caption": "星耀樟宜雨漩渦前的旅程合照",
    "width": 682,
    "height": 910,
    "captionEn": "Group photo at the Rain Vortex, Jewel Changi Airport"
  },
  {
    "id": "13GspPTZwXnMdPvCr-PvEZLnLOU59Ma9T",
    "name": "2026-10-26_新加坡英語學習交流團 (3).jpeg",
    "alt": "旅途中的師生合照 / A group photo with students and teachers along the way",
    "caption": "旅途中的師生合照",
    "width": 958,
    "height": 718,
    "captionEn": "A group photo with students and teachers along the way"
  },
  {
    "id": "1CYjnkDolluyAvpJGKEiaEFM3hLsmxClD",
    "name": "2026-10-26_新加坡英語學習交流團 (5).jpeg",
    "alt": "街頭壁畫前的文化探索 / Exploring local culture through street art",
    "caption": "街頭壁畫前的文化探索",
    "width": 958,
    "height": 718,
    "captionEn": "Exploring local culture through street art"
  },
  {
    "id": "1eUuZrtpXdmKzL6mFQiW-gzTsOhkyr3Ja",
    "name": "2026-10-26_新加坡英語學習交流團 (6).jpeg",
    "alt": "課室中的交流與活動體驗 / Taking part in a classroom exchange activity",
    "caption": "課室中的交流與活動體驗",
    "width": 958,
    "height": 718,
    "captionEn": "Taking part in a classroom exchange activity"
  },
  {
    "id": "1en7XRXSR44JhD_8KN9Mr02u8E21t9wqC",
    "name": "2026-10-26_新加坡英語學習交流團 (7).jpeg",
    "alt": "與當地師生一起留下交流回憶 / A photo with local students and teachers",
    "caption": "與當地師生一起留下交流回憶",
    "width": 958,
    "height": 718,
    "captionEn": "A photo with local students and teachers"
  },
  {
    "id": "1npEza8zvq__dBEJSMHcyYneSZsxNcabZ",
    "name": "2026-10-26_新加坡英語學習交流團 (8).jpeg",
    "alt": "校園壁畫前的師生合照 / Students and teachers in front of a school mural",
    "caption": "校園壁畫前的師生合照",
    "width": 958,
    "height": 718,
    "captionEn": "Students and teachers in front of a school mural"
  },
  {
    "id": "1I5Shi2tvUHxjebEHM5J2pg-TeQlIyaKA",
    "name": "2026-10-26_新加坡英語學習交流團 (9).jpeg",
    "alt": "小印度屠妖節裝飾前，感受節慶氣氛 / Deepavali decorations in Little India",
    "caption": "小印度屠妖節裝飾前，感受節慶氣氛",
    "width": 958,
    "height": 718,
    "captionEn": "Deepavali decorations in Little India"
  },
  {
    "id": "1Rwq3Jer5GEcEt_I0o5xnPVNWF5Dhcy46",
    "name": "2026-10-26_新加坡英語學習交流團 (10).jpeg",
    "alt": "一起走進多元文化街區 / Exploring a neighbourhood together",
    "caption": "一起走進多元文化街區",
    "width": 958,
    "height": 718,
    "captionEn": "Exploring a neighbourhood together"
  },
  {
    "id": "1twxUcnB3kiwd8Ri0ntaQYEx7Fb1ix7Rn",
    "name": "2026-10-26_新加坡英語學習交流團 (11).jpeg",
    "alt": "體驗互動光影裝置 / Trying an interactive light and shadow installation",
    "caption": "體驗互動光影裝置",
    "width": 958,
    "height": 718,
    "captionEn": "Trying an interactive light and shadow installation"
  },
  {
    "id": "1bKzs8OCy1i_iLHokRWjzn4xRIzH7rDcQ",
    "name": "2026-10-26_新加坡英語學習交流團 (12).jpeg",
    "alt": "校園交流中的師生大合照 / A group photo during the school exchange",
    "caption": "校園交流中的師生大合照",
    "width": 958,
    "height": 718,
    "captionEn": "A group photo during the school exchange"
  },
  {
    "id": "13jABIKnx8HpgKC9R-8CHvzSqOPShuvGR",
    "name": "2026-10-26_新加坡英語學習交流團 (13).jpeg",
    "alt": "園區參觀時的師生合照 / Students and teachers on a site visit",
    "caption": "園區參觀時的師生合照",
    "width": 958,
    "height": 718,
    "captionEn": "Students and teachers on a site visit"
  },
  {
    "id": "1CjVp_rSYweyFSGOEHpda62cxk8b0E_jb",
    "name": "2026-10-26_新加坡英語學習交流團 (14).jpeg",
    "alt": "圍坐交流，一起參與小組活動 / Sitting together for a small group activity",
    "caption": "圍坐交流，一起參與小組活動",
    "width": 958,
    "height": 718,
    "captionEn": "Sitting together for a small group activity"
  },
  {
    "id": "1h9L9P5o9kXKkpgGCwkofbWNn6p_Pr_21",
    "name": "2026-10-26_新加坡英語學習交流團 (14) (1).jpeg",
    "alt": "小組活動中的交流時刻 / Sharing ideas during a group activity",
    "caption": "小組活動中的交流時刻",
    "width": 958,
    "height": 718,
    "captionEn": "Sharing ideas during a group activity"
  },
  {
    "id": "1Izj0g4bX7OMv-WAOiFBFsCEP9fYxN3U0",
    "name": "2026-10-26_新加坡英語學習交流團 (15).jpeg",
    "alt": "在熟食中心品嘗當地美食 / Trying local food at a hawker centre",
    "caption": "在熟食中心品嘗當地美食",
    "width": 958,
    "height": 718,
    "captionEn": "Trying local food at a hawker centre"
  },
  {
    "id": "1Pr_QZ2ZywkaiFDFsQWf0WVu4RJIl8a_6",
    "name": "2026-10-26_新加坡英語學習交流團 (16).jpeg",
    "alt": "一起分享用餐時光 / Sharing a meal together",
    "caption": "一起分享用餐時光",
    "width": 958,
    "height": 718,
    "captionEn": "Sharing a meal together"
  },
  {
    "id": "1-ntug8DZ7SZVUqNXZZ3E97iAdNr3Vkbq",
    "name": "2026-10-26_新加坡英語學習交流團 (17).jpeg",
    "alt": "戶外合照，遠眺濱海灣景色 / A group photo overlooking Marina Bay",
    "caption": "戶外合照，遠眺濱海灣景色",
    "width": 958,
    "height": 718,
    "captionEn": "A group photo overlooking Marina Bay"
  },
  {
    "id": "1zjGSTDlRFj9o9pFZtAzynBTaGAVXIt9Y",
    "name": "2026-10-26_新加坡英語學習交流團 (18).jpeg",
    "alt": "溫室園藝展覽中的合照 / A group photo inside a conservatory exhibit",
    "caption": "溫室園藝展覽中的合照",
    "width": 958,
    "height": 718,
    "captionEn": "A group photo inside a conservatory exhibit"
  },
  {
    "id": "15FBWRg828JXoIBXo3M12q6Y1348XOqFx",
    "name": "2026-10-26_新加坡英語學習交流團 (19).jpeg",
    "alt": "走進溫室，一起探索植物世界 / Exploring plants inside the conservatory",
    "caption": "走進溫室，一起探索植物世界",
    "width": 958,
    "height": 718,
    "captionEn": "Exploring plants inside the conservatory"
  },
  {
    "id": "1hmkrOdaOLXlpJEPXae5gguzU2fQ0_XG2",
    "name": "2026-10-26_新加坡英語學習交流團 (20).jpeg",
    "alt": "濱海灣花園入口的師生大合照 / Group photo at the entrance to Gardens by the Bay",
    "caption": "濱海灣花園入口的師生大合照",
    "width": 958,
    "height": 718,
    "captionEn": "Group photo at the entrance to Gardens by the Bay"
  },
  {
    "id": "1A4FgaCWCSgp59Dq-fvLQMsRh-pQ7C8zA",
    "name": "2026-10-26_新加坡英語學習交流團 (21).jpeg",
    "alt": "建築庭院中的小組留影 / A group photo in a courtyard",
    "caption": "建築庭院中的小組留影",
    "width": 958,
    "height": 718,
    "captionEn": "A group photo in a courtyard"
  },
  {
    "id": "1Ehvwjj-3pW7Q2QwPrZclV43CS9DV0LQk",
    "name": "2026-10-26_新加坡英語學習交流團 (22).jpeg",
    "alt": "光影展覽中的參觀留影 / A moment at a light exhibition",
    "caption": "光影展覽中的參觀留影",
    "width": 958,
    "height": 718,
    "captionEn": "A moment at a light exhibition"
  },
  {
    "id": "1hjLOg-plgjFzQk64dohV6oACFrR6kGI-",
    "name": "2026-10-26_新加坡英語學習交流團 (23).jpeg",
    "alt": "展覽參觀時的旅程記錄 / A moment from an exhibition visit",
    "caption": "展覽參觀時的旅程記錄",
    "width": 958,
    "height": 718,
    "captionEn": "A moment from an exhibition visit"
  },
  {
    "id": "16t4s9Sr84hryHIkEIwHc_vMkT5IwhDI2",
    "name": "2026-10-26_新加坡英語學習交流團 (24).jpeg",
    "alt": "歷史建築內的師生合照 / Students and teachers inside a historic building",
    "caption": "歷史建築內的師生合照",
    "width": 958,
    "height": 718,
    "captionEn": "Students and teachers inside a historic building"
  },
  {
    "id": "1I7LiadjK6lU-BLVdfrfAIYnbbSfoPcPK",
    "name": "2026-10-26_新加坡英語學習交流團 (25).jpeg",
    "alt": "展館參觀中的學習足跡 / Exploring the displays together",
    "caption": "展館參觀中的學習足跡",
    "width": 958,
    "height": 718,
    "captionEn": "Exploring the displays together"
  },
  {
    "id": "113euXbtyySdMaXalcajdpdzveqhOFYoD",
    "name": "2026-10-26_新加坡英語學習交流團 (26).jpeg",
    "alt": "在展館中欣賞藝術裝置 / Looking at an art installation inside the exhibition hall",
    "caption": "在展館中欣賞藝術裝置",
    "width": 958,
    "height": 718,
    "captionEn": "Looking at an art installation inside the exhibition hall"
  },
  {
    "id": "1dChT243ZuRSWqc8PTy0Cgl1Huu--MisG",
    "name": "2026-10-26_新加坡英語學習交流團 (27).jpeg",
    "alt": "魚尾獅前，記下新加坡的風景 / A moment beside the Merlion",
    "caption": "魚尾獅前，記下新加坡的風景",
    "width": 958,
    "height": 718,
    "captionEn": "A moment beside the Merlion"
  },
  {
    "id": "1xASA_P7GQaaWav11AlHG7nseAlNGtYRd",
    "name": "2026-10-26_新加坡英語學習交流團 (28).jpeg",
    "alt": "在魚尾獅前留下有趣回憶 / Having fun with the Merlion in the background",
    "caption": "在魚尾獅前留下有趣回憶",
    "width": 958,
    "height": 718,
    "captionEn": "Having fun with the Merlion in the background"
  },
  {
    "id": "1nmbCVS6vEna9-3XFrvQKIsw53JRXmaLf",
    "name": "2026-10-26_新加坡英語學習交流團 (29).jpeg",
    "alt": "機場裡的師生大合照 / Students and teachers at the airport",
    "caption": "機場裡的師生大合照",
    "width": 958,
    "height": 718,
    "captionEn": "Students and teachers at the airport"
  },
  {
    "id": "1jPnqZfP_2GzTSN5zjkq1S9TtYlBcikat",
    "name": "2026-10-26_新加坡英語學習交流團 (30).jpeg",
    "alt": "候機時與同學一起留影 / A photo with classmates while waiting to board",
    "caption": "候機時與同學一起留影",
    "width": 958,
    "height": 718,
    "captionEn": "A photo with classmates while waiting to board"
  },
  {
    "id": "1XRDY0Ww3PXPlTsthksigWWSc07Th01Tl",
    "name": "2026-10-26_新加坡英語學習交流團 (31).jpeg",
    "alt": "旅途中，與朋友分享笑容 / Sharing a smile with friends along the way",
    "caption": "旅途中，與朋友分享笑容",
    "width": 958,
    "height": 718,
    "captionEn": "Sharing a smile with friends along the way"
  }
];
