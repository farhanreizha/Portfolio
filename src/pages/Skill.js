import React from 'react'
import { FaCode } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { Cards, Container } from '../components'
import { HeadingOne, HeadingTwo, HeadingFive, HeadingThree } from '../styles/TextStyles'
import { Wrap, WrapAbout, WrapCards } from '../styles/WrapStyles'
import { IconStyle } from '../styles/IconsStyle'
import { CardsStyles } from '../styles/CardsStyles'
import ProgLang from './ProgLang'

const Skill = () => {
  const Items = [
    { icon: <FaCode />, title: 'FRONTEND DEVELOPER', color: 'primary' },
    { icon: <MdOutlineDesignServices />, title: 'UI & UX DESIGNING', color: 'secondary' },
    { icon: <FaCode />, title: 'BACKEND DEVELOPER', color: 'primary' },
  ]
  return (
    <Wrap id='skill'>
      <Container>
        <WrapAbout>
          <HeadingThree>Coding Skill I have:</HeadingThree>
          <div>
            <HeadingOne>1+</HeadingOne>
            <HeadingFive>
              Year of experience. Specialised in web developher, while ensuring a seamless web
              experiance for end users.
            </HeadingFive>
          </div>
          <WrapCards>
            {Items.map((item, i) => (
              <Cards key={i} color={item.color}>
                <CardsStyles>
                  <IconStyle>{item.icon}</IconStyle>
                  <HeadingTwo>{item.title}</HeadingTwo>
                </CardsStyles>
              </Cards>
            ))}
            <ProgLang />
          </WrapCards>
        </WrapAbout>
      </Container>
    </Wrap>
  )
}

export default Skill
