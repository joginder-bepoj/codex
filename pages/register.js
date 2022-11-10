import React from 'react'
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import RegisterComponent from '../components/LoginForm/Register'

const register = () => {
  return (
    <>
        <Layout>
          <RegisterComponent />
          <ToastContainer />
        </Layout>
    </>
  )
}

export default register