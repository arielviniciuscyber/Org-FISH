import Header from './components/Header'
import Hero from './components/Hero'
import Social from './components/Social'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import Particles from './components/Particles'

export default function App() {
  return (
    <>
      <Particles />
      <Header />
      <main>
        <Hero />
        <Social />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
