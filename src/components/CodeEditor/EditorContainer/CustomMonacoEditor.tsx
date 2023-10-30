import UserFile from "../../../types/UserFile";
import {useCallback, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import supportedExtension from "../../../constants/supportedExtension";
import {Editor} from "@monaco-editor/react";
import Loading from "../../common/Loading/Loading";
import {debounce} from "lodash";
import {updateFileCode} from "../../../store/reducers/files/reducer";

interface Props {
  activeFile: UserFile
}

export const CustomMonacoEditor = (props: Props) => {
  const {activeFile: {id: fileId, extension, code: originalCode}} = props
  const [code, setCode] = useState(originalCode);
  const darkMode = useAppSelector(state => state.darkMode)
  const language = supportedExtension[extension]
  const dispatch = useAppDispatch()

  const debouncedSave = useCallback(
      debounce((fileId: string, newCode: string) => {
        dispatch(updateFileCode({ fileId, newCode }))
      }, 1_000),
      []
  )

  const onChange = (newCode = '') => {
    setCode(newCode)
    debouncedSave(fileId, newCode)
  }

  return (
      <Editor
          width='100%'
          height="500px" // percentage doesn't work don't know why, check style component lainnya
          language={language}
          theme={darkMode ? "vs-dark" : "light"}
          value={code}
          loading={<Loading/>}
          onChange={onChange}
      />
  )
}
