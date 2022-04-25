import React from 'react'
import tw from 'twin.macro'
import { Nav, NavGroup, NavLink } from '../../styles/NavStyles'
import { HeadingFour } from '../../styles/TextStyles'
import { Wrap } from '../../styles/WrapStyles'
import Container from '../Container'

const Navigation = () => {
  const Items = [
    { title: 'Home', href: '/' },
    { title: 'Skill', href: '#skill' },
    { title: 'Project', href: '#project' },
    { title: 'Contact', href: '#contact' },
  ]

  return (
    <Wrap>
      <Nav>
        <Container>
          <NavGroup>
            {Items.map((item, idx) => (
              <HeadingFour key={idx}>
                <NavLink>
                  <a href={item.href}>{item.title}</a>
                </NavLink>
              </HeadingFour>
            ))}
          </NavGroup>
        </Container>
      </Nav>
    </Wrap>
  )
}

export default Navigation
