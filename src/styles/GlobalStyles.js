import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
body {
  -webkit-tap-highlight-color: ${theme`colors.purple.500`};
  ${tw`antialiased bg-[#2F5061]`}
}
`

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}

export default GlobalStyles
