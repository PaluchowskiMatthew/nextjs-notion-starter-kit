// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// module.exports = withBundleAnalyzer({
//   staticPageGenerationTimeout: 800,
//   images: {
//     domains: [
//       'www.notion.so',
//       'notion.so',
//       'images.unsplash.com',
//       'pbs.twimg.com',
//       'abs.twimg.com',
//       's3.us-west-2.amazonaws.com',
//       'nextjs-notion-starter-kit-blond-nine.vercel.app',
//       'nextjs-notion-starter-kit-paluchowskimatthew.vercel.app'
//       // 'transitivebullsh.it'
//     ],
//     formats: ['image/avif', 'image/webp'],
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
//   }
// })

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};