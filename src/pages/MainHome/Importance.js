import React, { Component } from 'react'
import Image from '../../Images/cmsweb.jpg'

export default class Importance extends Component {
    render() {
        return (
            <div className="" style={{background:'Lightblue'}}>
                <div className="uk-flex" style={{padding:'70px 30px'}}>
                    <div className="uk-width-1-2@s" style={{textAlign:'center'}}>
                        <img src={Image} style={{height:'400px'}}></img>
                    </div>
                    <div className="uk-width-1-2@s uk-flex uk-flex-center" style={{alignItems:'center'}}>
                        <div className="uk-width-1-2@s">
                            <div className="uk-flex uk-flex-start" style={{alignItems:'center'}}>
                                <h2 style={{fontWeight:'500'}}>Why Important ?</h2>
                            </div>
                            <div className="uk-flex uk-flex-start" style={{fontSize:'18px', fontFamily:'Blue Ubuntu'}}>
                                Having a content management system for your website allows you to have control of your content. It means having the ability to update, change or delete any images, text, video, or audio. It allows you to keep your site organised, up to date and looking great. So many websites never review their content after launch.
                            </div>
                        </div>
                        <div className="uk-width-1-4"></div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
