import React from 'react'
import { Cards, Container } from '../components'
import { Wrap, WrapCards, WrapProject } from '../styles/WrapStyles'
import { HeadingFive, HeadingTwo, Paragraph } from '../styles/TextStyles'
import { CardsProject } from '../styles/CardsStyles'
import { Button, ButtonLayout } from '../styles/ButtonStyles'
import { Ecommerce, Tournyaka } from '../assets'
import { ImagesProject } from '../styles/ImagesStyles'

const Project = () => {
  const Item = [
    {
      image: Tournyaka,
      title: 'Tournyaka',
      desc: 'Tournyaka is a website for tour guide in pangandaran, this web still develop',
      color: 'secondary',
    },
    {
      image: Ecommerce,
      title: 'Ecommerce',
      desc: 'Ecommerce any brand and store to shoping online, this web still develop',
      color: 'secondary',
    },
  ]
  return (
    <Wrap id='project'>
      <Container>
        <WrapProject>
          <HeadingTwo>The project I created:</HeadingTwo>
          <WrapCards>
            {Item.map((item, idx) => (
              <Cards key={idx} color={item.color}>
                <CardsProject>
                  <ImagesProject src={item.image} alt={item.title} />
                  <div>
                    <HeadingFive>{item.title}</HeadingFive>
                    <Paragraph>{item.desc}</Paragraph>
                  </div>
                  <div>
                    <ButtonLayout>
                      <Button variant='bgsecondary' outline={false}>
                        View Live
                      </Button>
                      <Button variant='secondary' outline={true}>
                        Github Repo
                      </Button>
                    </ButtonLayout>
                  </div>
                </CardsProject>
              </Cards>
            ))}
          </WrapCards>
        </WrapProject>
      </Container>
    </Wrap>
  )
}

export default Project