/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import Layout from '../layout/Layout'
import {ToastContainer} from "react-toastify"
import ForgetPass from "../components/LoginForm/ForgetPass"
import Head from 'next/head'
import { useRouter } from 'next/router'

const Forgetpassword = () => {
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

export default Forgetpassword