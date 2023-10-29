import SignOut from "../../../auth/SignOut";
import OpenWorkspace from "../../CodeEditor/Workspace/OpenWorkspace";

const AuthenticatedButton = () => {
  return (
      <div style={{ display: 'flex' }}>
        <OpenWorkspace />
        <SignOut/>
      </div>
  )
}
export default AuthenticatedButton
