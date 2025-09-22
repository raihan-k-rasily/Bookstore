import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home from "./users/pages/Home";
import AllBooks from "./users/pages/AllBooks";
import ViewBook from "./users/pages/ViewBook";
import Profile from "./users/pages/Profile";
import Careers from "./users/pages/Careers";
import Contact from "./users/pages/Contact";
import Preloader from "./components/Preloader";
import AdminDashboard from "./admin/pages/AdminDashboard"
import ResourceAdmin from "./admin/pages/ResourceAdmin"
import CareerAdmin from "./admin/pages/CareerAdmin"
import SettingAdmin from "./admin/pages/SettingAdmin"
import { useEffect, useState } from 'react';
import Auth from "./pages/Auth"

import Pnf from "./pages/Pnf"




function App() {
  const [loading , setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(false)
    },7000)
  },[])
  
  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Preloader/>:<Home/>}/>
      
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>

      <Route path='/all-books' element={<AllBooks/>}/>
      <Route path='/books/:id/view' element={<ViewBook/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/admin-dashboard' element={loading?<Preloader/>:<AdminDashboard/>}/>
      <Route path='/resource-admin' element={<ResourceAdmin/>}/>
      <Route path='/career-admin' element={<CareerAdmin/>}/>
      <Route path='/setting-admin' element={<SettingAdmin/>}/>

      <Route path='/*' element={<Pnf/>}/>

    </Routes>
    </>
  )
}

export default App
