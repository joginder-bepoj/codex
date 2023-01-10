import Head from 'next/head'
import HomeBanner from "../components/banners/HomeBanner"
import SiteBanner from "../components/siteBanner/SiteBanner"
import TutorialTab from '../components/tutorialTab/TutorialTab'
import Goals from "../components/goals/Goals"
import Issue from '../components/issues/Issues'
import Blogs from "../components/blogs/Blogs"
import PopularTutorial from "../components/popularTutorial/PopularTutorial"
import TrainingPlatform from "../components/training/TrainingPlatform"
import Layout from "../layout/Layout"
import axios from 'axios';
import { issue, blogs, skills } from '../services/services'

export default function Home({metaTags, issueData, blogsData, skillData}) {
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeBanner />
        <SiteBanner />
        <TutorialTab skillData={skillData} />
        <Goals />
        <Issue issueData={issueData} />
        <Blogs blogsData={blogsData} />
        <PopularTutorial />
        <TrainingPlatform />
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/2`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
  const issueData = (await issue()) || []
  const blogsData = (await blogs()) || []
  const skillData = (await skills()) || []
  return {
    props: {metaTags, issueData, blogsData, skillData}, // will be passed to the page component as props
  }
}
