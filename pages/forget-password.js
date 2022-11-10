import React from 'react'
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import ForgetPass from "../components/LoginForm/ForgetPass"
import Head from 'next/head'

const forgetpassword = () => {
  return (
    <>
        <Head>
            <title>Forget Password</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <ForgetPass />
          <ToastContainer />
        </Layout>
    </>
  )
}

export default forgetpassword