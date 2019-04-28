
const StyleCSS = (props) => (
  <style jsx global>{StyleString}</style>
);

const StyleString = `
body {
  overflow-x: hidden;
  font-family: Barlow, Helvetica, Arial;
  font-size: 12pt;
  line-height: 1.4rem;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  color: #222;
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
  border-bottom: 2px solid #222;
}
.team-header h1 {
  color:#222;
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

.team-section-container {
  position: absolute;
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%6666664a' fill-opacity='0.03'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}


@keyframes fadeInTeam {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@keyframes slideAnim2 {
  from {
    opacity: 1;
    -webkit-transform: translate3d(140%, 0, 0);
    transform: translate3d(140%, 0, 0);
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
  color: #888;
  background-color: #222;
}
.profile-pic {
  margin-left: 3px;
  filter: grayscale(0.1);
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
  color:#222;
  max-width: 720px;
  margin-bottom: 2%;
  margin-top: 2%;
  // padding: 2%;
  margin-right: 10%;
  // border-left: 4px solid #fff;
  // background-color: #fff;
  // border: 1px solid red;
}
.section-container h3 {
  color: #222;
}
.section-container .subtitle {
  color: #666;
  font-weight: 200;
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
  //border-left: 4px solid #f8f8fa;
  border-left: 4px solid #eee;
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
  // color: #74c3f5;
  color: #CEA69A;
  margin: 0px;
  padding: 0px;
}
h3 {
  font-weight: 500;
  color: #999;
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
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
@keyframes borderAnim {
  from {
    -webkit-transform: translate3d(140%, 0, 0);
    transform: translate3d(140%, 0, 0);
    border-bottom: 2px solid #222;
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
    //border-left: 4px solid #5F8CDC;
    border-left: 4px solid #222;
  }
}
.sliding-hero-container {
  -webkit-animation: slideAnim 1.6s cubic-bezier(0.7, 0, 0.2, 1) both;
  animation: slideAnim 1.6s cubic-bezier(0.7, 0, 0.2, 1) both;
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}

.hero-container {
  background-color: #222;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath opacity='.4' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  background-color: #ccc;
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
    -webkit-transform: translate3d(-140%, 0, 0);
    transform: translate3d(-140%, 0, 0);
  }
}

.landing-page-header-container {
  height: 80vh;
}
.psmall {
  margin: 0px;
  padding: 0px;
  line-height: 1.2rem;
  font-size: 1rem;
  // color: rgba(0, 0, 0, 0.65);
  color: #777;
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
  height: calc(120vh - 100vh);
  transform: translate3d(0, -60px, 0);
  -webkit-animation: fadeInLanguages 1s cubic-bezier(0.6,0,0.4,1) forwards;
  animation: fadeInLanguages 1s cubic-bezier(0.6, 0.2, 0.4, 1.1) forwards;
  animation-delay: 1s;
}
.languages {
  margin: 0.2rem;
  color: #aaa;
}
.landing-languages .languages {
  margin: 0.2rem;
}
.landing-languages .languages a {
  color: #aaa;
  font-size: 0.8rem;
  font-weight: 200;
}
.landing-languages p.languages.selected-language a {
  // color: #90E0F3;
  color: #CEA69A;
}
.landing-languages .languages a:hover {
  // color: #90E0F3;
  color: #FEA69A;
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

.dither-dark {
  position: relative;
  opacity: 1;
  height: 30vh;
  width: 100vw;
  left: 0px;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(34,34,34,0), rgba(34,34,34,1));
}
.dither-light {
  position: absolute;
  opacity: 1;
  height: 50vh;
  width: 100vw;
  left: 0px;
  top: 0;
  background-image: linear-gradient(to top, rgba(250,250,250,0), rgba(250,250,250,1));
}
.dither-bottom-white-line {
    position: relative;
    bottom: 4px;
    border-bottom: 3px solid #eee;
    width: 100vw;
    right: 0px;
}
`;


export default StyleCSS;
