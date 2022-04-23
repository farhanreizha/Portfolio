import tw from 'twin.macro'

export const ColOne = tw.div`
flex flex-col gap-y-6 max-w-lg
[> div]:(flex md:items-center gap-x-5 font-semibold)
`

export const ColTwo = tw.div`relative flex left-7 lg:left-0`
