
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
          <svg id="icon-in" viewBox="0 0 34 34" width="100%" height="100%"><g transform="translate(5 5)" fill="none" fillRule="evenodd"><circle stroke="#fcfcfc" strokeWidth="2" fill="#2468E4" cx="12" cy="12" r="14.5"></circle><path d="M9 15.698a.311.311 0 0 1-.32.302H7.32a.311.311 0 0 1-.32-.302v-5.396c0-.167.143-.302.32-.302h1.36c.177 0 .32.135.32.302v5.396zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 6.68c0 .177-.127.32-.284.32h-1.41c-.158 0-.285-.143-.285-.32v-2.908c0-.434.113-1.901-1.007-1.901-.87 0-1.046 1.004-1.082 1.455v3.354c0 .177-.127.32-.284.32h-1.364c-.157 0-.284-.143-.284-.32V9.424c0-.177.127-.32.284-.32h1.364c.157 0 .284.143.284.32v.54c.323-.544.802-.964 1.822-.964C17.013 9 17 11.375 17 12.68v3z" fill="#FFF"></path></g></svg>
        </svg>
      </a>
    </div>
  );
};

// const lightH3color = "#74c3f5";
const lightH3color = "#64A3E5";


const EnglishTeam = (props) => (
  <div className="thesis">

    <div className="team-header">
      <h1>Team</h1>
      {/* <h2 style={{ color: lightH3color }}>Managing Partners</h2> */}
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
            <div style={{ color: lightH3color, fontWeight: 300 }}>Managing Partner</div>
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
            <div style={{ color: lightH3color, fontWeight: 300 }}>Managing Partner</div>
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
          <img className="profile-pic" src={imgDir + "profilepic-ward.png"} />
          <ProfilePic href="https://www.linkedin.com/in/wardhendon/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Ward Hendon</h3>
          </div>
        </div>
      </div>
      <div className="">
        Ward is a successful entrepreneur, attorney and teacher.  After practicing law with King & Spalding, he co-founded Axiom Law in 2000.  Axiom grew into the world’s largest and fastest growing provider of tech-enabled legal services. Over 15 years with Axiom, Ward sat on the executive management committee and held a variety of sales, operations and management roles, scaling the firm to over $200m in revenue, and 1300+ employees.  He is currently an adjunct professor at UCLA Anderson Business School.
        Ward works with our portfolio companies to scale and develop effective organisational processes. He specialises in the legal aspects of cryptocurrency investments and due diligence.
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
          <img className="profile-pic" src={imgDir + "profilepic-alex.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/garkoosha/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Alex Garkoosha</h3>
          </div>
        </div>
      </div>
      <div className="">
Alex is a PhD in Math, and early Ethereum adopter. Enrolled at the best Russian university in the age of 15, been doing science until 2015 (with PhD thesis devoted to research topics in algebraic geometry and superstring theory).
  <p/>
  In Feb 2014, he discovered how blockchains work and fell in love with the technology. He was the ~15th member of the #ethereum-dev Skype chat, and was one of the first smart contract writers ever. In 2016 worked for the Central Bank of Russia, developing a zk-SNARK-based anonymous bondholder voting protocol. In 2017 he founded ModernToken, the boutique consulting company which builds decentralized architectures for products and write smart contracts of any complexity.
      </div>
    </div>

    {(
      props.redirect &&
      <div className="section-container">
        <div className="flex-profile">
          <div className="flex-profle-inner" style={{ position: "absolute" }}>
            <img className="profile-pic" src={imgDir + "profilepic-matt.jpg"} />
            <ProfilePic href="https://www.linkedin.com/in/matthewmjeaton/"/>
          </div>
          <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
            <div>
              <h3>Matthew Eaton</h3>
            </div>
          </div>
        </div>
        <div className="">
  Matthew was an aerospace engineering officer in the Royal Australian Airforce, later founding Seasoft Digital for development consultancy and software solutions. He has 8 Years of project and engineering management experience leading teams of 15-110 personnel.
            <p/>
  He is an Erlang specialist, a functional programming language for large-scale distributed systems and has deployed applications including distributed cryptocurrency miners, enterprise VR applications with WebVR, C++ and Unreal Engine, digital signal processing applications with C++, JUCE and RackAFX, and logistics data aggregators.
        </div>
      </div>
    )}


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
        <h3 style={{ color: "#37505C", fontSize: 22}}>Advisors</h3>
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
        Jeffery started his career trading options and futures on the CBOC, CBOT and the CME. After working at Salomon Brothers and later the National Bank of Detroit in quantitative research, he founded AVI Portfolio Services Company, Inc. which specialized in risk management in exotic derivative products, which was sold in 1984. He has since been investing in a variety of asset classes, including distressed companies, seed capital, derivatives, structured financial products, lending platforms, biomedical, human genome project, blockchain, and bitcoin.
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
              <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
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
        <h1 style={{ color: "#37505C" }}>球队</h1>
        <h2 style={{ color: lightH3color }}>管理伙伴</h2>
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
          <img className="profile-pic" src={imgDir + "profilepic-ward.png"} />
          <ProfilePic href="https://www.linkedin.com/in/wardhendon/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Ward Hendon</h3>
          </div>
        </div>
      </div>
      <div className="">
沃德是一位成功的企业家，律师和教师。 在与King＆Spalding一起执业后，他于2000年共同创立了Axiom Law. Axiom成长为世界上规模最大，发展最快的技术法律服务提供商。 在Axiom工作超过15年后，Ward一直担任执行管理委员会成员，担任过各种销售，运营和管理职务，将公司业务扩展到超过2亿美元的收入，以及1300多名员工。 他目前是加州大学洛杉矶分校安德森商学院的兼职教授。
         Ward与我们的投资组合公司合作，以扩展和开发有效的组织流程。 他擅长加密货币投资和尽职调查的法律方面。
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
          <img className="profile-pic" src={imgDir + "profilepic-alex.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/garkoosha/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Alex Garkoosha</h3>
          </div>
        </div>
      </div>
      <div className="">
Alex是数学博士，也是早期的以太坊博士。 入读15岁最好的俄罗斯大学，直到2015年一直从事科学研究（博士论文致力于代数几何和超弦理论的研究课题）。
   2014年2月，他发现了区块链如何运作并爱上了这项技术。 他是＃ethereum-dev Skype聊天的第15个成员，并且是有史以来第一个智能合约作家之一。 2016年，他在俄罗斯中央银行工作，开发了基于zk-SNARK的匿名债券持有人投票协议。 2017年，他创立了ModernToken，这是一家精品咨询公司，为产品构建分散式架构，并编写任何复杂的智能合约。
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
Jeffery在CBOC，CBOT和CME开始了他的职业交易期权和期货交易。在所罗门兄弟公司和后来的底特律国家银行定量研究工作后，他创立了AVI Portfolio Services Company，Inc。，专门从事异国情调衍生产品的风险管理，于1984年出售。他从那时起就投资了各种各样的产品。资产类别，包括陷入困境的公司，种子资本，衍生品，结构性金融产品，贷款平台，生物医学，人类基因组计划，区块链和比特币。
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
        <h1 style={{ color: "#37505C" }}>команда</h1>
        <h2 style={{ color: lightH3color }}>Управляющие партнеры</h2>
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
          <img className="profile-pic" src={imgDir + "profilepic-ward.png"} />
          <ProfilePic href="https://www.linkedin.com/in/wardhendon/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Ward Hendon</h3>
          </div>
        </div>
      </div>
      <div className="">
Уорд - успешный предприниматель, адвокат и учитель. После практики закона с King & Spalding, он основал Аксиома права в 2000 году. Axiom выросла в крупнейший и быстро растущий поставщик в мире юридических услуг. Более 15 лет с Axiom, Уорд сидел в исполнительном комитете управления и занимался различными ролями продаж, операций и управления, масштабируя фирму до более чем 200 миллионов долларов дохода и 1300 + сотрудников. В настоящее время он является адъюнкт-профессором в UCLA Anderson Business School.
         Уорд работает с нашими портфельными компаниями, чтобы масштабировать и развивать эффективные организационные процессы. Он специализируется на юридических аспектах инвестиций в криптовалюты и должной осмотрительности.
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
          <img className="profile-pic" src={imgDir + "profilepic-alex.jpg"} />
          <ProfilePic href="https://www.linkedin.com/in/garkoosha/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Alex Garkoosha</h3>
          </div>
        </div>
      </div>
      <div className="">
Алекс - кандидат наук по математике, и усыновитель раннего Эфириума. Поступил в лучший российский университет в возрасте 15 лет, занимался наукой до 2015 года (с кандидатской диссертацией, посвященной темам исследований в алгебраической геометрии и теории суперструн).
   В феврале 2014 года он обнаружил, как работают блокчины и влюбился в эту технологию. Он был ~ 15-м членом чата Skype # ethereum-dev и был одним из первых смарт-писателей-контрактников. В 2016 году работал в Центральном банке России, разрабатывая протокол анонимного голосования акционеров zk-SNARK. В 2017 году он основал бутик-консалтинговую компанию ModernToken, которая строит децентрализованные архитектуры для продуктов и пишет интеллектуальные контракты любой сложности.
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
