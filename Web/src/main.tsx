import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Home'
import { NewCostumer } from './components/pages/NewCostumer';
import { Transfer } from './components/pages/Transfer';
import { Balance } from './components/pages/Balance';
import { Deposit } from './components/pages/Deposit';
import { MakePix } from './components/pages/MakePix';
import { Withdraw } from './components/pages/Withdraw';
import { PageNotFound } from './utils/PageNotFound';
import { CompletedAction } from './utils/Completed';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newcostumer' element={<NewCostumer/>}/>
        <Route path='/transfer' element={<Transfer/>}/>
        <Route path="/balance" element={<Balance/>}/>
        <Route path="/deposit" element={<Deposit/>}/>
        <Route path="/withdraw" element={<Withdraw/>}/>
        <Route path="/makepix" element={<MakePix/>}/>
        <Route path="/completed" element={<CompletedAction/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
