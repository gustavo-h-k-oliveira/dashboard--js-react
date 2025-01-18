import Header from "../components/Header"
import Navbar from "../components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='grid-dashboard'>
        <div className='vertical-container'></div>
        <div className='block block1'></div>
        <div className='block block2'></div>
        <div className='block block3'></div>
        <div className='block block4'></div>
      </div>
    </>
  )
}

export default App
