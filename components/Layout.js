

import Head from 'next/head'
import Parallax from '../components/Parallax'
import Mountain1 from '../components/Mountain1'

const STATIC_DIR = './static/'
const FUNDNAME = 'GenesysOne'

const Header = (props) => (
  <Head>
    <title>{( FUNDNAME +  " Capital | Digital Asset Investments")}</title>
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
  <div>
    <div className="main-title" id='main-title'>
      <h1>{( FUNDNAME + " " + "Capital" )}</h1>
      <div className="main-title-sub">&mdash; Investing in Blockchain and Digital Asset Frontiers &mdash;</div>
      {/* <img id="g1-logo" className='logo' src={"./static/genesys-logo.png"}/> */}
    </div>
  </div>
)

const Layout = (props) => (
  <div>
    <Header/>
    <style jsx global>{StyleString}</style>
    {/* <Parallax staticDir={STATIC_DIR}/> */}
    {/* <Logo/> */}

    {/* <Mountain1 id="mount1" fill={"#aaaaaa"} /> */}
    {/* <div className="white-fill"></div> */}
    { props.children }
  </div>
)

const StyleString = `
body {
  overflow-x: hidden;
  font-family: Helvetica, Helvetica Neue, Arial, Cousine, Inconsolata;
  font-size: 12pt;
  line-height: 1.4rem;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  color: #26314A;
  background-color: #fafafa;
  -webkit-tap-highlight-color: #ddd;
}
// h1 {
//   font-size: 2.6rem;
//   font-weight: 400;
//   font-family: Lobster, Times;
//   text-align: center;
//   color: #222;
//   margin: 0;
// }
// h2 {
//   font-size: 1.6rem;
//   txt-align: center;
//   margin: 0;
// }
// h2 {
//   font-size: 1.4rem;
//   margin: 0;
// }
// h3 {
//   margin-bottom: 0px;
// }
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

#g1-logo {
  width: 50px;
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
  transition-duration: 48ms;
  transition-timing-function: ease;
  -webkit-animation: fadeInParallax 0.3s ease-in;
  animation: fadeInParallax 0.3s ease-in;
}
#mount1 {
  bottom: -10%;
  z-index: 2;
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
  transition-duration: 48ms;
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
.team-header {
  margin-top: 8%;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #37505C;
}
.thesis {
  margin: 0;
  overflow-x: hidden;
  background-color: #fafafa;
  padding: 5% 0% 5% 10%;
  text-align: justify;
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
  padding: 5px;
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
  filter: grayscale(1);
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
  color: #37505C;
  background-color: #5F8CDC;
}
.profile-pic {
  margin-left: 3px;
  filter: grayscale(0.4);
  height: 110px;
  transition: transform 200ms;
}
.profile-pic:hover {
  transform: scale(1.2);
  // filter: grayscale(0.4);
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
  max-width: 720px;
  margin-bottom: 2%;
  margin-top: 2%;
  padding-right: 10%;
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
  border-left: 4px solid #f8f8fa;
}
.flex-item {
  flex-grow: 1;
  flex-basis: 30%;
  flex-basis: 300px;
}

/////////////////////////// LANDING //////////////////////////
.landing-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  touch-action: pan-y;
  /* Disable pull-down refresh, let mapbox handle panning*/
}
h1 {
  font-size: 2.6rem;
  font-weight: 400;
  color: #eee;
  display: block;
  line-height: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-margin-before: 0rem;
  -webkit-margin-after: 0.5rem;
}
h2 {
  font-size: 1.2rem;
  font-weight: 300;
  color: #74c3f5;
  margin: 0px;
  padding: 0px;
}
h3 {
  font-weight: 500;
  color: #26314A;
  line-height: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}
.psmall {
  margin: 0px;
  padding: 0px;
  line-height: 1rem;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.65);
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
}
.hero-container {
  background-color: #5F8CDC;
  -webkit-animation: slideAnim 1s cubic-bezier(0.7, 0, 0.2, 1) both;
  animation: slideAnim 1s cubic-bezier(0.7, 0, 0.2, 1) both;
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
.hero-container .landing-page-header-container .landing-page-header div:first-child {
  -webkit-animation: slideAnim 1s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 1s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.hero-container .landing-page-header-container .landing-page-header div:nth-child(2) {
  -webkit-animation: slideAnim 0.9s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 0.9s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.hero-container .landing-page-header-container .landing-page-header div:nth-child(3) {
  -webkit-animation: slideAnim 0.8s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 0.8s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.background-color-slider {
  // background-color: #96616b;
  // background-color: #5F8CDC;
  background-color: #64A3E5;
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  -webkit-animation: slideAnim 0.8s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 0.8s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
@keyframes slideAnim {
  from {
    opacity: 1;
    -webkit-transform: translate3d(-80%, 0, 0);
    transform: translate3d(-80%, 0, 0);
  }
}
.landing-page-header-container {
  height: 100vh;
}
.landing-page-header {
  padding-top: 60vh;
  margin-left: 10%;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}
.landing-page-sub-header {
  margin-left: 8%;
  padding-left: calc(2% - 4px);
  padding-right: 10%;
  padding-bottom: 4px;
  border-left: 4px solid #eaeaea;
  max-width: 800px;
}
/* ----------- iPhone X ----------- */
/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {

  h1 {
    font-size: 2.3rem;
  }
  h2 {
    font-size: 1.2rem;
  }

  .landing-page-header {
    padding-top: 55vh;
    padding-bottom: 0.5rem;
  }
  .landing-page-sub-header {
    margin-left: 8%;
    padding-left: 2%;
    padding-right: 10%;
    padding-bottom: 4px;
    border-left: 4px solid #eaeaea;
    max-width: 800px;
  }
}

/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {

    h1 {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 1.2rem;
    }

  .landing-page-header {
    padding-top: 40vh;
    padding-bottom: 0.5rem;
  }
  .landing-page-sub-header {
    margin-left: 8%;
    padding-left: calc(2% - 4px);
    padding-right: 10%;
    padding-bottom: 4px;
    border-left: 4px solid #eaeaea;
    max-width: 800px;
  }

}
.landing-page-sub-header h3 {
  line-height: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  /* adds to 2rem */
}
.landing-languages {
  padding-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 95vh);
  animation: fadeInLanguages 1s cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.5s;
}
.landing-languages .languages {
  margin: 0.2rem;
}
.landing-languages .languages a {
  color: #eaeaea;
  font-size: 0.8rem;
  font-weight: 200;
}
.landing-languages .languages a:hover {
  color: #90E0F3;
}
@keyframes fadeInLanguages {
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
}
.landing-header-fade-appear {
  opacity: 0.01;
}
.landing-header-fade-appear.landing-header-fade-appear-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}
.landing-header-fade-enter {
  opacity: 0.01;
}
.landing-header-fade-enter.landing-header-fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}
.landing-header-fade-leave {
  opacity: 1;
}
.landing-header-fade-leave.landing-header-fade-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
`


export default Layout
