// assets
import { Profile } from '../../assets'

// Styles
import Container from '../Container'
import { Images } from '../../styles/ImagesStyles'
import { ColOne, ColTwo } from '../../styles/ColumnStyle'
import { HeadingThree, HeadingFive } from '../../styles/TextStyles'
import { Wrap } from '../../styles/WrapStyles'

const Hero = () => {
  return (
    <Wrap id='home'>
      <Container>
        <ColOne>
          <HeadingThree color={true}>
            Hello!, I'm<span>Farhan Reizha Fauzan</span>
          </HeadingThree>
          <HeadingFive>
            Frontend developer. I create website interface with reactjs, and I have honed my skill
            in web developer and intermediate i have core understanding of intermediate reactjs
            prinsiples. Here are the major i have.
          </HeadingFive>
        </ColOne>
        <ColTwo>
          <Images src={Profile} alt='Profile' />
        </ColTwo>
      </Container>
      <hr />
    </Wrap>
  )
}

export default Hero
