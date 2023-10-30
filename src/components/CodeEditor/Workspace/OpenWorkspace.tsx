import {Button} from "@mui/material";
import {commonColors} from "../../../theme/colors";
import {AriaAttributes, DOMAttributes, useRef} from "react";
import {useAppDispatch} from "../../../store/hooks";
import readManyFiles from "../../../store/thunks/readFiles/readFiles";

const OpenWorkspace = () => {
  const directoryInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const onClick = () => {
    directoryInputRef.current?.click()
  }

  const onFilesUpload = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList
      await dispatch(readManyFiles(files))
    } catch (e) {
      console.log(e)
    }
  }

  // This works (only logging file list) before using async thunk
  /*const onFilesUpload = () => {
    console.log('test') // v
    const files = directoryInputRef.current?.files as FileList // v hasil1
    console.log(files)
  }*/

  return (
      <div>
        <Button sx={{color: commonColors.white }} onClick={onClick}>Open Workspace</Button>
        <input
            type="file"
            style={{ display: 'none' }}
            directory=''
            webkitdirectory=''
            ref={directoryInputRef}
            onChange={onFilesUpload}
        />
      </div>
  )
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string
    webkitdirectory?: string
  }
}

export default OpenWorkspace

/*
hasil1
FileList {0: File, 1: File, length: 2}
0: File
lastModified: 1537715493920
lastModifiedDate: Sun Sep 23 2018 22:11:33 GMT+0700 (Western Indonesia Time) {}
name: "FormBorderLayout.form"
size: 1143
type: ""
webkitRelativePath: "views/FormBorderLayout.form"
[[Prototype]]: File
1: File
lastModified: 1537715493804
lastModifiedDate: Sun Sep 23 2018 22:11:33 GMT+0700 (Western Indonesia Time) {}
name: "FormBorderLayout.java"
size: 1080
type: ""
webkitRelativePath: "views/FormBorderLayout.java"
[[Prototype]]: File
length: 2


 */
