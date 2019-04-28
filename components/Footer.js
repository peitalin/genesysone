
const STATIC_DIR = "./static/";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-container">
        <ul className="link-container">
          <a href="https://genesysone.slack.com/" target="_blank">
            <img className="social-icon" alt="Slack" src={ STATIC_DIR + "logos/slack.svg" }/></a>
          <a href="https://medium.com/@genesysone" target="_blank">
            <img className="social-icon" alt="Medium" src={ STATIC_DIR + "logos/medium.f4e13a37.svg" }/></a>
          <a href="https://twitter.com/GenesysOne" target="_blank">
            <img className="social-icon" alt="Twitter" src={ STATIC_DIR + "logos/twitter.d21bc4ae.svg" }/></a>
          {/* <a href="https://github.com/peitalin" target="_blank"> */}
          {/*   <img className='social-icon' alt="Github" src={ STATIC_DIR + "logos/github.30422844.svg" }/></a> */}
        </ul>
      </div>
      <div className="copyright">Copyright © 2018 GenesysOne Capital, LLC. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
