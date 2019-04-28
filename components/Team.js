
const Team = (props) => {
  switch (props.language) {
    case "english": {
      return (<EnglishTeam/>);
    }
    case "chinese": {
      return (<ChineseTeam/>);
    }
    case "russian": {
      return (<RussianTeam/>);
    }
    default: {
      return (<EnglishTeam redirect={props.redirect}/>);
    }
  }
};
const imgDir = "./static/";



const ProfilePic = (props) => {
  return (
    <div className="person-card__link">
      <a href={props.href} target="_blank">
        <svg width="34" height="34">
          <svg id="icon-in" viewBox="0 0 34 34" width="100%" height="100%"><g transform="translate(5 5)" fill="none" fillRule="evenodd"><circle stroke="#fafafa" strokeWidth="2" fill="#222" cx="12" cy="12" r="14.5"></circle><path d="M9 15.698a.311.311 0 0 1-.32.302H7.32a.311.311 0 0 1-.32-.302v-5.396c0-.167.143-.302.32-.302h1.36c.177 0 .32.135.32.302v5.396zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 6.68c0 .177-.127.32-.284.32h-1.41c-.158 0-.285-.143-.285-.32v-2.908c0-.434.113-1.901-1.007-1.901-.87 0-1.046 1.004-1.082 1.455v3.354c0 .177-.127.32-.284.32h-1.364c-.157 0-.284-.143-.284-.32V9.424c0-.177.127-.32.284-.32h1.364c.157 0 .284.143.284.32v.54c.323-.544.802-.964 1.822-.964C17.013 9 17 11.375 17 12.68v3z" fill="#fafafa"></path></g></svg>
        </svg>
      </a>
    </div>
  );
};

// const lightH3color = "#74c3f5";
const lightH3color = "#888";


