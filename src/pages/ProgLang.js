/** @jsxImportSource @emotion/react */
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si'
import { Cards } from '../components'
import { CardsSkill } from '../styles/CardsStyles'
import { IconStyle } from '../styles/IconsStyle'
import { HeadingSix, HeadingThree } from '../styles/TextStyles'
import { WrapCards, WrapSkill } from '../styles/WrapStyles'

const ProgLang = () => {
  const Items = [
    { icon: <FaHtml5 />, title: 'HTML', subtitle: 'Intermediate', color: 'primary' },
    { icon: <FaCss3Alt />, title: 'CSS', subtitle: 'Intermediate', color: 'secondary' },
    { icon: <SiJavascript />, title: 'Javascript', subtitle: 'Beginner', color: 'primary' },
    { icon: <SiReact />, title: 'Reactjs', subtitle: 'Beginner', color: 'secondary' },
    { icon: <SiNodedotjs />, title: 'Nodejs', subtitle: 'Beginner', color: 'primary' },
    { icon: <SiExpress />, title: 'Expressjs', subtitle: 'Beginner', color: 'secondary' },
    { icon: <SiNextdotjs />, title: 'Nextjs', subtitle: 'Beginner', color: 'primary' },
    { icon: <SiPython />, title: 'Python', subtitle: 'Beginner', color: 'secondary' },
  ]
  return (
    <WrapSkill>
      <WrapCards>
        {Items.map((item, idx) => (
          <Cards key={idx} color={item.color}>
            <CardsSkill>
              <IconStyle>{item.icon}</IconStyle>
              <wrap>
                <HeadingThree>{item.title}</HeadingThree>
                <HeadingSix>{item.subtitle}</HeadingSix>
              </wrap>
            </CardsSkill>
          </Cards>
        ))}
      </WrapCards>
    </WrapSkill>
  )
}

export default ProgLang
