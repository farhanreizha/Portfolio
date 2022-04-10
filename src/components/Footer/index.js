import React from 'react'
import { Wrap, WrapFooter } from '../../styles/WrapStyles'
import Container from '../Container/index'
import { Paragraph } from '../../styles/TextStyles'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <Wrap>
      <Container>
        <WrapFooter>
          <div>
            <Paragraph>@2022 Farhan Reizha Fauzan</Paragraph>
            <Paragraph>Frontend Developer</Paragraph>
            <Paragraph>Ui Designer</Paragraph>
            <Paragraph>Backend Developer</Paragraph>
            <Paragraph>Design by @farhanreizha</Paragraph>
          </div>
          <span>
            <FaGithub />
            <FaInstagram />
            <FaFacebook />
          </span>
        </WrapFooter>
      </Container>
    </Wrap>
  )
}

export default Footer
