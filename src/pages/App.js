import { Footer, Hero, Navigation } from '../components'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import SKill from './SKill'

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <SKill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
