import {Dispatch} from "redux";
import {RootState} from "../../store";
import {removeActiveFile, setEditorActiveFile} from "../../reducers/files/reducer";

const getNewActiveFileId = (activeFileIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemovedIndex = activeFileIds.indexOf(fileId)
  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFileIds[fileToBeRemovedIndex - 1]
  }
  return activeFileIds[fileToBeRemovedIndex + 1]
}

export const closeFile = (fileId: string) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState()
  const {activeFiles, editorActiveFile} = state.files
  const activeFilesLength = activeFiles.length
  if (activeFilesLength >= 2) {
    const newActiveFileId = getNewActiveFileId(activeFiles, activeFilesLength, fileId)
    if (editorActiveFile === fileId || editorActiveFile === newActiveFileId) {
      dispatch(setEditorActiveFile(newActiveFileId))
    }
  } else {
    dispatch(setEditorActiveFile(null))
  }
  dispatch(removeActiveFile(fileId))
}
