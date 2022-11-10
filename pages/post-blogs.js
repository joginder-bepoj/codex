import React from 'react'
import Layout from "../layout/Layout"
import { ToastContainer } from 'react-toastify'
import Advertisement from '../components/advertisement/Advertisement'
import AboutBanner from '../components/banners/AboutBanner'
import blogImg from "../assets/blog-bnr.png"
import AddBlog from '../components/forms/AddBlog'

const PostBlogs = () => {
  return (
    <>
        <Layout>
        <AboutBanner name={"Blog"} bnrImg={blogImg} />
        <AddBlog />
        <Advertisement />
        <ToastContainer />
        </Layout>   
    </>
  )
}

export default PostBlogs