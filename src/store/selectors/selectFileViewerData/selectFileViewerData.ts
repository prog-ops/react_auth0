import UserFile from "../../../types/UserFile";
import FileViewerStructure from "../../../types/FileViewerStructure";
import {RootState} from "../../store";
import {createSelector} from "@reduxjs/toolkit";

const selectFileViewerData = (userFiles: UserFile[]): FileViewerStructure => {
  const userFilesLength = userFiles.length
  const result: FileViewerStructure = {} as FileViewerStructure

  for (let i = 0; i < userFilesLength; i++) {
    const uFile = userFiles[i]
    const { name, relativePath, id, extension } = uFile
    const paths = relativePath.split('/')

    let x = 0
    let children
    while (paths[x] !== name) {
      const path = paths[x]
      if (x === 0) {
        if (!result.name) {
          result.id = x.toString()
          result.name = path
          result.children = []
        }
        x++
        continue
      }
      children = result.children!
      const subFolder = children.find(child => child.name === path)
      if (subFolder) {
        children = subFolder.children;
      } else {
        children.push({
          id: x.toString(),
          name: path,
          children: []
        })
        children = children[children.length - 1]
      }
      x++
    }
    const fileData = { id, name, extension }
    if (!children) {
      result.children!.push(fileData)
    } else {
      (children as FileViewerStructure).children!.push(fileData)
    }
  }
  return result
}
export default createSelector((state: RootState) =>
    state.files.userFiles, selectFileViewerData)
