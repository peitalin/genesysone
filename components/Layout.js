

import Head from 'next/head'
import Parallax from '../components/Parallax'
import Mountain1 from '../components/Mountain1'

const STATIC_DIR = './static/'
const FUNDNAME = 'GenesysOne'

const Header = (props) => (
  <Head>
    <title>{( FUNDNAME +  "Capital | Cryptoasset Investments")}</title>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
    <link href={ STATIC_DIR + "styles.css" } rel="stylesheet" />
    <link href={ STATIC_DIR + "mountains.css" } rel="stylesheet" />
    <link href={ STATIC_DIR + "navbar.css" } rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="57x57" href={ STATIC_DIR + "favicon/apple-icon-57x57.png" }/>
    <link rel="apple-touch-icon" sizes="60x60" href={ STATIC_DIR + "favicon/apple-icon-60x60.png" }/>
    <link rel="apple-touch-icon" sizes="72x72" href={ STATIC_DIR + "favicon/apple-icon-72x72.png" }/>
    <link rel="apple-touch-icon" sizes="76x76" href={ STATIC_DIR + "favicon/apple-icon-76x76.png" }/>
    <link rel="apple-touch-icon" sizes="114x114" href={ STATIC_DIR + "favicon/apple-icon-114x114.png" }/>
    <link rel="apple-touch-icon" sizes="120x120" href={ STATIC_DIR + "favicon/apple-icon-120x120.png" }/>
    <link rel="apple-touch-icon" sizes="144x144" href={ STATIC_DIR + "favicon/apple-icon-144x144.png" }/>
    <link rel="apple-touch-icon" sizes="152x152" href={ STATIC_DIR + "favicon/apple-icon-152x152.png" }/>
    <link rel="apple-touch-icon" sizes="180x180" href={ STATIC_DIR + "favicon/apple-icon-180x180.png" }/>
    <link rel="icon" type="image/png" sizes="192x192" href={ STATIC_DIR + "favicon/android-icon-192x192.png" }/>
    <link rel="icon" type="image/png" sizes="32x32" href={ STATIC_DIR + "favicon/favicon-32x32.png" }/>
    <link rel="icon" type="image/png" sizes="96x96" href={ STATIC_DIR + "favicon/favicon-96x96.png" }/>
    <link rel="icon" type="image/png" sizes="16x16" href={ STATIC_DIR + "favicon/favicon-16x16.png" }/>
    <link rel="manifest" href={ STATIC_DIR + "favicon/manifest.json" }/>
    <meta name="msapplication-TileColor" content="#444444"/>
    <meta name="msapplication-TileImage" content={ STATIC_DIR + "favicon/ms-icon-144x144.png" }/>
    <meta name="theme-color" content="#222222"/>
  </Head>
)

const Logo = (props) => (
  <div className="main-title" id='main-title'>
    <h1>{( FUNDNAME + " " + "Capital" )}</h1>
    <div className="main-title-sub">&mdash; Investing in Cryptoasset Frontiers &mdash;</div>
  </div>
)

const Layout = (props) => (
  <div className='genesis-container'>
    <Header/>
    <Parallax staticDir={STATIC_DIR}/>
    <Logo/>
    <Mountain1 id="mount1" fill={"#fafafa"} />
    <div className="white-fill"></div>
    { props.children }
  </div>
)

export default Layout
