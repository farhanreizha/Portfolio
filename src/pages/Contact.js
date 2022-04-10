import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { Container } from '../components'
import { Button } from '../styles/ButtonStyles'
import { Input, InputMessage } from '../styles/InputSyles'
import { HeadingThree, HeadingTwo } from '../styles/TextStyles'
import { Wrap, WrapInput } from '../styles/WrapStyles'

const Contact = () => {
  return (
    <Wrap id='contact'>
      <Container>
        <HeadingTwo color={true}>
          Contact with me: <span>interested in me? Please contact me</span>
          <div>
            <FaGithub /> <FaInstagram /> <FaFacebook />
          </div>
        </HeadingTwo>
        <WrapInput>
          <HeadingThree>Contact me, let's make magic together</HeadingThree>{' '}
          <Input type='text' placeholder='Name :' />
          <Input type='text' placeholder='Email :' />
          <InputMessage type='text' placeholder='Message :' />
          <div>
            <Button variant='bgsecondary' outline={false}>
              Send
            </Button>
          </div>
        </WrapInput>
      </Container>
    </Wrap>
  )
}

export default Contact
