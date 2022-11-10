import React from 'react'
import LoginComponent from "../components/LoginForm/Login"
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import Head from 'next/head'

const login = () => {
  return (
    <>
        <Head>
            <title>User Login</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <LoginComponent />
          <ToastContainer />
        </Layout>
    </>
  )
}

export default login