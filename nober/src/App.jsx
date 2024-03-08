import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Home from './home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Members from './members/Members'
import Contribution from './contributions/Contribution'
import ActiveContributions from './contributions/ActiveContributions'
import AddContribution from './contributions/AddContribution'
import ContributionList from './contributions/ContributionList'
import Register from './auth/Register'
import Login from './auth/Login'
import EditMembers from './members/EditMembers'
import Pag from './members/Pag';
import SubmitDetails from './mpesa/SubmitDetails';
import Landing from './others/Landing';
import Donations from './donations/Donations';
import Accounting from './accounting/Accounting';

const App = () => {


  return (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/members' element={<Members />} />
          <Route path='/contributions' element={<Contribution />} />
          <Route path='/a' element={<ActiveContributions />} />
          <Route path='/addcontribution/:ContId' element={<AddContribution />} />
          <Route path='/addcontribution/:ContId/contributionlist/:ContId' element={<ContributionList />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/members/:Id' element={<EditMembers />} />
          <Route path='/pag' element={<Pag />} />
          <Route path='/mpesa/:ContId' element={<SubmitDetails />} />
          <Route path='/about' element={<Landing />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/accounting' element={<Accounting />} />

        </Routes>

      </div>
    </Router>
  )
}

export default App
