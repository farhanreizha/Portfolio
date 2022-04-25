import tw, { styled } from 'twin.macro'

export const HeadingOne = styled.h1(({ color }) => [
  tw`
flex text-4xl md:text-6xl gap-x-4 lg:gap-x-10 font-bold text-[#F4EAE6]
`,
  color === true && tw`text-[#E57F84]`,
])

export const HeadingTwo = styled.h2(({ color }) => [
  tw`text-2xl lg:text-3xl flex flex-col gap-y-2 font-semibold
  [> span]:(text-[#F4EAE6] text-xl font-medium)
  [> div]:(flex gap-x-5)
  `,
  color === true && tw`text-[#E57F84]`,
])

export const HeadingThree = styled.h3(({ color }) => [
  tw`text-xl flex flex-col gap-y-2 font-semibold text-[#F4EAE6]
lg:text-2xl
[> span]:(text-[#F4EAE6] text-2xl md:text-4xl)
`,
  color === true && tw`text-[#E57F84]`,
])

export const HeadingFour = tw.h4`md:text-lg lg:text-xl  text-[#F4EAE6]`

export const HeadingFive = tw.h5`md:text-lg text-[#F4EAE6]`

export const HeadingSix = tw.h6`text-base  text-[#F4EAE6]`

export const Paragraph = tw.p`text-sm lg:text-base font-normal text-[#F4EAE6]`
