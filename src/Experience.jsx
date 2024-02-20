import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <>
    <div className='ccontiner space'>
        <div className='flex5'>
            <div>
                <h6 className='exp_title'>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h6>
                <a className='exp_btn' href="#">Explore</a>
            </div>
            <div>
                <h2 className='exp_title2'>Why Choose us for best construction experience</h2>
            </div>
        </div>
        <div className='flex6'>
            <div>
                <img src="expimg.png" alt="expimg" />
            </div>
            <div>
                <div className='flex7'>
                    <div>
                        <img src="oneimg.png" alt="oneimg" />
                    </div>
                    <div>
                        <h5 className='right_title '>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</h5>
                    </div>
                </div>
                <div className='flex7 exp_dwon'>
                    <div>
                        <img src="twoimg.png" alt="oneimg" />
                    </div>
                    <div>
                        <h5 className='right_title '>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</h5>
                    </div>
                </div>
                <div className='flex7 exp_dwon'>
                    <div>
                        <img src="threeimg.png" alt="oneimg" />
                    </div>
                    <div>
                        <h5 className='right_title '>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Experience