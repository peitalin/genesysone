
const Team = (props) => {
  switch (props.language) {
    case 'english': {
      return (<EnglishTeam/>)
    }
    case 'chinese': {
      return (<ChineseTeam/>)
    }
    case 'russian': {
      return (<RussianTeam/>)
    }
    default: {
      return (<EnglishTeam/>)
    }
  }
}
const imgDir = './static/'



const ProfilePic = (props) => {
  return (
    <div className="person-card__link">
      <a href={props.href} target="_blank">
        <svg width="34" height="34">
          <svg id="icon-in" viewBox="0 0 34 34" width="100%" height="100%"><g transform="translate(5 5)" fill="none" fillRule="evenodd"><circle stroke="#fcfcfc" strokeWidth="2" fill="#2468E4" cx="12" cy="12" r="14.5"></circle><path d="M9 15.698a.311.311 0 0 1-.32.302H7.32a.311.311 0 0 1-.32-.302v-5.396c0-.167.143-.302.32-.302h1.36c.177 0 .32.135.32.302v5.396zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 6.68c0 .177-.127.32-.284.32h-1.41c-.158 0-.285-.143-.285-.32v-2.908c0-.434.113-1.901-1.007-1.901-.87 0-1.046 1.004-1.082 1.455v3.354c0 .177-.127.32-.284.32h-1.364c-.157 0-.284-.143-.284-.32V9.424c0-.177.127-.32.284-.32h1.364c.157 0 .284.143.284.32v.54c.323-.544.802-.964 1.822-.964C17.013 9 17 11.375 17 12.68v3z" fill="#FFF"></path></g></svg>
        </svg>
      </a>
    </div>
  )
}

// const lightH3color = "#74c3f5";
const lightH3color = "#64A3E5";


