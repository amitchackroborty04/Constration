import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <>
    <div className='ccontiner'>
        <div className='bologs_main'>
            <h2 className='blogs_title'>Lattest Blogs</h2>
            <p className='blog_para'>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
        </div>
        <div className='blogs_flex'>
            <div>
                <img className='blogs_img' src="blogs2.png" alt="blogs2" />
            </div>
            <div>
                <div className='blogs_right'>
                   <div className='suv_blogs'>
                   <h2 className='bsub_title'>Unleash Your Creativity</h2>
                    <p className='bsub_para'>Nine for Mortal Men, doomed to die, One for</p>
                    <a className='blogs_subtn' href="#">Read more</a>
                   </div>
                </div>
            </div>
            <div>
                <img src="slider.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs