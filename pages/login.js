import React from 'react'
import LoginComponent from "../components/LoginForm/Login"
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"

const login = () => {
  return (
    <>
    <Layout>
          <LoginComponent />
          <ToastContainer />
        </Layout>
    </>
  )
}

export default login