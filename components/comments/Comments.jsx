import React from 'react'

const Comments = ({item}) => {
    return (
        <>
            <div className="comments" >
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2 d-none d-md-block">
                                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="41" cy="41" r="40.5" fill="white" stroke="#EEECEC" />
                                    <g clipPath="url(#clip0_2506_32)">
                                        <path d="M40.9957 42.4311C47.1573 42.4311 52.2563 37.5207 52.2563 31.2648C52.2563 25.009 47.1573 20.0043 40.9957 20.0043C34.8341 20.0043 29.7352 24.9147 29.7352 31.1706C29.7352 37.4264 34.8341 42.4311 40.9957 42.4311ZM40.9957 23.4921C45.2806 23.4921 48.7684 26.98 48.7684 31.1791C48.7684 35.3783 45.2806 38.8576 40.9957 38.8576C36.7109 38.8576 33.223 35.3697 33.223 31.1706C33.223 26.9714 36.7109 23.4921 40.9957 23.4921Z" fill="#212529" fillOpacity="0.5" />
                                        <path d="M48.5885 43.5023C47.8772 43.3224 47.1573 43.5023 46.7117 44.0422L40.9957 50.5638L35.2797 44.0422C34.8341 43.5023 34.0286 43.331 33.403 43.5023C25.2704 46.1847 20 52.7919 20 60.2047C20 61.1902 20.8055 61.9957 21.7911 61.9957H60.2089C61.1944 61.9957 62 61.1902 62 60.2047C61.9914 52.7919 56.7211 46.1847 48.5885 43.5023ZM23.6593 58.5079C24.3791 53.5974 27.9527 49.3983 33.4887 47.2559L39.7445 54.403C40.3701 55.2085 41.707 55.2085 42.3326 54.403L48.5885 47.2559C54.0388 49.3983 57.7066 53.6831 58.4179 58.5079H23.6593V58.5079Z" fill="#212529" fillOpacity="0.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2506_32">
                                            <rect width="42" height="42" fill="white" transform="translate(20 20)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="col-md-10 col-12">
                                <p className='d-flex justify-content-between mb-1'><span className='username-text text-capitalize'>{item.username}</span><span className='justify-content-end comment-time'>{item.date.slice(0, 11)}</span></p>
                                <div dangerouslySetInnerHTML={{ __html: item?.comment}}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments