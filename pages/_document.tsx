import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en-US">
			<Head>
				<meta charSet="UTF-8" />
				<meta content="text/html;charset=utf-8" http-equiv="Content-Type" />

				<meta
					name="keywords"
					content="Webdesign, Zuerich, Zürich, Schweiz, Switzerland, Websites, Website, Online, Agency, Freelancer"
				/>
				<meta name="author" content="Gabriel Egli" />
				<meta
					name="description"
					content="With beautiful design and numerous features, I offer online presence for companies or individuals in need of it. If you are interested, visit my page where you can contact me immediately."
				/>

				<meta property="og:image" content="" />
				<meta property="og:title" content="Webdesign · Gabriel Egli" />
				<meta
					property="og:description"
					content="With beautiful design and numerous features, I offer online presence for companies or individuals in need of it. If you are interested, visit my page where you can contact me immediately."
				/>
				<meta property="og:url" content="https://www.gabriel-egli.ch" />
				<meta property="og:type" content="website" />

				{/**! IOS SPLASH-SCREENS */}

				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/12.9__iPad_Pro_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/10.9__iPad_Air_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/10.5__iPad_Air_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/10.2__iPad_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_14_Pro_Max_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_14_Pro_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/iPhone_11__iPhone_XR_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
					href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
					href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/12.9__iPad_Pro_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/10.9__iPad_Air_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/10.5__iPad_Air_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/10.2__iPad_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_14_Pro_Max_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_14_Pro_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/iPhone_11__iPhone_XR_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
					href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
					href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
				/>

				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="180x180"
					href="/apple-touch-icon-180x180.png"
				/>
				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="152x152"
					href="/apple-touch-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="144x144"
					href="/apple-touch-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="120x120"
					href="/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="120x120"
					href="/apple-touch-icon-120x120.png"
				/>

				<link rel="shortcut icon" type="image/x-icon" href="/favicon-32x32.ico" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

				<meta name="msapplication-square310x310logo" content="/mstile-310x310.png" />
				<meta name="msapplication-TileColor" content="#171717" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
