import Header from '../components/Header'
import Propertice from '../components/Propertice'
import For from '../components/For'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/for" element={<For />} />
          <Route path="/propertice" element={<Propertice />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
