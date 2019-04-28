
const MainTitle = (props) => {
  switch (props.language) {
    case "chinese": {
      return (
        <div className="landing-page-header-container" key="ch">
          <div className="landing-page-header landing-page-header-anim">
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>投资数字资产。</h2> </div>
            <div> <h2>Blockchain。分散的基础设施。</h2> </div>
          </div>
          <div className="landing-page-sub-header">
            <h3>GenesysOne是耐心的长期投资者。</h3>
            <p className="psmall">
            我们投资于具有强大网络效应的分散式基础设施和市场。 <br/>由富有创造力，以使命为导向的创始人建立。<br/>由开发者和传播者社区管理。
            </p>
          </div>
        </div>
      );
    }
    case "russian": {
      return (
        <div className="landing-page-header-container" key="ru">
          <div className="landing-page-header landing-page-header-anim">
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>Инвестирование в цифровые активы.</h2> </div>
            <div> <h2>Blockchain. Децентрализованная инфраструктура.</h2> </div>
          </div>
          <div className="landing-page-sub-header">
            <h3>GenesysOne являются терпеливыми, долгосрочными инвесторами.</h3>
            <p className="psmall">
            Мы инвестируем в децентрализованные инфраструктуры и рынки с сильными сетевыми эффектами. <br/> Построенный продуманными, основанными на миссии создателями. <br/> Управляется сообществами разработчиков и евангелистов.
              </p>
          </div>
        </div>
      );
    }
    case "english": {
      // duplicate "english case so border animation doesn"t trigger on page-load"
      return (
        <div className="landing-page-header-container" key="en">
          <div className="landing-page-header landing-page-header-anim">
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>Emerging Technology Investments.</h2> </div>
          </div>
          <div className="landing-page-sub-header">
            <h3>GenesysOne are patient investors.</h3>
            <p className="psmall">
              We invest in companies and teams <br/>
              building capital efficient networks, financial services <br/>
              and cloud technologies <br/>
            </p>
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className="landing-page-header-container" key="en">
          <div className="landing-page-header landing-page-header-anim">
            <div> <h1>GenesysOne Capital</h1> </div>
            <div> <h2>Emerging Technology Investments.</h2> </div>
          </div>
          <div className="landing-page-sub-header">
            <h3>GenesysOne are patient investors.</h3>
            <p className="psmall">
              We invest in companies and teams <br/>
              building capital efficient networks, financial services <br/>
              and cloud technologies <br/>
            </p>
          </div>
        </div>
      );
    }
  }
};

export default MainTitle;
