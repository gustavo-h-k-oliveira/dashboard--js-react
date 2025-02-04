import Header from "../components/Header"
import Navbar from "../components/Navbar"

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ marginLeft: '200px', width: '100%' }}>
        <Header />
        <div className='grid-dashboard'>
          <div className='vertical-container'></div>
          <div className='block block1'></div>
          <div className='block block2'></div>
          <div className='block block3'></div>
          <div className='block block4'></div>
        </div>
      </div>
    </div>
  )
}

export default App
