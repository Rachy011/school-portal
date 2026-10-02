import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Announcements from './pages/Announcements'
import CourseManagement from './pages/CourseManagement'
import Dashboard from './pages/Dashboard'
import FeeAndReceipt from './pages/FeeAndReceipt'
import Home from './pages/Home'
import Result from './pages/Result'
import SignIn from './pages/SignIn'
import PortalTemplate from './pages/PortalTemplate'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
          
        <Route element={< PortalTemplate/>}>
          <Route path="announcements" element={<Announcements />} />
          <Route path="courses" element={<CourseManagement />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="fees" element={<FeeAndReceipt />} />
          <Route path="results" element={<Result />} />
        </Route>
      </Routes>
    </>
  )
}

export default App