import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className='ccontiner'>
                <div className='contact_main'>
                    <h3 className='contact_title1'>Contact Us</h3>
                    <p className='contact_para'>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                </div>
                <div className='cont_flex'>
                    <div>
                        <form>
                            <input className='cont_input' type="text" placeholder='Maya' /> <br />
                            <input className='cont_input' type="text" placeholder='Email' /> <br />
                            <input className='cont_input' type="text" placeholder='Subject' /> <br />
                            <input className='msg_input' type="text"  placeholder='Massage'/>
                        </form>
                        <a className='cont_btn' href="#">Send Massage</a>
                    </div>
                    <div>
                       <img className='map_img' src="amit.png" alt="amit" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Contact