import {Button} from "@mui/material";
import {commonColors} from "../../../theme/colors";
import {AriaAttributes, DOMAttributes, useRef} from "react";

const OpenWorkspace = () => {
  const directoryInputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    directoryInputRef.current?.click()
  }

  const onFilesUpload = () => {
    console.log('test')
  }

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
