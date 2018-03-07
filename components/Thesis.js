
const Thesis = (props) => {
  switch (props.language) {
    case 'english': {
      return (<EnglishThesis/>)
    }
    case 'chinese': {
      return (<ChineseThesis/>)
    }
    case 'russian': {
      return (<RussianThesis/>)
    }
    default: {
      return (<EnglishThesis/>)
    }
  }
}


const EnglishThesis = () => {
  return (
    <div className='thesis'>

      <div className="section-container">
        <h3>We seek investment in technologies that have...</h3>

        <div className="section-container">
          <b>Scale of the vision.</b> Does the protocol target intrinsic and pervasive human needs to communicate, transact or interact with one another? Is the protocol a building block in other platforms that have broad market scope?
          <br/>
        </div>

        <div className="section-container">
          <b> Fundamental technology. </b> Based on new and innovative cryptoeconomic mechanisms, whether it be new data structures, new cryptographic primitives, or new economic incentive mechanisms.
          <br/>
        </div>

        <div className="section-container">
          <b>New market potential.  </b>
          Are they creating a new category or new marketplace at the right time?
          <br/>
        </div>

        <div className="section-container">
          <b>Endurance.</b>
          Will the network grow over time in a sustainable way? Will the platform create network effects that enable defensibility and sustainable economic moats as it grows?
          <br/>
        </div>

        <div className="section-container">
          <b>Meaningful token models. </b>
          Is the token crucial to how the protocol functions? Do the tokens help coordinate network participants and incentivize socially beneficial behaviours?
          <br/>
        </div>

        <div className="section-container">
          <b>Open and active communities. </b>
            Do they have a strong community of developers? Can they attract a community of evangelists?
          <br/>
        </div>

      </div>


      <div className="section-container">
        <h3>We look for teams that...</h3>

        <div className="section-container">
          <b> Have a simple and compelling mission.  </b>
          Are the founders mission-driven? Is the purpose clear and compelling to followers? Are the teams united and willing to walk through walls to succeed?
          <br/>
        </div>

        <div className="section-container">
          <b>Have a fixation on the future. </b>
          Founders who are obsessed with what comes next are founders that do not sidestep hard problems. Do the founders have unwavering focus? Do they have exceptional product vision, ethics, and ability to execute?
          <br/>
        </div>

        <div className="section-container">
          <b>Focus on pragmatism, over idealism. </b>
          Do the founders embrace reality and plan sensible roadmaps? Can they make distinctions between real and illusory trends?
          <br/>
        </div>

        <div className="section-container">
          <b>Embrace critique and disagreements. </b>
          Do the founders have the humility to seek rational dissenting opinions to improve their thought processes? Enduring founders are ones who are curious, not proud.
          <br/>
        </div>

        <div className="section-container">
          <b>Have domain specific expertise. </b>
          Does the project operate in a space that requires domain specific expertise, and does the founder have extensive backgrounds in the relevant field?
          <br/>
        </div>

      </div>




    </div>
  )
}

