import UserFile from "../../../types/UserFile";
import {CustomMonacoEditor} from "./CustomMonacoEditor";

interface Props {
  activeFile: UserFile
  editorActiveFile: string | null
}

export const CustomTabPanel = (props: Props) => {
  // const { activeFile: { id: activeFileId}, editorActiveFile } = props
  const { activeFile, editorActiveFile } = props
  const { id: activeFileId } = activeFile
  return(
      <div style={{height: '100%'}} role='tabpanel' hidden={editorActiveFile !== activeFileId}>
        {/*Monaco Code Editor*/}
        <CustomMonacoEditor activeFile={activeFile}/>
      </div>
  )
}