const EnglishTeam = () => (
  <div className='thesis'>

    <div className="team-header">
      <h1>Team</h1>
      <h2 style={{ color: lightH3color }}>Managing Partners</h2>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className='profile-pic' style={{ height: 115 }} src={imgDir + "profilepic-hanieh.png"} />
          <ProfilePic href="https://www.linkedin.com/in/hanieh-sadat-80891749/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Hanieh Sadat</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">hanieh@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
        Hanieh Sadat is the former VP of Morgan Stanley, Private Wealth Management. She has been trading traditional assets and managing portfolios for select group of family offices and institutions since 2006. She is the founder of ImpactX – a token generation event advisory firm for impact projects and securing TGE (token generation event) deals for international investors in the past year. Hanieh drives the fund’s capital raising, deal flow, networking, strategic partnerships, and more.
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner" style={{ position: "absolute" }}>
          <img className='profile-pic' src={imgDir + "profilepic-peita.png"} />
          <ProfilePic href="https://www.linkedin.com/in/peita-lin-37842875/"/>
        </div>
        <div className="flex-profile-inner" style={{ position: "relative", left: 110 }}>
          <div>
            <h3>Peita Lin</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
        Peita holds a PhD in financial economics, specialising in game theory, mechanism design, and mathematical statistics. He has a background in computer science and began coding as a teenager. He was a software engineer with Amity and OB1 (OpenBazaar), a decentralized marketplace that uses cryptocurrencies. Peita drives investment decisions, manages internal software, and conducts research on portfolio companies.
        He actively experiments with new digital asset use-cases, and has been using Bitcoin for payments since 2012, Dogecoin for tips, and MakerDAO for loans to stabilize and fund business expenses.
      </div>
    </div>


    <br/>

    <div className="team-header">
      <div>
        <h3 style={{ color: '#37505C', fontSize: 22}}>Partners and Advisors</h3>
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Jeff Wernick</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className=''>
        Jeffery started his career trading options and futures on the CBOC, CBOT and the CME. After working at Salomon Brothers and later the National Bank of Detroit in quantitative research, he founded AVI Portfolio Services Company, Inc. which specialized in risk management in exotic derivative products, which was sold in 1984. He has since been investing in a variety of asset classes, including distressed companies, seed capital, derivatives, structured financial products, lending platforms, biomedical, human genome project, blockchain, and bitcoin.
      </div>
    </div>


    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Dr. Washington Sanchez</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className=''>
        Washington Sanchez is the co-founder of OB1 and an early pioneer in Bitcoin. Backed by Andreessen Horowitz and Union Square Ventures, his team is leading the development of OpenBazaar — the world’s first widely-used decentralized marketplace that uses cryptocurrencies. Washington helps GenesysOne with technical analyses of emerging technologies, protocols, token models, and industry trends.
      </div>
    </div>

    {/* <div className='section-container'> */}
    {/*   <div className="flex-profile"> */}
    {/*     <div className="flex-profle-inner"> */}
    {/*       <img className='profile-pic' src={imgDir + "profilepic-bill.png"} /> */}
    {/*     </div> */}
    {/*     <div className="flex-profile-inner"> */}
    {/*       <div> */}
    {/*         <h3>Bill Tai</h3> */}
    {/*         <div style={{ color: '#888' }}>Venture Partner</div> */}
    {/*       </div> */}
    {/*     </div> */}
    {/*   </div> */}
    {/*   <div className=''> */}
    {/*   Founding Chairman Treasure Data; Board Director of BitFury; Chairman Hut8. Seed investor Canva, Color Genomics, Tweetdeck/Twitter, Wish.com and Zoom Video. Involved w/ Bitcoin since 2009; Catalyst for for Airswap and Powerledger 's ICO's, creator Blockchain Summit, and the 'Bitcoin Mining Lightbulb.' */}
    {/*   Educated as a computer chip designer, joined LSI Logic after college. Issued badge #A001 at the startup of TSMC (NYSE:TSM) then established the semiconductor practice at Alex. Brown & Sons positioning IPO's of Atmel, Cirrus Logic, Dallas Semiconductor, Zilog. */}
    {/*   </div> */}
    {/* </div> */}



    {/* <div className='section-container'> */}
    {/*   <div className="flex-profile"> */}
    {/*     <div className="flex-profle-inner"> */}
    {/*       <img className='profile-pic' src={imgDir + "profilepic-johnny.png"} /> */}
    {/*     </div> */}
    {/*     <div className="flex-profile-inner"> */}
    {/*       <div> */}
    {/*         <h3>Johnny Cheng</h3> */}
    {/*         <div style={{ color: '#888' }}>Strategic Partner</div> */}
    {/*       </div> */}
    {/*     </div> */}
    {/*   </div> */}
    {/*   <div className='landing-page-sub-header'> */}
    {/*     Johnny Cheng is the co-founder of Amity, an interactive messaging platform backed by renowned investors in Silicon Valley and New York. Johnny specializes in analyzing the commercial viability of new platforms and technologies, as well as evaluating founders, teams, and communities. */}
    {/*   </div> */}
    {/* </div> */}



    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-kenny.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Kenneth Jeon</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Strategic Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
      Kenneth is the founder of Bitwin Investment Group, the USA Partner of Huobi Exchange. He was a software engineer at Accenture Consulting Group and has consulted for Fortune 100 companies such as Berkshire Hathaway and AT&T. Kenneth speaks fluent Chinese and focuses on GenesysOne business development opportunities in China.
      </div>
    </div>

  </div>
)


