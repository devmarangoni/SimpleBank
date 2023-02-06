import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Home'
import { Teste } from './components/Teste';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teste' element={<Teste/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
