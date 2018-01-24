
const Footer = () => {
  return (
    <div className="footer">
      <ul className="link-container">
        <a href="https://genesysone.slack.com/" target="_blank">
          <img className='social-icon' alt="Slack" src="/static/logos/slack.svg"/></a>
        <a href="https://medium.com/@genesysone" target="_blank">
          <img className='social-icon' alt="Medium" src="/static/logos/medium.f4e13a37.svg"/></a>
        <a href="https://twitter.com/GenesysOne" target="_blank">
          <img className='social-icon' alt="Twitter" src="/static/logos/twitter.d21bc4ae.svg"/></a>
        {/* <a href="https://reddit.com/r/ethereum/" target="_blank"> */}
        {/*   <img className='social-icon' alt="Reddit" src="/static/logos/reddit.02a9ed76.svg"/></a> */}
        {/* <a href="https://github.com/peitalin" target="_blank"> */}
        {/*   <img className='social-icon' alt="Github" src="/static/logos/github.30422844.svg"/></a> */}
        {/* <a href="https://www.facebook.com/Dether-1372579922848946" target="_blank"> */}
        {/*   <img className='social-icon' alt="Facebook" src="/static/logos/facebook.3a2cbd95.svg"/></a> */}
        {/* <a href="https://bitcointalk.org/index.php?topic=2043651.0" target="_blank"> */}
        {/*   <img className='social-icon' alt="Bitcoin talk" src="/static/logos/bitcoin.ea3f7ca5.svg"/></a> */}
      </ul>
      <div className="copyright">Copyright © 2018 GenesysOne Capital, LLC. All Rights Reserved.</div>
    </div>
  )
}

export default Footer;
