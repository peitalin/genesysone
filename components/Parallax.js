
import React from 'react'
// import throttle from 'lodash/throttle'
import { throttle } from 'lodash'


const getBrowser = () => {
  var sBrowser, sUsrAg = navigator.userAgent;
  if(sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome";
  } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
  } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
  } else if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
  } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "Microsoft Internet Explorer";
  }
  return sBrowser
}



class Parallax extends React.Component {

  constructor(props) {
    super();
    this.state = {
        scrollTop: 0,
        threshold1: 0,
        windowHeight: 0,
        windowWidth: 0,
        elems: {},
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    if (getBrowser() === "Mozilla Firefox") {
      console.info("Firefox detected, disabling parallax.")
      // // transitionDuration bugs on Firefox, must be 0ms
      // window.addEventListener('scroll', throttle(this.handleScroll, 200))
      // let htmlCollectionMountains = document.getElementsByClassName('mountain')
      // Array.prototype.forEach.call(htmlCollectionMountains, (el, i) => {
      //   el.style.transitionDuration = '200ms'
      // });
      // document.getElementsByClassName('main-title')[0].style.transitionDuration = '200ms'

    } else {
      window.addEventListener('scroll', throttle(this.handleScroll, 32))
      let htmlCollectionMountains = document.getElementsByClassName('mountain')
      Array.prototype.forEach.call(htmlCollectionMountains, (el, i) => {
        el.style.transitionDuration = '96ms'
      });
      document.getElementsByClassName('main-title')[0].style.transitionDuration = '96ms'
    }

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.setState({
      elems: {
        mount1: document.getElementById('mount1'),
        mount2: document.getElementById('mount2'),
        mount3: document.getElementById('mount3'),
        mount4: document.getElementById('mount4'),
        // mount5: document.getElementById('mount5'),
        mount6: document.getElementById('mount6'),
        // mount7: document.getElementById('mount7'),
        parallaxBox1: document.getElementById('parallaxBox1'),
        maintitle: document.getElementById('main-title'),
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener( 'scroll', this.handleScroll )
    window.removeEventListener( 'resize', this.handleResize )
  }

  handleResize = () => {
    this.setState({
        windowWidth: window.innerWidth
    })
    // let fixedContainerHeight = document.getElementById('fixedContainer1').clientHeight
    this.setState({
      threshold1: window.innerHeight,
    })
    this.scaleParallaxHeight()
  }

  scaleParallaxHeight = () => {
    // var viewportRatio = window.innerWidth / window.innerHeight
    // var viewportScale = (viewportRatio > 1.4) ? 0.3 : 0.25
    // document.getElementById("parallaxBox1").style.height = `
    //     ${Math.round( (viewportRatio - viewportScale * viewportRatio) * 100 )}vh
    // `
    setTimeout(function() {
        document.getElementById("parallaxBox1").style.transitionDuration = "height 20000s ease"
    }, 50)
  }

  handleScroll = (event) => {
    function getScrollTop(event) {
        let e = event || window.event
        let srcElement = e.target || e.srcElement
        return srcElement.documentElement.scrollTop || srcElement.body.scrollTop
    }
    let scrollTop = event ? getScrollTop(event) : 0
    let {
      mount7,
      mount6,
      mount5,
      mount4,
      mount3,
      mount2,
      mount1,
      parallaxBox1,
      maintitle,
    } = this.state.elems
    let { threshold1, threshold2, threshold3 } = this.state

    // parallax window 1
    if ( scrollTop <= threshold1 ) {
        maintitle.style.transform = `translate3d(0, ${scrollTop/2}px, 0)`
        // maintitle.style.opacity = `${(window.innerHeight-scrollTop)/window.innerHeight}`
        // mount7.style.transform = `translate3d(0, ${scrollTop/1.1}px, 0)`
        mount6.style.transform = `translate3d(0, ${scrollTop/1.3}px, 0)`
        // mount5.style.transform = `translate3d(0, ${scrollTop/1.4}px, 0)`
        mount4.style.transform = `translate3d(0, ${scrollTop/1.6}px, 0)`
        mount3.style.transform = `translate3d(0, ${scrollTop/2.3}px, 0)`
        mount2.style.transform = `translate3d(0, ${scrollTop/3.8}px, 0)`
    }
    // // navbar fixed after scrolling down 100vh
    // if ( scrollTop > window.innerHeight ) {
    //   document.getElementById('navbar-fixed').style.transform = `translate3d(0, 0, 0)`
    // } else {
    //   document.getElementById('navbar-fixed').style.transform = `translate3d(0, -80px, 0)`
    // }
  }

  render() {
    const imgDir = this.props.staticDir + 'img/'
    return (
      <div className="parallax" id="parallaxBox1">
        {/* <img id="mount7" className='mountain' src={imgDir + "mount7.svg"}/> */}
        <img id="mount6" className='mountain' src={imgDir + "mount6.svg"}/>
        {/* <img id="mount5" className='mountain' src={imgDir + "mount5.svg"}/> */}
        <img id="mount4" className='mountain' src={imgDir + "mount4.svg"}/>
        <img id="mount3" className='mountain' src={imgDir + "mount3.svg"}/>
        <img id="mount2" className='mountain' src={imgDir + "mount2.svg"}/>
      </div>
    )
  }
}

const unused_styles = `
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
//
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
`

export default Parallax;
