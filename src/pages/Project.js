import React from 'react'
import { Cards, Container } from '../components'
import { Wrap, WrapCards, WrapProject } from '../styles/WrapStyles'
import { HeadingFive, HeadingTwo, Paragraph } from '../styles/TextStyles'
import { CardsProject } from '../styles/CardsStyles'
import { Button, ButtonLayout } from '../styles/ButtonStyles'
import { Ecommerce, Tournyaka } from '../assets'
import { ImagesProject } from '../styles/ImagesStyles'
import { Link } from 'react-router-dom'

const Project = () => {
  const Item = [
    {
      image: Tournyaka,
      title: 'Tournyaka',
      desc: 'Tournyaka is a website for tour guide in pangandaran, this web still develop',
      status: 'Masih Progress belum bisa di view :V',
      view: '',
      repo: 'https://github.com/farhanreizha/tournyaka',
      color: 'secondary',
    },
    {
      image: Ecommerce,
      title: 'Ecommerce',
      desc: 'Ecommerce any brand and store to shoping online, this web still develop',
      status: 'Masih Progress belum bisa di view :V',
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
                    <Paragraph>
                      <b>Status:</b> {item.status}
                    </Paragraph>
                  </div>
                  <div>
                    <ButtonLayout>
                      <a href={item.view}>
                        <Button variant='bgsecondary' outline={false}>
                          View Live
                        </Button>
                      </a>
                      <a href={item.repo}>
                        <Button variant='secondary' outline={true}>
                          Github Repo
                        </Button>
                      </a>
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
