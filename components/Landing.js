
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



class Landing extends React.Component {

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
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
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
  }

  render() {
    const imgDir = this.props.staticDir + 'img/'
    return (
      <div className='landing-page'>
        <div className='background-color-slider'></div>
        <div className='hero-container'>
          { switchLanguageHeader(this.state.language) }
        </div>
      </div>
    )
  }
}

export default Landing;
