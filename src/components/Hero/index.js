// Icons
import { FaEye, FaUser } from 'react-icons/fa'
// assets
import { BarImg, Buble, Profile } from '../../assets'
// Styles
import { HeadingThree } from '../../styles/TextStyles'
import { Paragraph } from '../../styles/TextStyles'
import { ColOne, ColTwo } from '../../styles/ColumnStyle'
import { Bubles, Images, BarImgs } from '../../styles/ImagesStyles'
import { Button, ButtonLayout } from '../../styles/ButtonStyles'
import { Wrap } from '../../styles/WrapStyles'
import Container from '../Container'

const Hero = () => {
  return (
    <Wrap id='home'>
      <Container>
        <ColOne>
          <HeadingThree color={true}>
            Hello!, I'm<span>Farhan Reizha Fauzan</span>
          </HeadingThree>
          <Paragraph>Frontend developer. I create website interface with reactjs</Paragraph>
          <ButtonLayout>
            <Button variant='primary'>
              About Me <FaUser />
            </Button>
            <Button variant='secondary' outline={true}>
              Project <FaEye />
            </Button>
          </ButtonLayout>
        </ColOne>
        <ColTwo>
          <Images src={Profile} alt='Profile' />
          <Bubles src={Buble} alt='Buble' />
        </ColTwo>
      </Container>
      <BarImgs src={BarImg} alt='Bar' />
    </Wrap>
  )
}

export default Hero
