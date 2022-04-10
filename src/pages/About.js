import React from 'react'
import { FaCode } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { Cards, Container } from '../components'
import { HeadingOne, HeadingSix, HeadingTwo, HeadingFive } from '../styles/TextStyles'
import { Wrap, WrapAbout, WrapCards } from '../styles/WrapStyles'
import { IconStyle } from '../styles/IconsStyle'
import { CardsStyles } from '../styles/CardsStyles'

const About = () => {
  const Items = [
    { icon: <FaCode />, title: 'FRONTEND DEVELOPER', color: 'primary' },
    { icon: <MdOutlineDesignServices />, title: 'UI & UX DESIGNING', color: 'secondary' },
    { icon: <FaCode />, title: 'BACKEND DEVELOPER', color: 'primary' },
  ]
  return (
    <Wrap id='about'>
      <Container>
        <WrapAbout>
          <HeadingTwo>About Me:</HeadingTwo>
          <HeadingSix>
            Hi, my name Farhan Reizha Fauzan, i am a frontend web developer. I have honed my skill
            in web developer and intermediate i have core understanding of intermediate reactjs
            prinsiples. Here are the major i have.
          </HeadingSix>
          <div>
            <HeadingOne>1+</HeadingOne>
            <HeadingFive>
              Year of experience. Specialised in web developher, while ensuring a seamless web
              experiance for end users.
            </HeadingFive>
          </div>
          <WrapCards>
            {Items.map((item, idx) => (
              <Cards key={idx} color={item.color}>
                <CardsStyles>
                  <IconStyle>{item.icon}</IconStyle>
                  <HeadingTwo>{item.title}</HeadingTwo>
                </CardsStyles>
              </Cards>
            ))}
          </WrapCards>
        </WrapAbout>
      </Container>
    </Wrap>
  )
}

export default About
