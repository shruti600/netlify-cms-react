import React, { Component } from 'react'
import { FcAbout } from "react-icons/fc";

export default class Smallbenefits extends Component {
    render() {
        return (
            <>
            <div className="uk-flex">
                <FcAbout style={{fontSize:'30px', alignItems:'center'}} />
                <h4 style={{marginTop:'15px', marginLeft:'10px'}}>Budget-friendly</h4>
            </div>
            <div className="uk-margin-small-top">
                loremMinim exercitation excepteur irure ullamco sit tempor id minim irure cillum. Commodo consequat ut elit laboris.
            </div>
            </>
        )
    }
}
