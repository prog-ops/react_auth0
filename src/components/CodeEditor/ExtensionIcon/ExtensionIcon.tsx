import { ReactComponent as JavascriptIcon } from "../../../assets/images/JavaScript.svg";
import { ReactComponent as PythonIcon } from "../../../assets/images/Python.svg";
import { ReactComponent as KotlinIcon } from "../../../assets/images/Kotlin.svg";
import { ReactComponent as JavaIcon } from "../../../assets/images/Java.svg";
import { ReactComponent as DefaultIcon } from "../../../assets/images/materialui.svg";

interface Props {
  extension?: string
}

export const ExtensionIcon = (props: Props) => {
  switch (props.extension) {
    case 'jsx':
    case 'tsx':
      return <></>
    case 'js':
      return <JavascriptIcon style={style}/>
    case 'py':
      return <PythonIcon style={style}/>
    case 'kt':
      return <KotlinIcon style={style}/>
    case 'java':
      return <JavaIcon style={style}/>
    default:
      return <DefaultIcon style={style}/>
  }
}

const style = {
  height: '15px',
  width: '15px'
}
