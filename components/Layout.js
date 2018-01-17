

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