const EnglishTeam = (props) => (
  <div className="thesis">

    <div className="team-header">
      <h1>Team</h1>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" style={{ height: 115 }} src={imgDir + "profilepic-hanieh.png"} />
          <ProfilePic href="https://www.linkedin.com/in/hanieh-sadat-80891749/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Hanieh Sadat</h3>
            <div className="subtitle">Managing Partner</div>
          </div>
        </div>
      </div>
      <div className="">
Hanieh Sadat is a managing partner of GenesysOne Capital, a hybrid venture fund that invests in digital assets and decentralized web technologies. She is the former VP of Morgan Stanley, Private Wealth Management. She has been trading traditional assets and managing portfolios for select group of family offices and institutions since 2006, specialising in fixed income securities.
<p/>

She is the founder and chairwoman of ImpactX Lab, a token generation event accelerator for impact projects. In 2016 she founded ImpactXCircle which brings together a select group of thought leaders, innovators, and industry leaders to discuss the greatest challenges and opportunities in impact investing. She is the treasurer of American Renewable Energy Institute. Hanieh drives the funds capital raising, deal flow, team building, and strategic partnerships.
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-peita.png"} />
          <ProfilePic href="https://www.linkedin.com/in/peita-lin-37842875/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Peita Lin</h3>
            <div className="subtitle">Managing Partner</div>
          </div>
        </div>
      </div>
      <div className="">
        Peita holds a PhD in financial economics, specialising in applied game theory, and mathematical statistics. Research topics include models of speculation in financial markets, and empirical tests of speculative bidding in auctions.
          <p/>He has a background in computer science and began coding as a teenager, implementing non-parametric asset pricing and volatility models during his honors degree. He was a software engineer building web applications with Amity and
        OB1, a decentralized marketplace for cryptocurrencies, where he built mobile applications for OpenBazaar-IPFS nodes.
          <p/>Peita drives investment decisions, manages internal software, and conducts research on portfolio companies. He is an early adopter of new digital asset use-cases, and has been using Bitcoin for payments since 2012, and MakerDAO for loans to stabilize and fund new ventures.
      </div>
    </div>




    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-dmitry.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/mitgor/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Dmitry Gorilovsky</h3>
          </div>
        </div>
      </div>
      <div className="">
      Dmitry is a serial entrepreneur and founder of Moeco, a blockchain-enabled crowdsourcing platform for IoT connectivity, and Woodenshark which builds consumer gadgets.
He holds a Magister’s degree in IT, Physics, Mathematics from St. Petersburg National Research University.  Dmitry has an extensive background in R&D, product management, strategy and business development.
He founded AINTSYS in 2006, which is a private scientific research institute. The team consists of 50 researchers in areas such as computability theory, quantum computing, and multi-agent systems. Dmitry provides technical advisory or software architectures and product management.

      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-denis.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/denislam/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Denis Lam</h3>
          </div>
        </div>
      </div>
      <div className="">
Denis is a serial entrepreneur, early stage blockchain startup investor, and founder of IoTBlock, a blockchain-enabled data governance platform for enterprise IoT and digital data.
  <p/>
He holds a B.S. in Engineering from University of California, Berkeley with emphasis in Biotechnology and is also a full stack software engineer who began coding as a teenager. Previously, he was the CSO/CIO for RFID and Card Technology, an IoT electronics manufacturer and data solutions company, where he founded an Innovation Lab to research the use of blockchain in global enterprise supply chain applications. Having experience in enterprise digital transformation, business development, product strategy, and investing in blockchain ventures, Denis drives investment decisions and serves as a strategic advisor for portfolio companies.
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-james.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/zijiang-james-yang-44b7949/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Dr. James Yang</h3>
          </div>
        </div>
      </div>
      <div className="">
James Yang is the creator of Netta and FractalNets.  He received his Ph.D. from the University of Pennsylvania and M.S. from Rice University. He was a full professor of Computer Science at Western Michigan University and a visiting professor at the University of Michigan. Dr. Yang published over eighty scientific papers . He received numersous academic awards such as ACM distinguished paper award and industrial awards such as Google CS Engagement award. He is the general chair of the 12th  IEEE Conference on Software Testing, Validation and Verification (ICST), and a panelist for United States National Science Foundation.
          <p/>
      </div>
    </div>

    <br/>

    <div className="team-header">
      <div>
        <h3 style={{ color: "#222", fontSize: 28}}>Advisors</h3>
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Jeff Wernick</h3>
            <div className="subtitle">Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
        Jeffrey started his career trading options and futures on the CBOC, CBOT and the CME. After working at Salomon Brothers and later the National Bank of Detroit in quantitative research, he founded AVI Portfolio Services Company, Inc. which specialized in risk management in exotic derivative products, which was sold in 1984. He has since been investing in a variety of asset classes, including distressed companies, seed capital, derivatives, structured financial products, lending platforms, biomedical, human genome project, blockchain, and bitcoin.
      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Dr. Washington Sanchez</h3>
            <div className="subtitle">Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
        Washington Sanchez is the co-founder of OB1 and an early pioneer in Bitcoin. Backed by Andreessen Horowitz and Union Square Ventures, his team is leading the development of OpenBazaar — the world’s first widely-used decentralized marketplace that uses cryptocurrencies. Washington helps GenesysOne with technical analyses of emerging technologies, protocols, token models, and industry trends.
      </div>
    </div>

    {(
      props.redirect &&
      <div className="section-container">
        <div className="flex-profile">
          <div className="flex-profle-inner">
            <img className="profile-pic" src={imgDir + "profilepic-bill.png"} />
          </div>
          <div className="flex-profile-inner">
            <div>
              <h3>Bill Tai</h3>
              <div className="subtitle">Advisor</div>
            </div>
          </div>
        </div>
        <div className="">
        Founding Chairman Treasure Data; Board Director of BitFury; Chairman Hut8. Seed investor Canva, Color Genomics, Tweetdeck/Twitter, Wish.com and Zoom Video. Involved w/ Bitcoin since 2009; Catalyst for Airswap and Powerledger "s ICO"s, creator Blockchain Summit, and the "Bitcoin Mining Lightbulb."
        Educated as a computer chip designer, joined LSI Logic after college. Issued badge #A001 at the startup of TSMC (NYSE:TSM) then established the semiconductor practice at Alex. Brown & Sons positioning IPO"s of Atmel, Cirrus Logic, Dallas Semiconductor, Zilog.
        </div>
      </div>
    )}


  </div>
);


