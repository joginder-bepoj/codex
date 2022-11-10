import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {Accordion} from "react-bootstrap"


import Prism from "prismjs";
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'  
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import VerticalAd from "../advertisement/VerticalAd";
import Spinner from "../spinner/Spinner";


const ViewTutorial = ({chapterList, chapterData, navigation, fadeinClass}) => {
    const router = useRouter();
    useEffect(()=>{
        Prism.highlightAll();
    },[chapterData])

    return (
        <>
                <Head>
                    <title>{chapterData?.sub_chapter}</title>
                    <meta name="description" content="Home page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            <section className="pt-3 bg-light tutorial-info" >
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-3">
                            <div className="card">
                                <Accordion defaultActiveKey={[0]} alwaysOpen className="accordion accordion-flush">
                                    {
                                        chapterList.map((item, i)=>(
                                            <Accordion.Item eventKey={i} key={i} className="accordion-item">
                                                <Accordion.Header className="accordion-header" >
                                                    {item.skill_chapterName}
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {item.sub_chapter?.map(subChapter=>(
                                                        <div
                                                        className={`accordion-body start-html ${subChapter.url === router.query.slug.sub_chapter_url && "active"}`}
                                                        key={subChapter?.id}
                                                        onClick={() => navigation(subChapter?.id, item)}
                                                    >
                                                        {subChapter.name}
                                                    </div>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-md-7 mb-5">
                            <div className="chapterStart">
                                {chapterData?.sub_chapter_url === router?.query?.slug[1] ? (
                                    <>
                                    <div className={`chapters p-3 bg-white `}
                                    >
                                        <div className={fadeinClass ? "fade-in" : "fade-out"} dangerouslySetInnerHTML={{ __html: chapterData?.description}} />
                                        <div className="nextprev-btn">
                                <p className="pre-btn" onClick={()=> chapterData.previous_page_url !== null && router.push(`/${router.query.slug[0]}/${chapterData.previous_page_url}`)}>
                                    <svg
                                        width="7"
                                        height="13"
                                        viewBox="0 0 7 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.39962 12.5479L6.96755 11.9027L1.54679 6.91294L6.40816 1.35299L5.77533 0.774308L0.349957 6.97931L6.39962 12.5479Z"
                                            fill="#212529"
                                        ></path>
                                    </svg>
                                    &nbsp; Previous Chapter
                                </p>
                                <p className="next-btn" onClick={()=>router.push(`/${router.query.slug[0]}/${chapterData.next_page_url}`)}>
                                    Next Chapter &nbsp;
                                    <svg
                                        width="8"
                                        height="13"
                                        viewBox="0 0 8 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.59491 0.267833L0.96986 0.855294L5.90497 6.34688L0.551304 11.4118L1.1278 12.0491L7.10258 6.39654L1.59491 0.267833Z"
                                            fill="#212529"
                                        ></path>
                                    </svg>
                                </p>
                                    </div>
                                    </div>
                                    
                                    </>
                                ): <Spinner />}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <VerticalAd />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewTutorial;

