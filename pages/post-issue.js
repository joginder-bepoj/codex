import React from 'react'
import Layout from '../layout/Layout'
import issueBnr from "../assets/issue-bnr.png"
import Advertisement from "../components/advertisement/Advertisement"
import { ToastContainer } from 'react-toastify'
import AboutBanner from '../components/banners/AboutBanner'
import Add from '../components/forms/Add'
import Head from 'next/head'

const PostIssue = () => {
    return (
        <>
            <Head>
                <title>Post Issue</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <AboutBanner name={"Post Issue"} bnrImg={issueBnr} />
                <Add />
                <Advertisement />
                <ToastContainer />
            </Layout>
        </>
    )
}

export default PostIssue