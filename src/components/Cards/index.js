import React from 'react'
import { CardsContent } from '../../styles/CardsStyles'

const Cards = ({ color, children }) => {
  return <CardsContent color={color}>{children}</CardsContent>
}

export default Cards
