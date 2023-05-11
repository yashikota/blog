const projectsData = [
  {
    title: 'OITシラバスアプリ',
    description: `大阪工業大学の全学部・大学院に対応したシラバス閲覧アプリ。インクリメンタルサーチやフィルタリングに対応
    使用技術 : React, TypeScript, MUI, Python, Github Actions`,
    imgSrc: '/static/images/syllabus.webp',
    href: 'https://syllabus.oit.yashikota.com',
  },
  {
    title: 'OIT Tools',
    description: `シラバスアプリ等へのリンクや大阪工業大学のニュース、リンク集を掲載
    使用技術 : React, TypeScript, MUI`,
    imgSrc: '/static/images/tools.webp',
    href: 'https://oit.yashikota.com',
  },
  {
    title: `FunBook`,
    description: `PythonのSum関数はJavaScriptではどうやって書くんだろうの疑問に答えてくれる検索サイト
    使用技術 : React, MUI, Go, ChatGPT API`,
    imgSrc: '/static/images/funbook.png',
    href: 'https://funbook.pages.dev',
  },
  {
    title: 'td4-py',
    description: `Pythonで書かれたTD4のエミュレーター
    使用技術 : Python`,
    imgSrc: '/static/images/td4-py.gif',
    href: 'https://github.com/yashikota/td4-py',
  },
  {
    title: 'JANCodeジェネレーター',
    description: `JANCode(Japanese Article Number Code)を生成するジェネレーター
    使用技術 : Python`,
    imgSrc: '/static/images/jancode.png',
    href: 'https://github.com/yashikota/jancode',
  },
  {
    title: 'Pomodoro Timer',
    description: `Siv3Dで作成したポモドーロタイマー
    使用技術 : Siv3D, C++`,
    imgSrc: '/static/images/no-image.jpg',
    href: 'https://github.com/yashikota/pomodoro-timer',
  },
  {
    title: 'AtCoder Beginner Contest API',
    description: `開催時期が一番近いAtCoder Beginner Contestの情報を取得するAPI
    使用技術 : Deno, TypeScript, Deno Deploy`,
    imgSrc: '/static/images/abc-api.png',
    href: 'https://github.com/yashikota/abc-latest-api',
  },
  {
    title: 'AtCoder Beginner Contest Bot',
    description: `開催時期が一番近いAtCoder Beginner Contestの情報を通知するDiscord Bot
    使用技術 : Rust, Serenity, CircleCI`,
    imgSrc: '/static/images/abc-bot.png',
    href: 'https://github.com/yashikota/abc-latest-bot',
  },
  {
    title: 'Auto Annotation Tool',
    description: `YOLOv5形式のアノテーションファイルを半自動で作成するツール
    使用技術 : Python, YOLOv5, OpenCV`,
    imgSrc: '/static/images/no-image.jpg',
    href: 'https://github.com/yashikota/auto-annotation',
  },
  {
    title: 'Aozora Markov Bot',
    description: `青空文庫 (www.aozora.gr.jp) のアクセスランキング上位500位の作品からマルコフ連鎖により生成された文章を1時間に1回ツイート使用技術 : Python, markovify, CircleCI`,
    imgSrc: '/static/images/aozora-markov.webp',
    href: 'https://twitter.com/AozoraMarkov',
  },
]

export default projectsData
