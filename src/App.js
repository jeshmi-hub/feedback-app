import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeebackList from "./components/FeebackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


function App() {
  return (
    <FeedbackProvider>
    <BrowserRouter>
    <Header/>
    <div className='container'>
      <Routes>
       <Route path='/' element = {
        <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeebackList/> 
        </> 
       }>
        </Route>
        </Routes>
        
        <Routes>
            <Route path='/about' element={<AboutPage />} />
        </Routes>

        

        <AboutIconLink/>
    </div>
    </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App
