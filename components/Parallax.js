
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
    // navbar fixed after scrolling down 100vh
    if ( scrollTop > window.innerHeight ) {
      document.getElementById('navbar-fixed').style.transform = `translate3d(0, 0, 0)`
    } else {
      document.getElementById('navbar-fixed').style.transform = `translate3d(0, -80px, 0)`
    }
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

export default Parallax;
