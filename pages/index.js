

import Link from 'next/link'
import classNames from 'classnames'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Philosophy from '../components/Philosophy'
import Team from '../components/Team'
// import RenderPage from '../components/RenderPage'


class Index extends React.Component {

  state = {
    page: 'home',
    language: 'default',
    fundname: 'GenesysOne'
  }

  handleClick = (language) => {
    this.setState({ language: language })
  }

  landingLanguages = (language) => {
    return (
      <div className='landing-languages'>
        <p className={classNames({
          'languages': true,
          'selected-language': language == 'english' || language == 'default'
          })}
          onClick={() => this.handleClick("english")}
        >
          <a>English</a>
        </p>
        <span className='languages'>—</span>
        <p className={classNames({
          'languages': true,
          'selected-language': language == 'chinese'
          })}
          onClick={() => this.handleClick("chinese")}
        >
          <a>中文</a>
        </p>
        <span className='languages'>—</span>
        <p className={classNames({
          'languages': true,
          'selected-language': language == 'russian'
          })}
          onClick={() => this.handleClick("russian")}
        >
          <a>Русский</a>
        </p>
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <div>
          {this.landingLanguages(this.state.language)}
          <div className='landing-page'>
            <div className='background-color-slider'></div>
            <div className='hero-container'>
              { switchLanguageHeader(this.state.language) }
            </div>
            <Team language={this.state.language}/>
            <Footer/>
          </div>
        </div>
      </Layout>
    )
  }
}



const switchLanguageHeader = (language) => {
  switch (language) {
    case 'chinese': {
      return (
        <div className='landing-page-header-container' key='ch'>
          <div className='landing-page-header landing-page-header-anim'>
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>投资数字资产。</h2> </div>
            <div> <h2>Blockchain。分散的基础设施。</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>GenesysOne是耐心的长期投资者。</h3>
            <p className="psmall">
            我们投资于具有强大网络效应的分散式基础设施和市场。 <br/>由富有创造力，以使命为导向的创始人建立。<br/>由开发者和传播者社区管理。
            </p>
          </div>
        </div>
      )
    }
    case 'russian': {
      return (
        <div className='landing-page-header-container' key='ru'>
          <div className='landing-page-header landing-page-header-anim'>
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>Инвестирование в цифровые активы.</h2> </div>
            <div> <h2>Blockchain. Децентрализованная инфраструктура.</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>GenesysOne являются терпеливыми, долгосрочными инвесторами.</h3>
            <p className="psmall">
            Мы инвестируем в децентрализованные инфраструктуры и рынки с сильными сетевыми эффектами. <br/> Построенный продуманными, основанными на миссии создателями. <br/> Управляется сообществами разработчиков и евангелистов.
              </p>
          </div>
        </div>
      )
    }
    case "english": {
      // duplicate "english case so border animation doesn't trigger on page-load"
      return (
        <div className='landing-page-header-container' key='en'>
          <div className='landing-page-header landing-page-header-anim'>
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>Investing in Digital Assets.</h2> </div>
            <div> <h2>Blockchain. Decentralized Infrastructures.</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>GenesysOne are patient, long-term investors.</h3>
            <p className="psmall">
            We invest in decentralized infrastructures and marketplaces with strong network effects. <br/>Built by thoughtful, mission-driven founders.<br/>Governed by communities of developers and evangelists.
            </p>
          </div>
        </div>
      )
    }
    default: {
      return (
        <div className='landing-page-header-container' key='default'>
          <div className='landing-page-header'>
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>Investing in Digital Assets.</h2> </div>
            <div> <h2>Blockchain. Decentralized Infrastructures.</h2> </div>
          </div>
          <div className='landing-page-sub-header'>
            <h3>GenesysOne are patient, long-term investors.</h3>
            <p className="psmall">
            We invest in decentralized infrastructures and marketplaces with strong network effects. <br/>Built by thoughtful, mission-driven founders.<br/>Governed by communities of developers and evangelists.
            </p>
          </div>
        </div>
      )
    }
  }
}



export default Index
