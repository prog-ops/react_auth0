import {createTheme} from "@mui/material";
import {useAppSelector} from "../../../store/hooks";
import selectFileViewerData from "../../../store/selectors/selectFileViewerData/selectFileViewerData";
import FileViewerStructure from "../../../types/FileViewerStructure";
import {TreeItem, TreeView} from "@mui/x-tree-view";
import {ExtensionIcon} from "../ExtensionIcon/ExtensionIcon";
import {Folder, FolderOpen} from "@mui/icons-material";

export const FileViewer = () => {
  const fileViewerData = useAppSelector(selectFileViewerData)
  const renderTree = (nodes: FileViewerStructure) => {
    const { id: nodeId, name: nodeName, extension } = nodes
    return (
        <TreeItem
            style={style.treeItem}
            key={nodeId}
            nodeId={nodeId}
            label={nodeName}
            endIcon={<ExtensionIcon extension={extension} />}
        >
          {Array.isArray(nodes.children)
              ? nodes.children.map(node => renderTree(node))
              : null
          }
        </TreeItem>
    )
  }

  if (!Object.keys(fileViewerData).length) {
    return <div style={style.emptyMessage}>No files</div>
  }

  return (
      <TreeView
          style={style.root}
          defaultCollapseIcon={<FolderOpen/>}
          defaultExpandIcon={<Folder/>}
      >
        {renderTree(fileViewerData)}
      </TreeView>
  )
}
const theme = createTheme()
const style = {
  root: {
    padding: '0px 10px 10px',
    height: '100%',
    width: '100%'
  },
  treeItem: {
    padding: '2px',
    color: theme.font
  },
  emptyMessage: {
    color: theme.font
  }
}
