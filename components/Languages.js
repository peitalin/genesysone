
import classNames from "classnames";

const Languages = (props) => {
  return (
    <div className="landing-languages">
      <p className={classNames({
        "languages": true,
        "selected-language": props.language === "english" || props.language === "default"
        })}
        onClick={() => props.handleClick("english")}
      >
        <a>English</a>
      </p>
      <span className="languages">—</span>
      <p className={classNames({
        "languages": true,
        "selected-language": props.language === "chinese"
        })}
        onClick={() => props.handleClick("chinese")}
      >
        <a>中文</a>
      </p>
      <span className="languages">—</span>
      <p className={classNames({
        "languages": true,
        "selected-language": props.language === "russian"
        })}
        onClick={() => props.handleClick("russian")}
      >
        <a>Русский</a>
      </p>
    </div>
  );
};

export default Languages;
