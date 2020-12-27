import React, { Component } from 'react'
import Image from '../../Images/cmsweb.jpg'
import img from '../../Images/flag.png'

export default class Importance extends Component {
    render() {
        return (
            <div className="" style={{backgroundColor:'#e2e2e2'}}>
                <div className="uk-flex" style={{padding:'70px 30px'}}>
                    <div className="uk-width-1-2@s" style={{textAlign:'right'}}>
                        <img src={Image} width="80%" style={{height:'400px',marginRight:'50px'}}></img>
                    </div>
                    <div className="uk-width-1-2@s uk-flex uk-flex-center" style={{alignItems:'center'}}>
                        <div className="uk-width-3-5" style={{alignItems:'center'}}>
                            <div className="uk-flex uk-flex-start" style={{alignItems:'center'}}>
                                <img src={img} width="20%" style={{height:'70px'}}></img>
                                <h2 style={{fontWeight:'bold', marginTop:'15px', marginLeft:'15px', fontFamily:'Times New Roman'}}>Why Important ?</h2>
                            </div>
                            <div className="uk-flex uk-flex-start uk-margin-top" style={{fontSize:'18px', fontFamily:'Blue Ubuntu', fontFamily:'Georgia', color:'black'}}>
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
