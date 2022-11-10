import React from 'react'
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import RegisterComponent from '../components/LoginForm/Register'
import Head from 'next/head'

const register = () => {
  return (
    <>
        <Head>
            <title>User Register</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <RegisterComponent />
          <ToastContainer />
        </Layout>
    </>
  )
}

export default register