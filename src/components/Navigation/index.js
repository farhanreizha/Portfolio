import React from 'react'
import { Nav, NavGroup, NavLink } from '../../styles/NavStyles'
import { Wrap } from '../../styles/WrapStyles'
import Container from '../Container'

const Navigation = () => {
  const Items = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
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
                <a href={item.href}>{item.title}</a>
              </NavLink>
            ))}
          </NavGroup>
        </Container>
      </Nav>
    </Wrap>
  )
}

export default Navigation
