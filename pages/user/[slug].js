import React from 'react'
import Layout from '../../layout/Layout'
import UserBG from '../../components/usersinfo/UserBG'
import UsersTabs from '../../components/usersinfo/UsersTabs'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'

const UserProfile = ({userViewData}) => {
  return (
    <>
        <Layout>
            <UserBG userViewData={userViewData}  />
            <UsersTabs userViewData={userViewData} />
            <ToastContainer /> 
        </Layout>    
    </>
  )
}

export default UserProfile


export async function getServerSideProps(context) {
    const {params} = context;
    const res = await axios.get(`${process.env.NEXT_APP_API_URL}/user_profile/${params.slug}`, {
        headers:{
          "X-API-KEY": process.env.NEXT_APP_API_KEY,
        }
    })

    const userViewData = res.data;

    return {
      props: {userViewData}, // will be passed to the page component as props
    }
}
