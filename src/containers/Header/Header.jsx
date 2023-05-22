import React from 'react'

import './header.css'
import detail from '../../assets/detail.png'
import shine from '../../assets/shine.png'

const Header = () => {

    return(
            <div className='header'>
                <div className='header-detail'>
                    <img src={detail} />
                    <p>Introducing Image Feature</p>
                </div>
                <div className='header-content'>
                    <h1>Imagine with Serendipity</h1>
                    
                    <p>Discover a vibrant community of creators on Serendipity! Connect with thousands of like-minded individuals on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable characters, bring your short text descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey of endless creativity!</p>
                    <button type='button'>
                        <img src={shine} />
                        <p>Generate Images</p>
                    </button>
                </div>
            </div>
    )
}
export default Header