/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import RegisterComponent from '../components/LoginForm/Register'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Register = () => {
  const router = useRouter()
  let user;
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      user = userInfo;
    }
  }, []);

  useEffect(()=>{
      if(user){
          router.push("/")
      }
  },[])
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

export default Register