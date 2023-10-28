import SignOut from "../../../auth/SignOut";

const AuthenticatedButton = () => {
  return (
      <div style={{ display: 'flex' }}>
        <div>Open Workspace</div>
        <SignOut/>
      </div>
  )
}
export default AuthenticatedButton
