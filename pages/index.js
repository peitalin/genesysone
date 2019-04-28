

import Link from "next/link";
import Head from "next/head";

import StyleCSS from "../components/StyleCSS";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Languages from "../components/Languages";
import MainTitle from "../components/MainTitle";


const STATIC_DIR = "./static/";
const FUNDNAME = "GenesysOne";

const Header = (props) => (
  <Head>
    <title>{( FUNDNAME +  " Capital")}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet" />
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
);



class Index extends React.Component {

  state = {
    page: "home",
    language: "default",
    fundname: "GenesysOne",
    redirect: false,
  };

  componentDidMount() {
    if (window) {
      if (window.location) {
        this.setState({
          redirect: window.location.search.length > 1
        });
      }
    }
  }

  handleClick = (language) => {
    this.setState({ language: language });
  }

  attachScrollHandler = () => {
    if (scrollY > 10) {
      let d = document.getElementById("thesis-id");
      d.classList.remove("dark");
    } else {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  handleScroll = () => {
    function getScrollTop(event) {
        let e = event || window.event;
        let srcElement = e.target || e.srcElement;
        return srcElement.documentElement.scrollTop || srcElement.body.scrollTop;
    }
    let scrollTop = event ? getScrollTop(event) : 0;
    let d = document.getElementById("thesis-id");
    if ( scrollTop > window.innerHeight * 1 / 4 ) {
      d.classList.remove("dark");
    } else {
      d.classList.add("dark");
    }
  }

  render() {
    return (
      <div className="landing-page">
        <Header/>
        <StyleCSS/>
        <Languages language={this.state.language} handleClick={this.handleClick}/>

        <div className="background-color-slider"></div>
        <div className="sliding-hero-container">
          <div className="hero-container">
            <MainTitle language={this.state.language}/>
            <div className="dither-dark"/>
          </div>
        </div>

        <div className="dither-bottom-white-line"/>
        {/* <div className="team-section-container"> */}
        {/*   <div className="dither-light"/> */}
        {/*   <Team language={this.state.language} redirect={this.state.redirect}/> */}
        {/*   <Footer/> */}
        {/* </div> */}
      </div>
    );
  }
}


export default Index;
