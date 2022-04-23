import React from 'react'
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
              <NavLink key={idx}>
                <HeadingFour>
                  <a href={item.href}>{item.title}</a>
                </HeadingFour>
              </NavLink>
            ))}
          </NavGroup>
        </Container>
      </Nav>
    </Wrap>
  )
}

export default Navigation
