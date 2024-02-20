import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './Fotter.css'

const Fotter = () => {
  return (
   <>
   <div className='ccontiner'>
        <div className='fotter_flex'>
            <div>
                <h2 className='fotter_title'>CONSTRUCTION</h2>
                <h3 className='fotter_para'>You’ll find your next Home loan valu you prefer.</h3>
                <img src="social.png" alt="" />
            </div>
            <div>
                <h3 className='sub_ftitle'>Resources</h3>
                <h4 className='subf_para'>Our Agents</h4>
                <h5 className='subf_para2'>Member Stories</h5>
                <h5 className='subf_para2'>Video</h5>
                <h5 className='subf_para2'>Free trial</h5>
            </div>
            <div>
                <h3 className='sub_ftitle'>Company</h3>
                <h4 className='subf_para'>Patnerships</h4>
                <h5 className='subf_para2'>Terms of use</h5>
                <h5 className='subf_para2'>Privacy</h5>
                <h5 className='subf_para2'>Sitemap</h5>
            </div>
            <div>
                <h3 className='sub_ftitle'>Get in touch</h3>
                <div className='foller_email'>
                        <input className='f_inpmail' type="text" placeholder='Enter your mail' />
                        <FaLongArrowAltRight className='fotter_icon' />
                </div>
                
            </div>
        </div>
   </div>
   </>
  )
}

export default Fotter