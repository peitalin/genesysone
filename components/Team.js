
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

    <h2>Managing Partners</h2>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic' src={imgDir + "profilepic-hanieh.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <b style={{ color: 'RGB(150, 97, 107)' }}>Hanieh Sadat</b>
            <div style={{ color: '#888' }}>General Partner</div>
            <div className="profile-email">hanieh@genesys.one</div>
          </div>
        </div>
      </div>
      <div className='profile-p'>
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
            <b style={{ color: 'RGB(150, 97, 107)' }}>Dr. Peita Lin</b>
            <div style={{ color: '#888' }}>General Partner</div>
            <div className="profile-email">peita@genesys.one</div>
          </div>
        </div>
      </div>
      <div className='profile-p'>
        Peita holds a PhD in financial economics, with a background in game theory, mechanism design, and computer science. He has worked as a software engineer with Amity and OB1 (OpenBazaar), a decentralized marketplace that uses cryptocurrencies. Peita drives the fund's investment decisions, manages internal software, and develops asset pricing models and research projects.
        He has been using Bitcoin for payments of goods and services since 2012 and has been actively investing in cryptoassets including Ethereum, altcoins, and TGEs.
      </div>
    </div>


    <br/>
    <h2>Advisors</h2>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic-advisor' src={imgDir + "profilepic-jeff.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <b style={{ color: 'RGB(150, 97, 107)' }}>Jeff Wernick</b>
            <div style={{ color: '#888' }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className='profile-p'>
        Jeffery started his career trading options and futures on the CBOC, CBOT and the CME. After working at Salomon Brothers and later the National Bank of Detroit in quantitative research, he founded AVI Portfolio Services Company, Inc. which specialized in risk management in exotic derivative products, which was sold in 1984. He has since been investing in a variety of asset classes, including distressed companies, seed capital, derivatives, structured financial products, lending platforms, biomedical, human genome project, blockchain, and bitcoin.
      </div>
    </div>


    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic-advisor' src={imgDir + "profilepic-johnny.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <b style={{ color: 'RGB(150, 97, 107)' }}>Johnny Cheng</b>
            <div style={{ color: '#888' }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className='profile-p'>
        Johnny Cheng is the co-founder of Amity, an interactive messaging platform backed by renowned investors in Silicon Valley and New York. Johnny specializes in analyzing the commercial viability of new platforms and technologies, as well as evaluating founders, teams, and communities.
      </div>
    </div>

    <div className='section-container'>
      <div className="flex-profile">
        <div className="flex-profle-inner">
          <img className='profile-pic-advisor' src={imgDir + "profilepic-washo.png"} />
        </div>
        <div className="flex-profile-inner">
          <div>
            <b style={{ color: 'RGB(150, 97, 107)' }}>Washington Sanchez</b>
            <div style={{ color: '#888' }}>Advisor</div>
          </div>
        </div>
      </div>
      <div className='profile-p'>
        Washington Sanchez is the co-founder of OB1 and an early pioneer in Bitcoin. Backed by Andreessen Horowitz and Union Square Ventures, his team is leading the development of OpenBazaar — the world’s first widely-used decentralized marketplace that uses cryptocurrencies. Washington helps GenesysOne with technical analyses of emerging technologies, protocols, token models, and industry trends.
      </div>
    </div>

  </div>
)

const ChineseTeam = () => (
  <div className='thesis'>

    <h2>管理合作伙伴</h2>

    <p>
    <b>Hanieh Sadat | 普通合伙人</b>
    <br/>
    Hanieh Sadat是摩根士丹利私人财富管理公司的前副总裁。自2006年以来，她一直在为一些家族办公室和机构交易传统资产和管理投资组合。她是ImpactX的创始人，去年。Hanieh推动该基金的融资，交易流程，网络建设，战略合作关系等等。
    </p>

    <p>
    <b>Dr. Peita Lin | 普通合伙人</b>
    <br/>
Peita拥有金融经济学博士学位，在博弈论，机制设计和计算机科学方面拥有博士学位。他曾担任Amity和OB1（OpenBazaar）的软件工程师，这是一个使用加密货币的分散市场。Peita推动基金的投资决策，管理内部软件，开发资产定价模型和研究项目。自2012年起，他一直使用比特币支付商品和服务，并一直积极投资于以太坊，altcoins和TGEs等密码套餐。
    </p>


    <br/>
    <h2>顾问</h2>

    <p>
    <b> Jeffrey Wernick | Advisor</b>
    <br/>
Jeffery在大学期间开始了他在CBOC，CBOT和CME的职业生涯期权和期货交易。 在所罗门兄弟公司和后来的底特律国家银行担任高级职位的定量研究，资本交易，风险管理和贷款定价工作之后，他经营了自己的公司AVI投资组合服务有限公司，专门从事风险管理和量身定制的衍生品 这些产品于1984年被出售给多元化经济利益最大的保险公司。 此后，他一直在投资各种资产类别，包括陷入困境的破产公司，种子资本，天使投资，风险投资，房地产，货币，商品，采矿，各种形式的衍生品和结构性金融产品，分享经济，贷款平台 ，比特币，区块链，生物医学，人类基因组计划和支付系统。
    </p>


    <p>
    <b>郑约翰 | 顾问</b>
    <br/>
    Johnny Cheng是Amity的创始人之一，Amity是一家由Facebook前移动总监和Google Maps创建者支持的交互式消息创业公司。 Johnny擅长分析新平台和技术的商业可行性，以及评估创始人，团队和社区。
    </p>

    <p>
    <b>华盛顿·桑切斯博士 | 顾问</b>
    <br/>
    华盛顿·桑切斯是OB1的共同创始人，也是比特币的早期先驱。 在Andreessen Horowitz和Union Square Ventures的支持下，他的团队领导着OpenBazaar的发展，OpenBazaar是世界上第一个使用加密货币的广泛使用的分散式市场。 华盛顿帮助GenesysOne对新兴技术，协议，令牌模型和行业趋势进行技术分析。
    </p>

  </div>
)

const RussianTeam = () => (
  <div className='thesis'>

    <h2>Управляющие партнеры</h2>

    <p>
    <b>Ханих Садат | Генеральный партнер</b>
    <br/>
    Hanieh Sadat - бывший вице-президент Morgan Stanley, Private Wealth Management. Она торгует традиционными активами и управляет портфелями для избранной группы семейных офисов и учреждений с 2006 года. Она является основателем ImpactX - консалтинговой фирмы по выпуску токенов, создающей впечатляющие проекты и обеспечивающей сделки TGE (торжественное событие) для международных инвесторов в прошлый год. Hanieh стимулирует привлечение капитала фонда, поток сделок, сетевое взаимодействие, стратегические партнерские отношения и многое другое.
    </p>

    <p>
    <b>Д-р Пейта Лин | Генеральный партнер</b>
    <br/>
     Пейт имеет степень PhD в области финансовой экономики, с опытом в теории игр, разработке механизмов и информатике. Он работал инженером-программистом с Amity и OB1 (OpenBazaar), децентрализованным рынком, использующим криптотермины. Peita управляет инвестиционными решениями фонда, управляет внутренним программным обеспечением и разрабатывает модели ценообразования активов и исследовательские проекты. Он использует Биткойн для оплаты товаров и услуг с 2012 года и активно инвестирует в криптоассет, включая Ethereum, altcoins и TGE.
    </p>


    <br/>
    <h2>консультанты</h2>

    <p>
    <b> Jeffrey Wernick | Advisor</b>
    <br/>
Джеффри начал свою карьеру торговых опций и фьючерсов на CBOC, CBOT и CME, будучи студентом колледжа. После работы в Salomon Brothers, а затем в Национальном банке Детройта на руководящих должностях для количественных исследований, торговли капиталом, управления рисками и ценообразования с кредитами, он управлял своей собственной компанией AVI Portfolio Services Company, Inc., которая специализировалась на управлении рисками в специализированной и экзотической производной продукты, которые были проданы в 1984 году крупнейшей страховой компании по диверсифицированным финансовым интересам. С тех пор он инвестировал в различные классы активов, в том числе проблемные и обанкротившиеся компании, начальный капитал, инвестиции в ангелы, венчурный капитал, недвижимость, валюты, товары, добычу полезных ископаемых, все формы деривативов и структурированные финансовые продукты, совместное использование экономики, кредитные платформы , биткойн, блокчейн, биомедицинский, проект генома человека и платежные системы.
    </p>


    <p>
    <b>Джонни Ченг | советник</b>
    <br/>
    Джонни Ченг является соучредителем Amity, интерактивного запуска сообщений, поддерживаемого бывшим руководителем Facebook Facebook и создателем Google Maps. Джонни специализируется на анализе коммерческой жизнеспособности новых платформ и технологий, а также оценке основателей, команд и сообществ.
    </p>

    <p>
    <b>Д-р Вашингтон Санчес | советник</b>
    <br/>
    Вашингтон Санчес является соучредителем OB1 и ранним пионером в биткойне. Под руководством Андреессена Горовица и Union Square Ventures его команда возглавляет разработку OpenBazaar - первого в мире широко используемого децентрализованного рынка, использующего криптотермины. Вашингтон помогает GenesysOne с техническим анализом новых технологий, протоколов, токенов и тенденций в отрасли.
    </p>

  </div>
)

export default Team;
