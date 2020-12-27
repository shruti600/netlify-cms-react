import React, { Component } from 'react'
import Image from '../../Images/cms images.png'

export default class Specification extends Component {
    render() {
        return (
            <div className="" style={{background:'pink'}}>
                <div className="uk-flex">
                    <div className="uk-width-1-2@s uk-flex uk-flex-center" style={{alignItems:'center'}}>
                        <div className="uk-width-1-2@s">
                            <div className="uk-flex uk-flex-start" style={{alignItems:'center'}}>
                                <h2 style={{fontWeight:'500'}}>Anyone can create anything...</h2>
                            </div>
                            <div className="uk-flex uk-flex-start" style={{fontSize:'18px', fontFamily:'Blue Ubuntu'}}>
                                CMS allows you to build anything based on your desires and unique needs. Start a blog, business site, portfolio, online store, or anything else you can imagine.

                                Its responsiveness, features and easy maintenance makes it awesome. The user does not even need to have technical knowledge to design your blog which makes it really convinient to use. 
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@s">
                        <img src={Image}></img>
                    </div>
                </div>
            </div>
        )
    }
}
