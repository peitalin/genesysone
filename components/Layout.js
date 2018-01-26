

import Head from 'next/head'
import Parallax from '../components/Parallax'
import Mountain1 from '../components/Mountain1'

const STATIC_DIR = './static/'
const FUNDNAME = 'GenesysOne'

const Header = (props) => (
  <Head>
    <title>{( FUNDNAME +  "Capital | Cryptoasset Investments")}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <link href={ STATIC_DIR + "styles.css" } rel="stylesheet" />
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
    <link rel="shortcut icon" href={ STATIC_DIR + "favicon/favicon.ico" }/>
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
  <div>
    <Header/>
    <style jsx global>{StyleString}</style>
    <Parallax staticDir={STATIC_DIR}/>
    <Logo/>
    <Mountain1 id="mount1" fill={"#fafafa"} />
    <div className="white-fill"></div>
    { props.children }
  </div>
)

const StyleString = `
body {
  overflow-x: hidden;
  font-family: Cousine, Inconsolata;
  font-size: 12pt;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  color: #222;
  background-color: #fafafa;
  -webkit-tap-highlight-color: #ddd;
}
h1 {
  font-size: 2.6rem;
  font-weight: 400;
  font-family: Lobster;
  text-align: center;
  color: #222;
  margin: 0;
}
h2 {
  font-size: 1.6rem;
  txt-align: center;
  margin: 0;
}
h2 {
  font-size: 1.4rem;
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #999;
}
a:hover {
  cursor: pointer;
  color: #D4AFDF;
}
a.highlighted {
  text-decoration: underline;
  color: #444;
}


.parallax {
  background-repeat: no-repeat no-repeat;
  overflow-x: hidden;
  background-position: 50% 50%;
  background-attachment: fixed;
}
#parallaxBox1 {
  overflow-x: hidden;
  height: 100vh;
  background-color: #fefefe;
}
@keyframes fadeInParallax {
  from {
    opacity: 0;
  }
}
.mountain {
  position: absolute;
  width: 100vw;
  left: -1px;
  bottom: 0%;
  font-size: 1em;
  transition-duration: 96ms;
  transition-timing-function: linear;
  -webkit-animation: fadeInParallax 0.3s ease-in;
  animation: fadeInParallax 0.3s ease-in;
}
#mount1 {
  bottom: -10%;
  -webkit-animation: fadeInParallax 0s ease-in;
  animation: fadeInParallax 0s ease-in;
}
@media (orientation: portrait) {
  #mount1 {
    bottom: -4%;
  }
}
#mount2 {
  bottom: -5%
}
.main-title {
  width: 100vw;
  margin-top: 36vh;
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #222;
  transition-duration: 96ms;
  transition-timing-function: linear;
}
.main-title-sub {
  margin-top: 5px;
  font-size: 10pt;
}

@keyframes fadeInLanguages {
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
}

.landing-languages {
  position: absolute;
  z-index: 1;
  top: 0px;
  width: 100%;
  padding-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  -webkit-animation: fadeInLanguages 1s cubic-bezier(0.6,0,0.4,1);
  animation: fadeInLanguages 1s cubic-bezier(0.6,0,0.4,1);
}
.languages {
  margin: 0.2rem;
  color: #eaeaea;
}
.languages a {
  font-size: 0.8rem;
  color: #aaa;
}
.languages a:hover {
}
.languages.selected-language a {
  transition: all 0.2s ease;
  font-weight: bold;
  color: #222;
}
`

export default Layout
