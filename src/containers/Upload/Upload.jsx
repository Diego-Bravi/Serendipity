import React from 'react'
import './upload.css'


import update from '../../assets/logo-upload.png'
import audio from '../../assets/logo-audio.png'
import status from '../../assets/logo-status.png'
import release from '../../assets/logo-release.png'
import roles from '../../assets/logo-roles.png'
import flecha from '../../assets/flecha.png'

const Upload = () => {
    
    return(
        <div className='update'>
            <div className='update-title'>
            <h1>Updates</h1>
            </div>
            <div className='update-box'>
                <div className='update-box_upload'>
                <button type="button">
                <img src={update}></img>
                <br />
                </button>
                <h1>Upload Image</h1>
                <p>New Feature - Apr 30.2023</p>
                </div>
                <div className='update-box_audio'>
                <button type="button">
                <img src={audio}></img>
                </button>
                <h1>Permutation</h1>
                <p>New Feature - Apr 30.2023</p>
                </div>
                <div className='update-box_status'>
                <button type="button">
                <img src={status}></img>
                </button>
                <h1>Status Page</h1>
                <p>New Feature - Apr 30.2023</p>
                </div>
                <div className='update-box_release'>
                <button type="button">
                <img src={release}></img>
                </button>
                <h1>V2.1 Release</h1>
                <p>New Feature - Apr 30.2023</p>
                </div>
                <div className='update-box_roles'>
                <button type="button">
                <img src={roles}></img>
                </button>
                <h1>Linkedin Roles</h1>
                <p>New Feature - Apr 30.2023</p>
                </div>
            </div>
            <div className='update-button'>
                <button type='button'>
                    <img src={flecha} />
                    <h1>Explore Now</h1>
                </button>
            </div>
        </div>
    )

}

export default Upload