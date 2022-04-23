import tw, { styled, css } from 'twin.macro'

const ButtonVariants = {
  primary: tw`bg-[#E57F84]`,
  secondary: tw`text-[#2F5061]  hover:scale-110 transition duration-300 ease-in-out`,
  bgsecondary: tw`bg-[#2F5061] hover:scale-110 transition duration-300 ease-in-out`,
}

export const ButtonLayout = tw.div`
flex gap-x-4 
lg:mt-8 lg:gap-x-8`

export const Button = styled.button(({ variant, outline }) => [
  tw`flex items-center font-bold gap-3 py-2 px-6 rounded-lg`,
  variant === 'primary' && tw`bg-[#4297A0] transition duration-300 ease-in-out hover:scale-110`,
  outline === true && [
    css`
      border: solid 2px;
      color: ${ButtonVariants[variant]};
    `,
  ],
  outline === false && [
    css`
      background-color: ${ButtonVariants[variant]};
      color: #f4eae6;
    `,
  ],
])

// export const Button = css(({variant, outline})=>[
// ${tw`
// border
// `}
// ])
