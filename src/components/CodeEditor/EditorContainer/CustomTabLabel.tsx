import UserFile from "../../../types/UserFile";
import {createTheme} from "@mui/material";
import {ExtensionIcon} from "../ExtensionIcon/ExtensionIcon";
import {Close} from "@mui/icons-material";
import { MouseEvent } from 'react'
import {useAppDispatch} from "../../../store/hooks";
import {closeFile} from "../../../store/thunks/closeFile/closeFile";

interface Props {
  activeFile: UserFile
}

export const CustomTabLabel = (props: Props) => {
  const dispatch = useAppDispatch()
  const  { activeFile: { id: fileId, name: fileName, extension } } = props
  const onClose = (event: MouseEvent) => {
    event.stopPropagation()
    dispatch(closeFile(fileId))
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

type Position = 'static' | 'relative' | 'absolute' | 'fixed';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

const theme = createTheme()
const style = {
  root: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    textTransform: 'none' as TextTransform
  },
  fileName: {
    padding: '0px 5px',
    color: theme.font
  },
  closeIcon: {
    position: 'absolute' as Position,
    right: 0,
    color: theme.font
  }
}
