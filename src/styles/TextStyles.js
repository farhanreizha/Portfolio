import tw, { styled } from 'twin.macro'

export const HeadingOne = tw.h1`
flex text-4xl md:text-6xl gap-x-4 lg:gap-x-10 font-bold text-[#ED6363]
`

export const HeadingTwo = styled.h2(({ color }) => [
  tw`text-2xl lg:text-3xl flex flex-col gap-y-2 font-semibold
  [> span]:(text-white text-xl font-medium)
  [> div]:(flex gap-x-5)
  `,
  color === true && tw`text-[#ED6363]`,
])

export const HeadingThree = styled.h3(({ color }) => [
  tw`text-xl flex flex-col gap-y-2 font-semibold
lg:text-2xl
[> span]:(text-white text-2xl md:text-4xl)
`,
  color === true && tw`text-[#ED6363]`,
])

export const HeadingFour = tw.h4`text-xl`

export const HeadingFive = tw.h5`md:text-lg`

export const HeadingSix = tw.h6`text-base`

export const Paragraph = tw.p`text-sm lg:text-base font-normal`
