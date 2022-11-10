import React from 'react'
import Link from 'next/link'
import Image from "next/image"

const AboutBanner = ({ name, bnrImg }) => {
  return (
    <>
      <section className="site-inside-banner site-banner about-bnr">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 align-self-center">
              <h1 className="text-white">{name}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link href="/" title='Home'>Home</Link></li>
                  <li className="breadcrumb-item text-white text-capitalize">{name}</li>
                </ol>
              </nav>
            </div>
            <div className="col-sm-6 d-none d-md-block">
              <figure className="d-flex justify-content-end mb-0"><Image src={bnrImg} className="banner-images" alt="banner-img" height="auto" width="auto" priority={true} /></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutBanner