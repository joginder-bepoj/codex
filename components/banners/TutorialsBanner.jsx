import React from 'react'
import insiteBanner from "../../assets/insite-banner.svg";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const TutorialsBanner = () => {
  const router = useRouter();
  return (
    <>
      <section className="site-inside-banner tutorial site-banner pt-5 py-md-2 pb-3">
        <div className="container py-md-0">
          <div className="row">
            <div className="col-sm-6 align-self-center">
              <h1 className="text-white">Tutorials</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link href="/" title='Home'>Home</Link></li>
                     <li className='breadcrumb-item'><Link href="/" className="text-white text-capitalize">{router.asPath.replace("/", "")}</Link></li>
                </ol>
              </nav>
            </div>
            <div className="col-sm-6 d-none d-md-block">
              <figure className="d-flex justify-content-end"><Image src={insiteBanner} alt="tutorial-banner-img" height='auto' width="auto" /></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TutorialsBanner