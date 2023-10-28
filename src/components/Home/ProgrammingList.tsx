import { ReactComponent as JavascriptIcon } from "../../assets/images/JavaScript.svg";
import { ReactComponent as PythonIcon } from "../../assets/images/Python.svg";
import { ReactComponent as KotlinIcon } from "../../assets/images/Kotlin.svg";

export default function ProgrammingList(){
  return(
      <div>
        <KotlinIcon style={styles.icon} />
        <JavascriptIcon style={styles.icon} />
        <PythonIcon style={styles.icon} />
      </div>
  )
}

const styles = {
  icon: { padding: '10px', height: '50px', width: '50px' }
}
