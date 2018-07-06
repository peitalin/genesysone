
const Philosophy = (props) => {
  switch (props.language) {
    case 'english': {
      return (<EnglishPhilosophy fundname={props.fundname}/>)
    }
    case 'chinese': {
      return (<ChinesePhilosophy fundname={props.fundname}/>)
    }
    case 'russian': {
      return (<RussianPhilosophy fundname={props.fundname}/>)
    }
    default: {
      return (<EnglishPhilosophy fundname={props.fundname}/>)
    }
  }
}


const EnglishPhilosophy = (props) => {
  return (
    <div className='thesis'>

      <div className="section-container">
        <i>{props.fundname}</i> is a thesis-driven fund that invests long term in early stage digital assets and blockchain technologies.
        <p>
          We invest in open-source protocols and marketplaces with strong network effects, built by mission-driven founders, governed by communities of thoughtful developers and evangelists.
        </p>
      </div>
    </div>
  )
}

const ChinesePhilosophy = (props) => {
  return (
    <div className ='thesis'>
      <h2>我们在密码套件中进行投资</h2>
      <div className="section-container">
      {props.fundname} 管理高增长密码资产组合。我们采取长期的价值投资方式，积极寻求新兴机遇，包括区块链协议和替代硬币。我们寻找密码套件中的早期阶段仓位，随着时间的推移，潜在的规模，速度和耐力将成倍增长。
      </div>
      <div className="section-container">在 <span>{props.fundname}</span>，我们的使命是为投资者提供这个新的资产类别，流动性，专有技术分析和安全性。
      </div>

      <br/>
    </div>
  )
}

const RussianPhilosophy = (props) => {
  return (
    <div className='thesis'>
      <h2>Мы делаем инвестиции в криптоанализ</h2>

      <div className="section-container">
      <i>{props.fundname}</i> управляет портфелем высокопроизводительных криптоанализов. Мы берем долгосрочный подход к инвестированию в стоимость и активно стремимся к появлению новых возможностей, включая протоколы блок-цепи и альтернативные монеты. Мы ищем ранние позиции в криптоассетах с возможностью расти экспоненциально - масштаб, скорость и выносливость с течением времени.
      </div>
      <div className="section-container">
      В <span>{props.fundname}</span> наша миссия состоит в том, чтобы предоставить инвесторам доступ к этому новому классу активов, ликвидности, проприетарному техническому анализу и безопасности.
      </div>

    </div>
  )
}

export default Philosophy;

