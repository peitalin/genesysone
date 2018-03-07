

import Head from 'next/head'
import Parallax from '../components/Parallax'
import Mountain1 from '../components/Mountain1'

const STATIC_DIR = './static/'
const FUNDNAME = 'GenesysOne'

const Header = (props) => (
  <Head>
    <title>{( FUNDNAME +  " Capital | Cryptoasset Investments")}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    {/* <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" /> */}
    <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet" />
    {/* <link href="https://fonts.googleapis.com/css?family=Alegreya+SC" rel="stylesheet" />  */}
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
    <div className="main-title-sub">&mdash; Investing in Blockchain & Cryptoasset Frontiers &mdash;</div>
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
  font-family: Helvetica, Cousine, Inconsolata;
  font-size: 12pt;
  line-height: 1.4rem;
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
h3 {
  margin-bottom: 0px;
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
  // color: #D4AFDF;
  color: RGB(58, 183, 149);
  color: RGB(100, 163, 229);
}
a.highlighted {
  // text-decoration: underline;
  color: #444;
  color: RGB(58, 183, 149);
  color: RGB(209, 123, 136);
}


.parallax {
  background-repeat: no-repeat no-repeat;
  overflow: hidden;
  background-position: 50% 50%;
  background-attachment: fixed;
}
#mount6 {
  // filter: hue-rotate(110deg);
}
#parallaxBox1 {
  overflow: hidden;
  height: 100vh;
  background-color: #fefefe;
  // filter: hue-rotate(180deg);
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
  transition-duration: 64ms;
  transition-timing-function: ease;
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
  transition-duration: 64ms;
  transition-timing-function: ease;
}
.main-title-sub {
  margin-top: 12px;
  font-size: 10pt;
  font-family: copperplate;
  color: #444;
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
  color: RGB(58, 183, 149);
  color: RGB(217, 153, 185);
}
.languages.selected-language a {
  transition: all 0.2s ease;
  font-weight: bold;
  color: RGB(72, 164, 127);
  color: RGB(209, 123, 136);
}
.navbar {
  position: relative;
  padding: 1%;
  margin: 5px 20%;
  left: 0%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
  background-color: #fafafa;
}
#navbar-relative {
  transition: all 0.3s cubic-bezier(.85,-0.2,0,1.7);
}
.navbar-fixed-container {
  width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fafafa;
  border-bottom: 1px solid #888;
  /* border: 1px solid #ddd; */
  box-shadow: 0 2px 6px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.24);
}
#navbar-fixed {
  width: 100vw;
  transform: translate3d(0, -80px, 0);
  transition: all 0.3s cubic-bezier(.95,-0.1,0,1.2);
}
.nav-inside {
  height: 100%;
  width: 100%;
}
.nav-inside ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav-inside li {
  height: 2.75em;
  font-size: 1em;
}
.nav-inside a:hover {
  transition: color 0.2s ease;
}
.nav-inside a {
  transition: color 0.2s ease;
}
.section1 {
  position: absolute;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  position: absolute;
  width: 100vw;
}
.thesis {
  margin: 0% 10% 0% 10%;
  overflow-x: hidden;
  padding: 5%;
  text-align: justify;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes slideAnim {
  from {
    opacity: 1;
    -webkit-transform: translate3d(-80%, 0, 0);
    transform: translate3d(-80%, 0, 0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}
.white-fill {
  position: absolute;
  height: 25vh;
  /* border: 1px solid red; */
  width: 100vw;
  bottom: -25vh;
  background-color: #fafafa;
}
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (orientation: portrait) {
  .thesis {
    margin: 0% 3% 0% 3%;
  }
}
/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (orientation: landscape) {
  .main-title {
    margin-top: 25vh;
  }
  .thesis {
    margin: 0% 4% 0% 4%;
  }
}

/* ----------- iPhone 6+, 7+ and 8+ ----------- */
/* Portrait */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (orientation: portrait) {
  .thesis {
    margin: 0% 3% 0% 3%;
  }
}
/* Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (orientation: landscape) {
  .main-title {
    margin-top: 25vh;
  }
  .thesis {
    margin: 0% 4% 0% 4%;
  }
}
/* ----------- iPhone X ----------- */
/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (orientation: portrait) {
  .thesis {
    margin: 0% 3% 0% 3%;
  }
}
/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (orientation: landscape) {
  .main-title {
    margin-top: 25vh;
  }
  .thesis {
    margin: 0% 4% 0% 4%;
  }
}
.footer {
  background-color: #f6f6f6;
  width: 100vw;
}
.social-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.link-container {
  display: flex;
  justify-content: space-between;
  width: 30%;
  min-width: 200px;
  padding: 20px 20px 10px 20px;
}
.social-icon {
  filter: grayscale(.5);
  transition: all 0.3s ease;
  height: 40px;
  width: 40px;
}
.social-icon:hover {
  filter: grayscale(0);
  transform: scale(1.2);
  transition: all 0.3s ease;
}
.copyright {
  padding: 15px;
  text-align: center;
  font-size: 0.8em;
  color: #aaa;
  background-color: #f1f1f1;
}
.profile-pic {
  filter: grayscale(0.8);
  height: 110px;
  transition: transform 200ms;
}
.profile-pic:hover {
  transform: scale(1.2);
  filter: grayscale(0.4);
  transition: all 200ms;
}
.profile-pic-advisor {
  filter: grayscale(1);
  height: 80px;
}
.profile-email {
  font-family: Ubuntu Mono;
  marginTop: 5px;
  font-size: 11pt;
}
.profile-p {
  text-align: justify;
}
.section-container {
  margin-bottom: 2%;
  margin-top: 2%;
}
.flex-profile {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  align-items: center;
}
.flex-profile-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.flex-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-left: 0%;
  padding-left: calc(2% - 4px);
  padding-right: 10%;
  border-left: 4px solid #96616B;
}
.flex-item {
  flex-grow: 1;
  flex-basis: 30%;
  flex-basis: 300px;
}
`

export default Layout
