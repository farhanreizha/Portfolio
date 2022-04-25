import tw from 'twin.macro'

export const Nav = tw.nav`text-white w-full flex justify-center fixed top-0 z-50 py-5 bg-[#4297A0] shadow-lg rounded-b-xl`

export const NavGroup = tw.ul`flex gap-x-9 lg:gap-x-12`

export const NavLink = tw.li`
transition duration-100 ease-in-out
lg:hover:text-[#000000] lg:hover:bg-[#E57F84] lg:px-4 lg:py-2 lg:rounded-md
`
