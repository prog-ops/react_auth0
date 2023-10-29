import filesReducer, {
  addActiveFile,
  initialState,
  removeActiveFile,
  setEditorActiveFile,
  setFiles,
  updateFileCode
} from "./reducer";
import {PayloadAction} from "@reduxjs/toolkit";
import {inflate} from "zlib";

describe('files reducer', () => {
  test('should return initial state if no known action is provided', () => { // passed
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState)
  })

  test('should set user files when action is setFiles', () => { // passed
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        relativePath: 'test/index.js',
        code: 'console.log("hi world")',
        extension: '.js'
      }
    ]
    const expectedState = {
      ...initialState,
      activeFiles: [],
      userFiles,
    }
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState)
  })

  test('should remove a file id when action is addActiveFile', () => { // passed
    const fileId = '1'
    const expectedState = {
      ...initialState,
      activeFiles: [fileId]
    }
    expect(filesReducer(initialState, addActiveFile(fileId))).toEqual(expectedState)
  })

  test('should remove a file id when action is removeActiveFile', () => { // passed
    const fileId = '1'
    const modifiedInitialState = {
      ...initialState,
      activeFiles: [fileId]
    }
    const expectedState = {
      ...initialState,
      activeFiles: []
    }
    expect(filesReducer(modifiedInitialState, removeActiveFile(fileId))).toEqual(expectedState)
  })

  test('should update the code of a file when action is updateFileCode', () => { // passed
    const payload = {
      fileId: '1',
      newCode: 'print("Hi world")',
    }
    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("Hi world")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js'
        }
      ],
    }
    const expectedState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'print("Hi world")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js'
        }
      ],
    }
    expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState)
  })

  test('should NOT update the state when updateFileCode reducer doesnt find a file', () => { // passed
    const payload = {
      fileId: '2',
      newCode: 'print("Hi world")',
    }
    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("Hi world")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js'
        }
      ],
    }
    const expectedState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("Hi world")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js'
        }
      ],
    }
    expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState)
  })

  test('should NOT update the state when updateFileCode reducer doesnt find a file (2)', () => { // passed
    const payload = {
      fileId: '2',
      newCode: 'print("Hi world")',
    }
    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("Hi world")',
          name: 'index.js',
          relativePath: 'test/index.js',
          extension: 'js'
        }
      ],
    }
    const expectedState = modifiedInitialState
    expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState)
  })

  test("should set the editor's active file when action is setEditorActiveFile", () => { // passed
    const fileId = '1'
    const expectedState = {
      ...initialState,
      editorActiveFile: fileId
    }
    expect(filesReducer(initialState, setEditorActiveFile(fileId))).toEqual(expectedState)
  })


})

/*
note:
test/index.js diganti jadi tesssss/index.js tetep bisa passed
 */
