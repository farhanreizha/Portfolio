import tw, { styled } from 'twin.macro'

export const CardsContent = styled.div(({ color }) => [
  tw`rounded-lg
  `,
  color === 'primary' && tw`bg-[#003545]`,
  color === 'secondary' && tw`bg-[#3C6562]`,
])

export const CardsStyles = tw.div`
flex flex-col mx-8 gap-y-5 pt-36 pb-10
[> div]:(flex flex-col gap-y-7)
`

export const CardsSkill = tw.div`
flex mx-10 py-5 gap-3 items-center flex-wrap
[> div]:(justify-center)
`

export const CardsProject = tw.div`
flex flex-col gap-5 items-center pb-8
[> div]:(flex flex-col max-w-[23rem] px-5)
`
