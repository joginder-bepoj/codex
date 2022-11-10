import React from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Advertisement from '../../components/advertisement/Advertisement'
import AboutBanner from '../../components/banners/AboutBanner'
import Blogs from '../../components/blogs/Blogs'
import Layout from '../../layout/Layout'
import blogImg from "../../assets/blog-bnr.png"
import axios from 'axios'
import { blogs } from '../../services/services'


const blog = ({metaTags, blogsData}) => {
  return (
    <>
        <Head>
            <title>Blog</title>
            <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <AboutBanner name={"Blog"} bnrImg={blogImg} />
            <Advertisement />
            <Blogs blogsData={blogsData} />
            <Advertisement />
            <ToastContainer />
        </Layout>
    </>
  )
}

export default blog

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/8`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
  const blogsData = (await blogs()) || []
  return {
    props: {metaTags, blogsData}, // will be passed to the page component as props
  }
}