const ChineseTeam = () => (
  <div className='thesis'>

    <div className="team-header">
      <div>
        <h1 style={{ color: '#37505C' }}>球队</h1>
        <h2 style={{ color: lightH3color }}>管理伙伴</h2>
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img style={{ height: 116 }} className='profile-pic' src={imgDir + "profilepic-hanieh.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Hanieh Sadat</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">hanieh@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
      Hanieh Sadat是私人财富管理部门摩根士丹利的前任副总裁。自2006年以来，她一直在为选定的家族办公室和机构集团交易传统资产和管理投资组合。她是ImpactX的创始人，ImpactX是一个影响项目的代币生成事件咨询公司，并为国际投资者提供TGE（代币生成事件）交易。过去的一年。 Hanieh推动该基金的融资，交易流程，网络，战略合作伙伴关系等。
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-peita.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Peita Lin</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
      Peita拥有金融经济学博士学位，专攻博弈论，机制设计和统计方法。 他拥有计算机科学的背景，并在十几岁时开始编码。 他是Amity和OB1（OpenBazaar）的软件工程师，这是一个使用加密货币的分散市场。 Peita推动投资决策，管理内部软件，并对投资组合协议进行研究。
               他积极尝试新的数字资产使用案例，自2012年以来一直使用比特币进行支付，使用Dogecoin进行提示，使用MakerDAO进行贷款以稳定和支付业务费用。
      </div>
    </div>


    <br/>

    <div className="team-header">
      <div>
        <h3 style={{ color: '#37505C', fontSize: 22}}>合作伙伴和顾问</h3>
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Jeff Wernick</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className=''>
Jeffery在CBOC，CBOT和CME开始了他的职业交易期权和期货交易。在所罗门兄弟公司和后来的底特律国家银行定量研究工作后，他创立了AVI Portfolio Services Company，Inc。，专门从事异国情调衍生产品的风险管理，于1984年出售。他从那时起就投资了各种各样的产品。资产类别，包括陷入困境的公司，种子资本，衍生品，结构性金融产品，贷款平台，生物医学，人类基因组计划，区块链和比特币。
      </div>
    </div>


    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Dr. Washington Sanchez</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className=''>
      Washington Sanchez是OB1的联合创始人，也是比特币的早期先驱。在Andreessen Horowitz和Union Square Ventures的支持下，他的团队正在领导OpenBazaar的发展 - 这是世界上第一个使用加密货币的广泛使用的分散市场。华盛顿帮助GenesysOne对新兴技术，协议，令牌模型和行业趋势进行技术分析。
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-bill.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Bill Tai</h3>
            <div style={{ color: '#888' }}>Venture Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
创始董事长宝藏数据; BitFury董事会主席;主席Hut8。种子投资者Canva，Color Genomics，Tweetdeck/Twitter，Wish.com和Zoom Video。自2009年以来参与比特币; Airswap和Powerledger的ICO，创造者Blockchain Summit以及“比特币采矿灯泡”的催化剂。
      受过计算机芯片设计师教育，大学毕业后加入LSI Logic。台积电（纽约证券交易所代码：TSM）创业时发行的徽章＃A001随后在亚历克斯建立了半导体业务。 Brown＆Sons定位Atmel，Cirrus Logic，Dallas Semiconductor，Zilog的首次公开募股。
      </div>
    </div>


    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-kenny.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Kenneth Jeon</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Strategic Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
        Kenneth是Huobi Exchange美国合伙人Bitwin Investment Group的创始人。 他是埃森哲咨询集团的软件工程师，曾为伯克希尔哈撒韦公司和AT＆T公司等财富100强公司提供咨询服务。 Kenneth能说流利的中文，专注于GenesysOne在中国的业务发展机会。
      </div>
    </div>

  </div>
)


const RussianTeam = () => (
  <div className='thesis'>

    <div className="team-header">
      <div>
        <h1 style={{ color: '#37505C' }}>команда</h1>
        <h2 style={{ color: lightH3color }}>Управляющие партнеры</h2>
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img style={{ height: 116 }} className='profile-pic' src={imgDir + "profilepic-hanieh.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Hanieh Sadat</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">hanieh@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
Hanieh Sadat - бывший вице-президент Morgan Stanley, Private Wealth Management. Она торгует традиционными активами и управляет портфелями для избранной группы семейных офисов и учреждений с 2006 года. Она является основателем ImpactX - консалтинговой фирмы по выпуску токенов, создающей впечатляющие проекты и обеспечивающей сделки TGE (торжественное событие) для международных инвесторов в прошлый год. Hanieh стимулирует привлечение капитала фонда, поток сделок, сетевое взаимодействие, стратегические партнерские отношения и многое другое.
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-peita.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Peita Lin</h3>
            <div style={{ color: lightH3color, fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
        Peita имеет степень PhD в области финансовой экономики, специализируясь на теории игр, разработке механизмов и статистических методах. Он имеет опыт работы в области информатики и начал кодирование в подростковом возрасте. Он был инженером-программистом с Amity и OB1 (OpenBazaar), децентрализованным рынком, использующим криптотермины. Peita управляет инвестиционными решениями, управляет внутренним программным обеспечением и проводит исследования по портфельным протоколам.
                 Он активно экспериментирует с новыми вариантами использования цифровых активов и использует Биткойн для платежей с 2012 года, Dogecoin для советов и MakerDAO для займов для стабилизации и финансирования деловых расходов.

      </div>
    </div>


    <br/>

    <div className="team-header">
      <div>
        <h3 style={{ color: '#37505C', fontSize: 22}}>Партнеры и советники</h3>
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Jeff Wernick</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className=''>
        Джеффри начал свою карьеру торговых опционов и фьючерсов на CBOC, CBOT и CME. После работы в Salomon Brothers, а затем в Национальном банке Детройта в области количественных исследований, он основал компанию AVI Portfolio Services Company, Inc., которая специализировалась на управлении рисками в экзотических производных продуктах, которая была продана в 1984 году. С тех пор он инвестировал в различные классы активов, в том числе проблемные компании, начальный капитал, деривативы, структурированные финансовые продукты, кредитные платформы, биомедицинский, проект генома человека, блокчин и биткойн.
      </div>
    </div>


    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Dr. Washington Sanchez</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className=''>
        Вашингтон Санчес является соучредителем OB1 и ранним пионером в биткойне. Под руководством Андреессена Горовица и Union Square Ventures его команда возглавляет разработку OpenBazaar - первого в мире широко используемого децентрализованного рынка, использующего криптотермины. Вашингтон помогает GenesysOne с техническим анализом новых технологий, протоколов, токенов и тенденций в отрасли.
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-bill.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Bill Tai</h3>
            <div style={{ color: '#888' }}>Venture Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
        Учредительный председатель Сокровища данных; Директор правления BitFury; Председатель Hut8. Семенной инвестор Canva, Color Genomics, Tweetdeck / Twitter, Wish.com и Zoom Video. Участвует в биткойне с 2009 года; Катализатор для Airbus и Powerledger's ICO, создатель Blockchain Summit и «Биткойн Майнинг Ламбла».
      Образованный как дизайнер компьютерных чипов, присоединился к LSI Logic после колледжа. Выпущенный значок # A001 при запуске TSMC (NYSE: TSM) затем установил практику полупроводников в Alex. Brown & Sons позиционируют IPO Atmel, Cirrus Logic, Dallas Semiconductor, Zilog.
      </div>
    </div>


    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-kenny.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Kenneth Jeon</h3>
            <div style={{ color: lightH3color, fontWeight: 200 }}>Strategic Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
        Кеннет является инженером-программистом в Accenture Consulting Group и консультировался с такими компаниями, как Berkshire Hathaway и AT & T. Кеннет проводит сертификацию Microsoft в компании Software & Data Development Expert. Кеннет участвовал в блочном пространстве с 2013 года, у него есть глубокое техническое понимание технологии blockchain, обширный опыт торговли и понимание рынка. Кеннет является основателем Bitwin Investment Group. Кеннет свободно говорит по-китайски и его сильные стороны и фокусируется на должной осмотрительности, создании сетей и арбитраже.
      </div>
    </div>

  </div>
)


export default Team;
