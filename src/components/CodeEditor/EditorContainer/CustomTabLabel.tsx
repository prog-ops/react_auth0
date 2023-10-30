import UserFile from "../../../types/UserFile";
import {createTheme} from "@mui/material";
import {ExtensionIcon} from "../ExtensionIcon/ExtensionIcon";
import {Close} from "@mui/icons-material";
import { MouseEvent } from 'react'

interface Props {
  activeFile: UserFile
}

export const CustomTabLabel = (props: Props) => {
  const  { activeFile: { id, name: fileName, extension } } = props
  const onClose = (event: MouseEvent) => {
    event.stopPropagation()
  }

  return (
      <div style={style.root}>
        <ExtensionIcon extension={extension}/>
        <div style={style.fileName}>{fileName}</div>
        <div style={style.closeIcon} onClick={onClose} >
          <Close />
        </div>
      </div>
  )
}

const theme = createTheme()
const style = {
  root: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    // textTransform: 'none'
  },
  fileName: {
    padding: '0px 5px',
    color: theme.font
  },
  closeIcon: {
    // position: 'absolute',
    right: 0,
    color: theme.font
  }
}
