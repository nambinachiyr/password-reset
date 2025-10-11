
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobelProvider } from './GlobelContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobelProvider>
    <App />
  </GlobelProvider>,
)
