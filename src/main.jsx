import { StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './store/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <Suspense fallback={<div>....Loading</div>}>
        <App />
      </Suspense>
    </DataProvider>
  </StrictMode>,
)
