
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


const EnglishTeam = () => (
  <div className='thesis'>

    <div className="team-header">
      <div>
        <h1 style={{ color: '#37505C' }}>Team</h1>
        <h2>Managing Partners</h2>
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
            <div style={{ color: '#74C3F5', fontWeight: 300 }}>General Partner</div>
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
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-peita.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <h3>Peita Lin</h3>
            <div style={{ color: '#74C3F5', fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
        Peita holds a PhD in financial economics, with a background in game theory, mechanism design, and computer science. He has worked as a software engineer with Amity and OB1 (OpenBazaar), a decentralized marketplace that uses cryptocurrencies. Peita drives the fund's investment decisions, manages internal software, and develops asset pricing models and research projects.
        He has been using Bitcoin for payments of goods and services since 2012 and has been actively investing in cryptoassets including Ethereum, altcoins, and TGEs.
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Advisor</div>
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Advisor</div>
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Strategic Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
Kenneth is a software engineer at Accenture Consulting Group and has consulted for Fortune 100 company’s such as Berkshire Hathaway and AT&T. Kenneth holds Microsoft certification in Software & Data Development Expert. Kenneth involved in blockchain space since 2013, he has deep technical understanding in blockchain technology, extensive trading experience and market understanding. Kenneth is founder of Bitwin Investment Group. Kenneth speaks fluent Chinese and his strengths and focuses on due diligence, networking, and arbitrage.
      </div>
    </div>

  </div>
)


const ChineseTeam = () => (
  <div className='thesis'>

    <div className="team-header">
      <div>
        <h1 style={{ color: '#37505C' }}>球队</h1>
        <h2>管理伙伴</h2>
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
            <div style={{ color: '#74C3F5', fontWeight: 300 }}></div>
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
            <div style={{ color: '#74C3F5', fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
        Peita拥有金融经济学博士学位，具有博弈论，机制设计和计​​算机科学的背景。他曾在Amity和OB1（OpenBazaar）担任软件工程师，这是一个使用加密货币的分散市场。 Peita推动基金的投资决策，管理内部软件，并开发资产定价模型和研究项目。
        自2012年以来，他一直在使用比特币支付商品和服务，并一直积极投资包括以太坊，山寨币和ICO在内的加密设备。
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Advisor</div>
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Advisor</div>
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
创始董事长宝藏数据; BitFury董事会主席;主席Hut8。种子投资者Canva，Color Genomics，T​​weetdeck / Twitter，Wish.com和Zoom Video。自2009年以来参与比特币; Airswap和Powerledger的ICO，创造者Blockchain Summit以及“比特币采矿灯泡”的催化剂。
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Strategic Partner</div>
          </div>
        </div>
      </div>
      <div className=''>
      Kenneth是埃森哲咨询集团的软件工程师，曾为Berkshire Hathaway和AT＆T等财富100强公司提供咨询服务。 Kenneth拥有软件和数据开发专家的Microsoft认证。 Kenneth自2013年开始参与区块链领域，他对区块链技术，广泛的交易经验和市场理解有深入的技术理解。 Kenneth是Bitwin投资集团的创始人。 Kenneth能说流利的中文和他的优点，专注于尽职调查，网络和套利。
      </div>
    </div>

  </div>
)


const RussianTeam = () => (
  <div className='thesis'>

    <div className="team-header">
      <div>
        <h1 style={{ color: '#37505C' }}>команда</h1>
        <h2>Управляющие партнеры</h2>
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
            <div style={{ color: '#74C3F5', fontWeight: 300 }}>General Partner</div>
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
            <div style={{ color: '#74C3F5', fontWeight: 300 }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className=''>
      Пейт имеет степень PhD в области финансовой экономики, с опытом в теории игр, разработке механизмов и информатике. Он работал инженером-программистом с Amity и OB1 (OpenBazaar), децентрализованным рынком, использующим криптотермины. Peita управляет инвестиционными решениями фонда, управляет внутренним программным обеспечением и разрабатывает модели ценообразования активов и исследовательские проекты.
        Он использует Биткойн для оплаты товаров и услуг с 2012 года и активно инвестирует в криптоанализ, включая Ethereum, Altcoins и ICOs.
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Advisor</div>
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Advisor</div>
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
            <div style={{ color: '#74C3F5', fontWeight: 200 }}>Strategic Partner</div>
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
