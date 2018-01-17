

import Link from 'next/link'
import classNames from 'classnames'

import Layout from '../components/Layout'
import Philosophy from '../components/Philosophy'
import Thesis from '../components/Thesis'
import Team from '../components/Team'

const FUNDNAME = 'GenesysOne'

class Index extends React.Component {

  state = {
    page: "home"
  }

  handleClick = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'home': {
        return (<Philosophy fundname={FUNDNAME}/>)
      }
      case 'thesis': {
        return (<Thesis/>)
      }
      case 'team': {
        return (<Team/>)
      }
      default: {
        return (<Philosophy fundname={FUNDNAME}/>)
      }
    }
  }

  renderFixedNavbar = () => {
    return (
      <div className='navbar-fixed-container' id='navbar-fixed'>
        <nav className='navbar' style={{ "border-bottom": "none" }}>
          <div className='nav-inside'>
            <ul>
              <a className={classNames({ highlighted: this.state.page=='home' })}
                onClick={() => this.handleClick('home')}>
                Home
              </a>
              <a className={classNames({ highlighted: this.state.page=='thesis' })}
                onClick={() => this.handleClick('thesis')}>
                Thesis
              </a>
              <a className={classNames({ highlighted: this.state.page=='team' })}
                onClick={() => this.handleClick('team')}>
                Team
              </a>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <div className='navbar-relative-container'>
          <nav className='navbar'>
            <div className='nav-inside'>
              <ul>
                <a className={classNames({ highlighted: this.state.page=='home' })}
                  onClick={() => this.handleClick('home')}>
                  Home
                </a>
                <a className={classNames({ highlighted: this.state.page=='thesis' })}
                  onClick={() => this.handleClick('thesis')}>
                  Thesis
                </a>
                <a className={classNames({ highlighted: this.state.page=='team' })}
                  onClick={() => this.handleClick('team')}>
                  Team
                </a>
              </ul>
            </div>
          </nav>
        </div>
        {this.renderFixedNavbar()}
        {this.renderPage()}
      </Layout>
    )
  }
}

export default Index
