import {useAppSelector} from "../../../store/hooks";
import selectActiveFiles from "../../../store/selectors/selectActiveFiles/selectActiveFiles";
import {ChangeEvent} from "react";
import {AppBar, Tab, Tabs} from "@mui/material";
import {CustomTabPanel} from "./CustomTabPanel";

export const EditorContainer = () => {
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector(state => state.files.editorActiveFile)
  const activeFilesIds = useAppSelector(state => state.files.activeFiles)

  if (!activeFiles.length) {
    return <div style={{}}>Select a file</div>
  }

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    console.log('foo')
  }

  return (
      <div style={style.root}>
        <AppBar position="static" color='default'>
          <Tabs
              textColor='primary'
              indicatorColor='primary'
              variant="scrollable"
              scrollButtons="auto"
              value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0}
              onChange={onTabClick}
          >
            {activeFiles.map(activeFile => {
              return <Tab key={activeFile.id} label='foo'/>
            })}
          </Tabs>
        </AppBar>

        {activeFiles.map(activeFile => {
          // not @mui/lab/tabpanel
          return <CustomTabPanel
              key={activeFile.id}
              activeFile={activeFile}
              editorActiveFile={editorActiveFile}
          />
        })}
      </div>
  )
}
const style = {
  root: {flex: 1}
}
