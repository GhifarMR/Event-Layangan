import Navbar from "./components/Navbar"
import StartPage from "./components/StartPage"
import Footer from "./components/Footer"
import About from "./components/About"
import Gallery from "./components/Gallery"

function App() {

  return (
    <div className="bg-white">
      <Navbar />
      <StartPage />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
