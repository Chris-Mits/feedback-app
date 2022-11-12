import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {FeedbackProvider} from './context/FeedbackContext'
import {Header, FeedbackList, FeedbackStats, FeedbackForm, AboutIconLink} from './components'
import {AboutPage} from './pages'

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route 
              exact 
              path='/' 
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route 
              path='/about' 
              element={
                <AboutPage />
              }
            />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App