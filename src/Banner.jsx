import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='ccontiner'>
                <div className='flex2'>
                    <div>
                        <h2 className='ban_ldivtitle'><span>Masters</span> of Consistency and <span>Quality</span>.</h2>
                        <p className='left_para'>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                        <div>
                            <a className='banner_btn
                            ' href="#">Explore</a>
                             <a className='banner_btn
                             spac2' href="#">Contact Us</a>
                        </div>
                        <img className='stats_img' src="stats.png" alt="" />
                    </div>
                    <div>
                        <img className='banner_img' src="banner1.png" alt="" />
                    </div>
                </div>
                <div className='flex4'>
                   <img className='logos_img' src="Logos.png" alt="Logos" />
                </div>
            </div>
        </>
    )
}

export default Banner