export default interface CustomFile extends File {
  webkitRelativePath: string // or
  // webkitRelativePath?: string // orig, error
}

/*
! webkitRelativePath?: string
Interface 'CustomFile' incorrectly extends interface 'File'.
  Types of property 'webkitRelativePath' are incompatible.
    Type 'string | undefined' is not assignable to type 'string'.
      Type 'undefined' is not assignable to type 'string'.
 */
