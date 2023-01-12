const siteMetadata = {
  title: 'Garakuta Okiba',
  author: 'kota',
  headerTitle: 'Garakuta Okiba',
  description: 'ガラクタ記事量産中',
  language: 'ja',
  theme: 'system', // system, dark or light
  siteUrl: 'https://yashikota.com',
  siteRepo: 'https://github.com/yashikota/blog',
  socialBanner: '/static/images/icon.png',
  github: 'https://github.com/yashikota',
  twitter: 'https://twitter.com/yashikota',
  rss: 'https://yashikota.com/feed.xml',
  atcoder: 'https://atcoder.jp/users/yashikota',
  zenn: 'https://zenn.dev/yashikota',
  locale: 'jp',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'yashikota.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-YYY66TLTB7', // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
