import UserFile from "../../types/UserFile";
import {createSlice} from "@reduxjs/toolkit";

export interface FileState {
  userFiles: UserFile[]
  activeFiles: string[]
  editorActiveFile: string | null
}

export const initialState: FileState = {
  userFiles: [],
  activeFiles: [],
  editorActiveFile: null
}

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {}
})

const filesReducer = fileSlice.reducer
export default filesReducer