const ChineseTeam = () => (
  <div className="thesis">

    <div className="team-header">
      <div>
        <h1>球队</h1>
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img style={{ height: 116 }} className="profile-pic" src={imgDir + "profilepic-hanieh.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Hanieh Sadat</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
          </div>
        </div>
      </div>
      <div className="">
      Hanieh Sadat是私人财富管理部门摩根士丹利的前任副总裁。自2006年以来，她一直在为选定的家族办公室和机构集团交易传统资产和管理投资组合。她是ImpactX的创始人，ImpactX是一个影响项目的代币生成事件咨询公司，并为国际投资者提供TGE（代币生成事件）交易。过去的一年。 Hanieh推动该基金的融资，交易流程，网络，战略合作伙伴关系等。
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-peita.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Peita Lin</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
          </div>
        </div>
      </div>
      <div className="">
      Peita拥有金融经济学博士学位，专攻博弈论，机制设计和统计方法。 他拥有计算机科学的背景，并在十几岁时开始编码。 他是Amity和OB1（OpenBazaar）的软件工程师，这是一个使用加密货币的分散市场。 Peita推动投资决策，管理内部软件，并对投资组合协议进行研究。
               他积极尝试新的数字资产使用案例，自2012年以来一直使用比特币进行支付，使用Dogecoin进行提示，使用MakerDAO进行贷款以稳定和支付业务费用。
      </div>
    </div>



    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-dmitry.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/mitgor/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Dmitry Gorilovsky</h3>
          </div>
        </div>
      </div>
      <div className="">
Dmitry是Moeco的连续创业者和创始人，Moeco是一个支持区块链的物联网连接众包平台，而Woodenshark则是构建消费者小工具的。
他拥有圣彼得堡国立研究大学的IT，物理，数学博士学位。 德米特里在研发，产品管理，战略和业务发展方面拥有广泛的背景。
他于2006年创立了AINTSYS，这是一家私人科研机构。 该团队由50名研究人员组成，涉及可计算性理论，量子计算和多智能体系统等领域。 Dmitry提供技术咨询或软件架构和产品管理。
      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-denis.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/denislam/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Denis Lam</h3>
          </div>
        </div>
      </div>
      <div className="">
Denis是一位连续创业者，早期区块链创业投资者，也是IoTBlock的创始人，IoTBlock是一个支持区块链的企业物联网和数字数据数据治理平台。
  <p/>
他持有B.S. 他是加利福尼亚大学伯克利分校的工程专业，主修生物技术，同时也是一名全面的软件工程师，十几岁时开始编写代码。 此前，他曾担任物联网电子制造商和数据解决方案公司RFID和卡技术的CSO / CIO，在那里他创建了一个创新实验室，研究区块链在全球企业供应链应用中的应用。 Denis拥有企业数字化转型，业务开发，产品战略和区块链投资方面的经验，可以推动投资决策，并为投资组合公司提供战略顾问服务。
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-james.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/zijiang-james-yang-44b7949/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Dr. James Yang</h3>
          </div>
        </div>
      </div>
      <div className="">
James Yang是Netta和FractalNets的创造者。 他获得了博士学位。 来自宾夕法尼亚大学和M.S. 来自莱斯大学。 他是西密歇根大学计算机科学的全职教授，也是密歇根大学的客座教授。 杨博士发表了80多篇科学论文。 他获得了许多学术奖项，如ACM杰出论文奖和Google CS Engagement奖等行业奖项。 他是第12届IEEE软件测试，验证和验证会议（ICST）的主席，以及美国国家科学基金会的小组成员。
          <p/>
      </div>
    </div>


    <br/>

    <div className="team-header">
      <div>
        <h3 style={{ color: "#37505C", fontSize: 22}}>合作伙伴和顾问</h3>
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Jeff Wernick</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
Jeffrey在CBOC，CBOT和CME开始了他的职业交易期权和期货交易。在所罗门兄弟公司和后来的底特律国家银行定量研究工作后，他创立了AVI Portfolio Services Company，Inc。，专门从事异国情调衍生产品的风险管理，于1984年出售。他从那时起就投资了各种各样的产品。资产类别，包括陷入困境的公司，种子资本，衍生品，结构性金融产品，贷款平台，生物医学，人类基因组计划，区块链和比特币。
      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Dr. Washington Sanchez</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
      Washington Sanchez是OB1的联合创始人，也是比特币的早期先驱。在Andreessen Horowitz和Union Square Ventures的支持下，他的团队正在领导OpenBazaar的发展 - 这是世界上第一个使用加密货币的广泛使用的分散市场。华盛顿帮助GenesysOne对新兴技术，协议，令牌模型和行业趋势进行技术分析。
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-bill.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Bill Tai</h3>
            <div>Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
创始董事长宝藏数据; BitFury董事会主席;主席Hut8。种子投资者Canva，Color Genomics，Tweetdeck/Twitter，Wish.com和Zoom Video。自2009年以来参与比特币; Airswap和Powerledger的ICO，创造者Blockchain Summit以及“比特币采矿灯泡”的催化剂。
      受过计算机芯片设计师教育，大学毕业后加入LSI Logic。台积电（纽约证券交易所代码：TSM）创业时发行的徽章＃A001随后在亚历克斯建立了半导体业务。 Brown＆Sons定位Atmel，Cirrus Logic，Dallas Semiconductor，Zilog的首次公开募股。
      </div>
    </div>



  </div>
);


const RussianTeam = () => (
  <div className="thesis">

    <div className="team-header">
      <div>
        <h1>команда</h1>
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img style={{ height: 116 }} className="profile-pic" src={imgDir + "profilepic-hanieh.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Hanieh Sadat</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
          </div>
        </div>
      </div>
      <div className="">
Hanieh Sadat - бывший вице-президент Morgan Stanley, Private Wealth Management. Она торгует традиционными активами и управляет портфелями для избранной группы семейных офисов и учреждений с 2006 года. Она является основателем ImpactX - консалтинговой фирмы по выпуску токенов, создающей впечатляющие проекты и обеспечивающей сделки TGE (торжественное событие) для международных инвесторов в прошлый год. Hanieh стимулирует привлечение капитала фонда, поток сделок, сетевое взаимодействие, стратегические партнерские отношения и многое другое.
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-peita.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Peita Lin</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
          </div>
        </div>
      </div>
      <div className="">
        Peita имеет степень PhD в области финансовой экономики, специализируясь на теории игр, разработке механизмов и статистических методах. Он имеет опыт работы в области информатики и начал кодирование в подростковом возрасте. Он был инженером-программистом с Amity и OB1 (OpenBazaar), децентрализованным рынком, использующим криптотермины. Peita управляет инвестиционными решениями, управляет внутренним программным обеспечением и проводит исследования по портфельным протоколам.
                 Он активно экспериментирует с новыми вариантами использования цифровых активов и использует Биткойн для платежей с 2012 года, Dogecoin для советов и MakerDAO для займов для стабилизации и финансирования деловых расходов.

      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-dmitry.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/mitgor/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Dmitry Gorilovsky</h3>
          </div>
        </div>
      </div>
      <div className="">
Дмитрий является серийным предпринимателем и основателем Moeco, платформой для краудсорсинга с возможностью блокировки для подключения IoT и Woodenshark, которая строит потребительские гаджеты.
Имеет степень магистра в области информационных технологий, физики, математики Санкт-Петербургского национального исследовательского университета. Дмитрий имеет обширный опыт в области исследований и разработок, управления продуктами, стратегии и развития бизнеса.
Он основал AINTSYS в 2006 году, который является частным научно-исследовательским институтом. Команда состоит из 50 исследователей в таких областях, как теория вычислимости, квантовые вычисления и многоагентные системы. Дмитрий предоставляет технические консультационные или программные архитектуры и управление продуктами.

      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-denis.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/denislam/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Denis Lam</h3>
          </div>
        </div>
      </div>
      <div className="">
Денис является серийным предпринимателем, начинающим инвестором в блокчейн на ранних этапах и основателем IoTBlock, платформы управления данными с поддержкой блокчейнов для корпоративных IoT и цифровых данных.
  <p/>
Он имеет степень бакалавра инженер в Калифорнийском университете, Беркли, специализирующийся на биотехнологии, а также инженер-программист с полным стеком, который начал программировать в подростковом возрасте. Ранее он был CSO / CIO для RFID и карточных технологий, производителя электроники IoT и компании, занимающейся решениями данных, где он основал Innovation Lab для исследования использования блокчейна в глобальных приложениях цепочки поставок предприятия. Имея опыт работы в области цифровой трансформации предприятий, развития бизнеса, стратегии продуктов и инвестиций в блокчейн-проекты, Денис принимает инвестиционные решения и является стратегическим советником для портфельных компаний.
      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className="profile-pic" src={imgDir + "profilepic-james.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/zijiang-james-yang-44b7949/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Dr. James Yang</h3>
          </div>
        </div>
      </div>
      <div className="">
Джеймс Ян является создателем Netta и FractalNets. Он получил степень доктора философии. из Университета Пенсильвании и М.С. из Университета Райса. Он был полным профессором компьютерных наук в Университете Западного Мичигана и приглашенным профессором в Мичиганском университете. Доктор Ян опубликовал более восьмидесяти научных работ. Он получил многочисленные научные награды, такие как награда за выдающиеся награды ACM и промышленные награды, такие как награда Google CS Engagement. Он является генеральным председателем 12-й конференции IEEE по тестированию, проверке и проверке программного обеспечения (ICST) и участником Национального научного фонда Соединенных Штатов.
          <p/>
      </div>
    </div>


    <br/>

    <div className="team-header">
      <div>
        <h3 style={{ color: "#37505C", fontSize: 22}}>Партнеры и советники</h3>
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Jeff Wernick</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
        Джеффри начал свою карьеру торговых опционов и фьючерсов на CBOC, CBOT и CME. После работы в Salomon Brothers, а затем в Национальном банке Детройта в области количественных исследований, он основал компанию AVI Portfolio Services Company, Inc., которая специализировалась на управлении рисками в экзотических производных продуктах, которая была продана в 1984 году. С тех пор он инвестировал в различные классы активов, в том числе проблемные компании, начальный капитал, деривативы, структурированные финансовые продукты, кредитные платформы, биомедицинский, проект генома человека, блокчин и биткойн.
      </div>
    </div>


    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Dr. Washington Sanchez</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
        Вашингтон Санчес является соучредителем OB1 и ранним пионером в биткойне. Под руководством Андреессена Горовица и Union Square Ventures его команда возглавляет разработку OpenBazaar - первого в мире широко используемого децентрализованного рынка, использующего криптотермины. Вашингтон помогает GenesysOne с техническим анализом новых технологий, протоколов, токенов и тенденций в отрасли.
      </div>
    </div>

    <div className="section-container">
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className="profile-pic" src={imgDir + "profilepic-bill.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Bill Tai</h3>
            <div>Advisor</div>
          </div>
        </div>
      </div>
      <div className="">
        Учредительный председатель Сокровища данных; Директор правления BitFury; Председатель Hut8. Семенной инвестор Canva, Color Genomics, Tweetdeck / Twitter, Wish.com и Zoom Video. Участвует в биткойне с 2009 года; Катализатор для Airbus и Powerledger"s ICO, создатель Blockchain Summit и «Биткойн Майнинг Ламбла».
      Образованный как дизайнер компьютерных чипов, присоединился к LSI Logic после колледжа. Выпущенный значок # A001 при запуске TSMC (NYSE: TSM) затем установил практику полупроводников в Alex. Brown & Sons позиционируют IPO Atmel, Cirrus Logic, Dallas Semiconductor, Zilog.
      </div>
    </div>



  </div>
);


export default Team;
