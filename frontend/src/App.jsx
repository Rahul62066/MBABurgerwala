import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Shipping from './components/Shipping/Shipping'
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder'
import PaymentSuccessful from './components/ConfirmOrder/PaymentSuccessful'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import MyOrders from './components/ConfirmOrder/MyOrders'
import OrderDetails from './components/ConfirmOrder/OrderDetails'
import Dashboard from './components/Admin/Dashboard'
import Users from './components/Admin/Users'
import Orders from './components/Admin/Orders'
import About from './components/About/About'
import NotFound from './components/Layout/NotFound'


const App = () => {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App