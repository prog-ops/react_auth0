import UserFile from "../../../types/UserFile";

interface Props {
  activeFile: UserFile
  editorActiveFile: string | null
}

export const CustomTabPanel = (props: Props) => {
  const { activeFile: { id: activeFileId}, editorActiveFile } = props
  return(
      <div style={{height: '100%'}} role='tabpanel' hidden={editorActiveFile !== activeFileId}>
        Monaco Code Editor
      </div>
  )
}