const ChineseThesis = () => {
  return (
    <div className='thesis'>
      <h2>投资论文</h2>
      <h3>我们寻找机会：</h3>
      <p>
      <b>视野范围</b>价格是否有成倍增长的潜力？其需求，交易量和主流使用量是否会持续增长？
      </p>

      <p>
      <b>强大的团队</b>创始人的使命是什么？他们是否有卓越的产品愿景，技术能力，行之有效的记录，道德和执行能力？这些团队是否团结起来，计算出来，表现出色，并且愿意穿墙而入？
      </p>

      <p>
      <b>基础技术</b>基于新的和创新的密码经济机制，无论是新的数据结构还是新的经济激励。
      </p>

      <p>
      <b>不公平的优势。</b>他们是否拥有专有技术，信息优势，杰出的团队和顾问，先发优势或独家合作关系？
      </p>

      <p>
      <b>活跃的社区</b>他们是否有强大的传道者，客户或开发者社区？
      </p>

      <p>
      <b>简单的使命，技术和信息。</b>追随者是否清楚和引人注目？
      </p>

      <p>
      <b>新的市场潜力</b>他们是在正确的时间创造一个新的类别还是新的市场？
      </p>

      <p>
      <b>下一波。</b>我们正在寻找潜在的和早期的项目，这些项目将处于密码空间即将到来的趋势的前沿。
      </p>

      <p>
      <b>令牌。</b>协议如何工作至关重要？令牌应该与激励挂钩，而不仅仅是一种固定的商业模式或筹集资金的手段。
      </p>

      <p>
      <b>耐力</b>能否以可持续的方式长时间增长？这个平台是否能够创造网络效应，从而使防御性和可持续的经济护城河不断增长？
      </p>

      <p>
      <b>可实现的雄心勃勃的路线图。</b>他们的路线图是否传达了一条清晰的发展道路？我们相信他们可以一贯超额付款吗？
      </p>

      <p>
      <b>早期阶段。</b>我们对加密投资机会采取逆向投资的观点，并寻找主流没有意识到或者不感兴趣的被低估的投资。
      </p>
    </div>
  )
}

const RussianThesis = () => {
  return (
  <div className = 'thesis'>
    <h2> Инвестиционная тезис </h2>
    <h3> Мы ищем возможности, которые имеют: </h3>
    <p>
    <b> Масштабы видения. </b>
    Возможно ли, что цена будет расти экспоненциально
    Будет ли его спрос, объем транзакций и использование в основном потоке постоянно увеличиваться?
    </p>

    <p>
    <b> Сильные команды. </b>
    Являются ли основоположники управляемыми миссией? У них есть исключительное видение продукта, технические способности, проверенные рекорды, этика и способность выполнять? Объединяются ли команды, рассчитываются, высокопроизводительны и готовы пройти через стены, чтобы добиться успеха?
    </p>

    <p>
    <b> Фундаментальная технология. </b>
    На основе новых и инновационных криптоэкономических механизмов, будь то новые структуры данных или новые экономические стимулы.
    </p>

    <p>
    <b> Неблагоприятные преимущества. </b> Имеют ли они собственные технологии, информационные преимущества, исключительные команды и советники, преимущества первопроходца или эксклюзивные партнерские отношения?
    </p>

    <p>
    <b> Активное сообщество. </b> Есть ли у них сильное сообщество евангелистов, клиентов или разработчиков?
    </p>

    <p>
    <b> Простота в их миссии, технологиях и сообщениях. </b> Является ли это ясным и убедительным для последователей?
    </p>

    <p>
    <b> Новый рыночный потенциал. </b> Создают ли они новую категорию или новый рынок в нужное время?
    </p>

    <p>
    <b> Следующая волна. </b> Мы ищем скрытые и ранние проекты, которые будут в авангарде предстоящих тенденций в пространстве криптоассета.
    </p>

    <p>
    <b> Токены. </b> Важно ли, чтобы протокол работал? Токены должны быть привязаны к стимулам, а не к простому бизнес-модели или средствам для сбора средств.
    </p>

    <p>
    <b> Выносливость. </b> Будет ли она устойчиво расти с течением времени? Будет ли платформа создавать сетевые эффекты, которые позволят защищать и устойчивые экономические рвы по мере ее роста?
    </p>

    <p>
    <b> Целесообразные дорожные карты </b>, которые достижимы. Содержит ли их дорожная карта четкий путь к росту? Считаем ли мы, что они могут постоянно перевыполнять?
    </p>

    <p>
    <b> Ранняя стадия. </b> Мы принимаем противоположный взгляд на возможности инвестиций в криптоассет и смотрим на недооцененные инвестиции, которые мейнстрим уже осведомлен или пока не заинтересован.
    </p>
  </div>
  )
}
export default Thesis;

