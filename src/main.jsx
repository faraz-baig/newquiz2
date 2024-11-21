import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from "./home.jsx"
import AppNov16 from './AppNov16.jsx'
import QuizApp from './quizApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizApp />
  </StrictMode>,
)
