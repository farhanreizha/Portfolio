import tw from 'twin.macro'

export const Wrap = tw.div`
w-full mt-8 
md:mt-16
lg:mt-40 lg:mb-5
`
export const WrapAbout = tw.div`
flex flex-col gap-y-8
[> div]:(flex md:items-center gap-x-5 font-semibold)
`

export const WrapCards = tw.div`
flex flex-col flex-wrap gap-y-5 justify-center
md:flex-row
`

export const WrapSkill = tw.div`
flex flex-col gap-y-8 w-full
[> div]:(flex md:items-center gap-x-5 font-semibold)
`

export const WrapProject = tw.div`
flex flex-col gap-y-8 pb-10
[> div]:(flex md:items-center gap-x-5)
`

export const WrapInput = tw.div`
flex flex-col gap-y-8
`
export const WrapFooter = tw.div`
flex flex-col gap-y-5 pb-5
[> div]:(flex flex-col lg:flex-row gap-y-5 gap-x-40 justify-center text-[#3C6562])
[> span]:(flex gap-x-5 text-[#ED6363] text-2xl)
`
