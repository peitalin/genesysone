
import Philosophy from '../components/Philosophy'
import Thesis from '../components/Thesis'
import Team from '../components/Team'

const RenderPage = (props) => {
  switch (props.page) {
    case 'home': {
      return (<Philosophy fundname={props.fundname} language={props.language}/>)
    }
    case 'thesis': {
      return (<Thesis language={props.language}/>)
    }
    case 'team': {
      return (<Team language={props.language}/>)
    }
    default: {
      return (<Philosophy fundname={props.fundname} language={props.language}/>)
    }
  }
}

export default RenderPage;
