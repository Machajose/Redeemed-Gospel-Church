import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ServiceTimes from './components/ServiceTimes.jsx'
import PastorMessage from './components/PastorMessage.jsx'
import Ministries from './components/Ministries.jsx'
import Events from './components/Events.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceTimes />
        <PastorMessage />
        <Ministries />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
