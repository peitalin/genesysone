

import Link from 'next/link'
import classNames from 'classnames'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import RenderPage from '../components/RenderPage'



class Index extends React.Component {

  state = {
    page: 'home',
    language: 'english',
    fundname: 'GenesysOne'
  }

  renderNavbar = ( navbarType ) => {
    const navBottomBorder = (navbarType == 'fixed') ? { borderBottom: 'none' } : {}
    return (
      <nav className='navbar' style={navBottomBorder}>
        <div className='nav-inside'>
          <ul>
            <a className={classNames({ highlighted: this.state.page=='home' })}
              onClick={() => this.setState({ page: 'home' })}>
              Home
            </a>
            <a className={classNames({ highlighted: this.state.page=='thesis' })}
              onClick={() => this.setState({ page: 'thesis' })}>
              Thesis
            </a>
            <a className={classNames({ highlighted: this.state.page=='team' })}
              onClick={() => this.setState({ page: 'team' })}>
              Team
            </a>
          </ul>
        </div>
      </nav>
    )
  }

  landingLanguages = (language) => {
    return (
      <div className='landing-languages'>
        <p className={classNames({
          'languages': true,
          'selected-language': language == 'english'
          })}
          onClick={() => this.setState({ language: 'english' })}
        >
          <a>English</a>
        </p>
        <span className='languages'>—</span>
        <p className={classNames({
          'languages': true,
          'selected-language': language == 'chinese'
          })}
          onClick={() => this.setState({ language: 'chinese' })}
        >
          <a>中文</a>
        </p>
        <span className='languages'>—</span>
        <p className={classNames({
          'languages': true,
          'selected-language': language == 'russian'
          })}
          onClick={() => this.setState({ language: 'russian' })}
        >
          <a>Русский</a>
        </p>
      </div>
    )
  }

  render() {
    return (
      <Layout>
        {this.landingLanguages(this.state.language)}
        <div className='navbar-fixed-container' id='navbar-fixed'>
          {this.renderNavbar('fixed')}
        </div>
        {this.renderNavbar('static')}
        <div className="section1">
          <RenderPage page={this.state.page} fundname={this.state.fundname} language={this.state.language}/>
          <Footer/>
        </div>
      </Layout>
    )
  }
}



export default Index
