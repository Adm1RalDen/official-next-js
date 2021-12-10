/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-react-svg" />

declare module '*.svg' {
  const content: any // eslint-disable-line
  export default content
}
