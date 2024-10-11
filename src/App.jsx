import Footer from "./components/Footer"
import Header from "./components/Header"
import Homepage from "./components/Homepage"


function App() {

  return (
    <div className="flex flex-col">
      <section className="flex flex-col min-h-screen container mx-auto w-full max-w-[1000px] h-auto">
        <Header />
        <Homepage />
      </section>
      <Footer />
    </div>
  )
}

export default App
