
const InvestmentThesis = (props) => {
  let FUNDNAME = props.fundname
  return (
    <div className='section1'>
      <div className='thesis'>
        <h2>We do investments in cryptoassets</h2>

        <p>
        <i>{FUNDNAME}</i> manages a portfolio of high-growth cryptoassets. We take a long-term value investing approach and actively seek emerging opportunities including blockchain protocols and alternative coins. We look for early-stage positions in cryptoassets with potential to grow exponentially — scale, velocity, and endurance over time.
        </p>
        <p>
          At {FUNDNAME}, our mission is to provide investors with access to this new asset class, liquidity, proprietary technical analysis, and security.
        </p>

        <h3> We invest in cryptoassets and blockchain technologies including: </h3>

        <p>
        <b>Cryptocurrencies, with strong value preserving properties. </b>
        <br/>
        We look for deflationary and immutable stores of value. Deflationary, so the real value of assets do not erode over time. Immutable, so no one can seize the asset.
        </p>

        <p>
        <b>Smart contract platforms, with tokens that capture strong network effects.</b>
        <br/>
        Networks and marketplaces work well when it is safe to trade, secure, and liquid. When these characteristics improve as a side-effect of a user’s actions, the network becomes more valuable to other users. Smart contract platforms with tokens that incentivize these behaviours can produce valuable, self-regulating marketplaces. These form the next wave of autonomous and decentralized Ubers and Airbnbs, with most of the value captured in tokens, rather than equity.
        </p>

      <p>
      <b>Cross-chain layers, that enable interoperability between blockchains. </b>
        <br/>
      We believe the rapid evolution in the crypto-space will lead to overlap in blockchain protocols and fragmentation. Investments in cross-chain protocols address this problem directly as these interoperability layers enable major blockchains to seamlessly work together.
      </p>

      <br/>
    </div>
  </div>
  )
}

export default InvestmentThesis;
