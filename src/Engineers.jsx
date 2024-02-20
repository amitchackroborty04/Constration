import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Engineers.css'

const Engineers = () => {
  return (
    <>
    <div className='ccontiner'>
        <div className='eng_main'>
            <h4 className='eng_title1'>Our Best Engineers</h4>
            <p className='eng_para'>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
        </div>
        <div className='flex9 eng_dwon'>
          <div className='eng_card1'>
            <div className='flex10'>
              <div>
                <img src="star.png" alt="star" />
              </div>
              <div>
                <img src="dot.png" alt="dot" />
              </div>
            </div>
           <div className='eng_imgdiv'>
           <img className='eng_img' src="eng1.png" alt="eng1" />
           <h4 className='card_title'>Chris Evans</h4>
           <h5 className='card_subtitle'>Michigan, TX</h5>
           <h6 className='card_number'>989-653-2986</h6>
           <h3 className='card_email'>ChrisEvans@const.com</h3>
           </div>
          </div>
          <div className='eng_card1'>
            <div className='flex10'>
              <div>
                <img src="star.png" alt="star" />
              </div>
              <div>
                <img src="dot.png" alt="dot" />
              </div>
            </div>
           <div className='eng_imgdiv'>
           <img className='eng_img' src="eng2.png" alt="eng2" />
           <h4 className='card_title'>Alison Kiara</h4>
           <h5 className='card_subtitle'>Michigan, TX</h5>
           <h6 className='card_number'>989-653-2986</h6>
           <h3 className='card_email'>alisonkiara@const.com</h3>
           </div>
          </div>
          <div className='eng_card1'>
            <div className='flex10'>
              <div>
                <img src="star.png" alt="star" />
              </div>
              <div>
                <img src="dot.png" alt="dot" />
              </div>
            </div>
           <div className='eng_imgdiv'>
           <img className='eng_img' src="eng3.png" alt="eng3" />
           <h4 className='card_title'>Adam Gates</h4>
           <h5 className='card_subtitle'>Michigan, TX</h5>
           <h6 className='card_number'>989-653-2986</h6>
           <h3 className='card_email'>adamgates@const.com</h3>
           </div>
          </div>
        </div>
        <div className='icon_div'>
          <div>
          <FaLongArrowAltLeft className='left_icon' />
          <FaLongArrowAltRight className='left_icon' />
          </div>
        </div>
    </div>
    </>
  )
}

export default Engineers