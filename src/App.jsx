import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes'
import { RoleProvider } from './shared/contexts/RoleContext/RoleContext'


function App() {

  return (
    <RoleProvider>
      <AppRoutes/>
    </RoleProvider>
  )
}

export default App
