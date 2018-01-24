
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

const EnglishTeam = () => (
  <div className='thesis'>

    <h2>Managing Partners</h2>

    <p>
    <b>Hanieh Sadat | General Partner</b>
    <br/>
      Hanieh Sadat is the former VP of Morgan Stanley, Private Wealth Management. She has been trading traditional assets and managing portfolios for select group of family offices and institutions since 2006. She is the founder of ImpactX – a token generation event advisory firm for impact projects and securing TGE (token generation event) deals for international investors in the past year. Hanieh drives the fund’s capital raising, deal flow, networking, strategic partnerships, and more.
    </p>

    <p>
    <b>Dr. Peita Lin | General Partner</b>
    <br/>
    Peita holds a PhD in financial economics, with a background in game theory, mechanism design, and computer science. He has worked as a software engineer with Amity and OB1 (OpenBazaar), a decentralized marketplace that uses cryptocurrencies. Peita drives the fund's investment decisions, manages internal software, and develops asset pricing models and research projects.
    He has been using Bitcoin for payments of goods and services since 2012 and has been actively investing in cryptoassets including Ethereum, altcoins, and TGEs.
    </p>


    {/* <br/> */}
    {/* <h2>Advisors</h2> */}
    {/*  */}
    {/* <p> */}
    {/* <b>Johnny Cheng | Advisor</b> */}
    {/* <br/> */}
    {/* Johnny Cheng is the co-founder of Amity, an interactive messaging startup backed by Facebook's former Head of Mobile and the creator of Google Maps. Johnny specializes in analyzing the commercial viability of new platforms and technologies, as well as evaluating founders, teams, and communities. */}
    {/* </p> */}
    {/*  */}
    {/* <p> */}
    {/* <b>Dr. Washington Sanchez | Advisor</b> */}
    {/* <br/> */}
    {/* Washington Sanchez is the co-founder of OB1 and an early pioneer in Bitcoin. Backed by Andreessen Horowitz and Union Square Ventures, his team is leading the development of OpenBazaar — the world’s first widely-used decentralized marketplace that uses cryptocurrencies. Washington helps GenesysOne with technical analyses of emerging technologies, protocols, token models, and industry trends. */}
    {/* </p> */}
    {/*  */}
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
