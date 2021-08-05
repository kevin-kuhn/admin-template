module.exports = {
	reactStrictMode: true,

	images: {
		maxAge: 60, 
		domains: ["source.unsplash.com"],
	},

	// async headers() {
	// 	return [
	// 		{
	// 			source: '/_next/image(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           // Instead of this value:
  //           value: 'public, max-age=60, s-maxage=60, stale-while-revalidate=60',
  //           // Cache-Control response header is `public, max-age=60` in production
  //           // and `public, max-age=0, must-revalidate` in development
  //         },
  //       ],
	// 		},
	// 	]
	// },
}
