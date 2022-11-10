import React from 'react'
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import ForgetPass from "../components/LoginForm/ForgetPass"

const forgetpassword = () => {
  return (
    <>
        <Layout>
          <ForgetPass />
          <ToastContainer />
        </Layout>
    </>
  )
}

export default forgetpassword