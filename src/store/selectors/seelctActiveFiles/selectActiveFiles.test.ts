import {RootState} from "../../store";
import selectActiveFiles from "./selectActiveFiles";

test('should return only active files', () => { // passed
  const userFiles = [
    { id: '1', name: 'index1.js', relativePath: 'test/index1.js', code: 'console.log("Hi world")', extension: 'js' },
    { id: '2', name: 'index2.js', relativePath: 'test/index2.js', code: 'console.log("Hi world")', extension: 'js' },
    { id: '3', name: 'index3.js', relativePath: 'test/index3.js', code: 'console.log("Hi world")', extension: 'js' },
    {}, // coba aja, ga pengaruh
    {},
  ]
  const activeFiles = ['1', '3']
  const state = {
    files: {
      userFiles,
      activeFiles
    }
  } as RootState
  const expectedResults = [
    { id: '1', name: 'index1.js', relativePath: 'test/index1.js', code: 'console.log("Hi world")', extension: 'js' },
    { id: '3', name: 'index3.js', relativePath: 'test/index3.js', code: 'console.log("Hi world")', extension: 'js' },
  ]
  expect(selectActiveFiles(state)).toEqual(expectedResults)
})

test('should return only active files (harus error)', () => { // test error bisa
  const userFiles = [ // actual
    { id: '1', name: 'index1.js', relativePath: 'test/index1.js', code: 'console.log("Hi wold")', extension: 'js' }, //! wold
    { id: '2', name: 'index2.js', relativePath: 'test/index2.js', code: 'console.log("Hi world")', extension: 'js' },
    { id: '3', name: 'index3.js', relativePath: 'test/index3.js', code: 'console.log("Hi world")', extension: 'js' }, //! world
    {},
    {},
  ]
  const activeFiles = ['1', '3']
  const state = {
    files: {
      userFiles,
      activeFiles
    }
  } as RootState
  const expectedResults = [ // expected
    { id: '1', name: 'index1.js', relativePath: 'test/index1.js', code: 'console.log("Hi world")', extension: 'js' }, //! world
    { id: '3', name: 'index3.js', relativePath: 'test/index3.js', code: 'console.log("Hi word")', extension: 'js' }, //! word
  ]
  expect(selectActiveFiles(state)).toEqual(expectedResults)
})
/* ! test error bisa
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 2
+ Received  + 2

@@ -1,15 +1,15 @@
  Array [
    Object {
-     "code": "console.log(\"Hi world\")",
+     "code": "console.log(\"Hi wold\")",
      "extension": "js",
      "id": "1",
      "name": "index1.js",
      "relativePath": "test/index1.js",
    },
    Object {
-     "code": "console.log(\"Hi word\")",
+     "code": "console.log(\"Hi world\")",
      "extension": "js",
      "id": "3",
      "name": "index3.js",
      "relativePath": "test/index3.js",
    },

    Difference:
    expected: word world
    actual: wold world
 */
