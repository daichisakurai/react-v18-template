import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Top from './pages/Top'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Top />} />
        </Routes>
      </Router>
    </>
  )
}

const container = document.getElementById('app')
const app = createRoot(container)
app.render(<App />)
