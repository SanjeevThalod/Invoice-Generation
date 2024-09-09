import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateContext from './Context/stateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StateContext>
    <App />
  </StateContext>
  ,
)
