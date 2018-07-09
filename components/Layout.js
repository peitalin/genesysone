

import Head from 'next/head'

const STATIC_DIR = './static/'
const FUNDNAME = 'GenesysOne'

const Header = (props) => (
  <Head>
    <title>{( FUNDNAME +  " Capital | Digital Asset Investments")}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    {/* <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" /> */}
    {/* <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" /> */}
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


const Layout = (props) => (
  <div>
    <Header/>
    <style jsx global>{StyleString}</style>
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
  background-color: #222;
  -webkit-tap-highlight-color: #ddd;
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

#g1-logo {
  width: 50px;
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
  border-bottom: 2px solid #5682A3;
}
.team-header h1 {
  color:#5682A3;
}
.team-header *:nth-child(1) {
  animation: fadeIn 1s cubic-bezier(0.6, 0.2, 0.4, 1.1) both;
  animation-delay: .2s;
}
.team-header *:nth-child(2) {
  animation: fadeIn 1s cubic-bezier(0.6, 0.2, 0.4, 1.1) both;
  animation-delay: .3s;
}
@keyframes borderAnimTeamHeader {
  from {
    opacity: 0;
    -webkit-transform: translate3d(115%, 0, 0);
    transform: translate3d(115%, 0, 0);
    border-bottom: 2px solid #5A4BA2;
  }
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
  -webkit-animation: slideAnim2 1.5s cubic-bezier(0.6, 0, 0.2, 1);
  animation: slideAnim2 1.5s cubic-bezier(0.6, 0, 0.2, 1);
}
@keyframes slideAnim2 {
  from {
    opacity: 1;
    -webkit-transform: translate3d(115%, 0, 0);
    transform: translate3d(115%, 0, 0);
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
  border-radius: 80px;
}
.profile-pic:hover {
  // transform: scale(1.2);
  // filter: grayscale(0.4);
  // transition: all 200ms;
}
.profile-pic-advisor {
  filter: grayscale(1);
  height: 80px;
}
.profile-email {
  font-family: courier;
  marginTop: 5px;
  font-size: 11pt;
}
.profile-p {
  text-align: justify;
}
.section-container {
  color:#5682A3;
  max-width: 720px;
  margin-bottom: 2%;
  margin-top: 2%;
  // padding: 2%;
  margin-right: 10%;
  // border-left: 4px solid #fff;
  // background-color: #fdfdfd;
}
.section-container h3 {
  color:#5682A3;
}
.flex-profile {
  height: 120px;
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
.landing-page-header {
  padding-top: 60vh;
  margin-left: 10%;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}
.landing-page-header-anim {
  -webkit-animation: borderAnim 0.66s cubic-bezier(0.5, 0.1, 0.4, 1) both;
  animation: borderAnim 0.66s cubic-bezier(0.5, 0.1, 0.4, 1) both;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
@keyframes borderAnim {
  from {
    -webkit-transform: translate3d(115%, 0, 0);
    transform: translate3d(115%, 0, 0);
    border-bottom: 2px solid #5A4BA2;
  }
}
.landing-page-sub-header {
  margin-left: 8%;
  padding-left: calc(2% - 4px);
  padding-right: 10%;
  padding-bottom: 4px;
  max-width: 800px;
  border-left: 4px solid #eaeaea;
  -webkit-animation: borderAnim2 0.66s cubic-bezier(0.5, 0.1, 0.4, 1) both;
  animation: borderAnim2 0.66s cubic-bezier(0.5, 0.1, 0.4, 1) both;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
@keyframes borderAnim2 {
  from {
    border-left: 4px solid #5F8CDC;
    // -webkit-transform: translate3d(0, 115%, 0);
    // transform: translate3d(0, 115%, 0);
  }
}
.sliding-hero-container {
  -webkit-animation: slideAnim 1.6s cubic-bezier(0.7, 0, 0.2, 1) both;
  animation: slideAnim 1.6s cubic-bezier(0.7, 0, 0.2, 1) both;
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
@keyframes pulseBackground {
  0% {
    background-color: RGBA(109, 140, 208, 1.00);
    // same color as #5F8CDC;
  }
  50% {
    background-color: RGBA(109, 140, 208, 0.5);
  }
  100% {
    background-color: RGBA(109, 140, 208, 1.00);
    // same color as #5F8CDC;
  }
}
.hero-container {
  background-color: #5F8CDC;
  // -webkit-animation: pulseBackground 4s ease-in-out infinite;
  // animation: pulseBackground 4s ease-in-out infinite;
  // -webkit-animation-delay: 0.15s;
  // animation-delay: 0.15s;
}
.hero-container .landing-page-header-container .landing-page-header div:first-child {
  -webkit-animation: slideAnim 1.4s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 1.4s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.hero-container .landing-page-header-container .landing-page-header div:nth-child(2) {
  -webkit-animation: slideAnim 1.6s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 1.6s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}
.hero-container .landing-page-header-container .landing-page-header div:nth-child(3) {
  -webkit-animation: slideAnim 1.5s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 1.5s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
}
.background-color-slider {
  // background-color: #96616b;
  // background-color: #5F8CDC;
  background-color: #64A3E5;
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 110vh;
  -webkit-animation: slideAnim 1.4s cubic-bezier(0.7, 0, 0.3, 1) both;
  animation: slideAnim 1.4s cubic-bezier(0.7, 0, 0.3, 1) both;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
@keyframes slideAnim {
  from {
    opacity: 1;
    -webkit-transform: translate3d(-115%, 0, 0);
    transform: translate3d(-115%, 0, 0);
  }
}
.landing-page-header-container {
  height: 110vh;
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

.landing-languages {
  padding-top: 2vh;
  top: 0px;
  z-index: 1;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(110vh - 100vh);
  transform: translate3d(0, -60px, 0);
  -webkit-animation: fadeInLanguages 1s cubic-bezier(0.6,0,0.4,1) forwards;
  animation: fadeInLanguages 1s cubic-bezier(0.6, 0.2, 0.4, 1.1) forwards;
  animation-delay: 1s;
}
.languages {
  margin: 0.2rem;
  color: #eaeaea;
}
.landing-languages .languages {
  margin: 0.2rem;
}
.landing-languages .languages a {
  color: #eaeaea;
  font-size: 0.8rem;
  font-weight: 200;
}
.landing-languages p.languages.selected-language a {
  color: #90E0F3;
}
.landing-languages .languages a:hover {
  color: #90E0F3;
}
@keyframes fadeInLanguages {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(200px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
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
    padding-top: 45vh;
    padding-bottom: 0.5rem;
  }
  .landing-page-sub-header {
    margin-left: 8%;
    padding-left: 2%;
    padding-right: 10%;
    padding-bottom: 4px;
  }
  .landing-languages {
    padding-top: 3vh;
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
    padding-top: 30vh;
    padding-bottom: 0.5rem;
  }
  .landing-page-sub-header {
    margin-left: 8%;
    padding-left: calc(2% - 4px);
    padding-right: 10%;
    padding-bottom: 4px;
    max-width: 800px;
  }
  .landing-languages {
    padding-top: 3vh;
  }

}
.landing-page-sub-header h3 {
  line-height: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
}
.landing-page-sub-header *:nth-child(1) {
  animation: fadeIn 0.35s cubic-bezier(0.6, 0.2, 0.4, 1.1) both;
  animation-delay: 0.35s;
}
.landing-page-sub-header *:nth-child(2) {
  animation: fadeIn 0.45s cubic-bezier(0.6, 0.2, 0.4, 1.1) both;
  animation-delay: 0.45s;
}
.person-card__link {
  position: absolute;
  bottom: 6px;
  right: 0;
  z-index: 2;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  transition: all 200ms;
}
.person-card__link:hover {
  transform: scale(1.2);
  transition: all 200ms;
}
`



export default Layout
