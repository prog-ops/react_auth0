import {createTheme} from "@mui/material";
import {FileViewer} from "../../components/CodeEditor/FileViewer/FileViewer";
import {EditorContainer} from "../../components/CodeEditor/EditorContainer/EditorContainer";

export const CodeEditor = () => {
  return(
      <div style={style.root}>
        <div style={style.fileViewer}>
          <FileViewer/>
        </div>
        <div style={style.codeEditorContainer}>
          <EditorContainer/>
        </div>
      </div>
  )
}

const theme = createTheme()
const style = {
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  fileViewer: {
    display: "flex",
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px dashed black',
    maxWidth: "300рх",
    overflow: 'auto'
  },
  codeEditorContainer: {
    flex: 3,
    height: '100%'
  }
}
