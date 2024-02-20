import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './Subscribe.css'

const Subscribe = () => {
    return (
        <>
            <div className='ccontiner'>
                <div className='subcribe_main'>
                    <h2 className='subcribe_title'>Subscribe to our
                        Newsletter</h2>
                        <p className='subcribe_para'>Age sold some full like rich new. Amounted repeated as believed in confined juvenile.</p>
                        <div className='icon_divs'>
                        <a className='scribe_btn' href="#">SUBSCRIBE</a>
                        <FaLongArrowAltRight className='sucrib_icon' />
                        </div>

                </div>
            </div>
        </>
    )
}

export default Subscribe