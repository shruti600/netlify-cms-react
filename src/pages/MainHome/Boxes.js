import React, { Component } from 'react'
import Smallbenefits from './Smallbenefits'
// import Boxcard from './Boxcard'

export default class Boxes extends Component {
    render() {
        return (
            <div className="" style={{marginTop:'-40px'}}>
                <svg height="695" width="1600" style="fill:blue"  style={{position:'absolute'}}>
                    <path d="M0 0 L400 0 L0 300 Z" />
                    <path d="M1600 900 L1100 700 L1600 500 Z" />  
                </svg>
                <h2 className="uk-text-center"><strong style={{lineHeight:'3'}}>Benefits of CMS</strong></h2>
                <p className="uk-margin-medium-bottom uk-text-center" style={{fontSize:'21px', fontFamily:'Blue Ubuntu'}}>A Content Management System saves you from having to pay a developer every time you want to make an update to your site.</p>
                <div className="uk-flex uk-flex-center uk-margin-bottom uk-margin-top">
                    <div className="uk-flex uk-flex-between uk-width-3-5">
                        <div className="uk-flex uk-flex-center uk-child-width-1-2@s">
                            <div className="uk-margin-right">
                                <Smallbenefits />
                            </div>
                            <div className="uk-margin-left">
                                <Smallbenefits />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-margin-bottom uk-margin-top">
                    <div className="uk-flex uk-flex-between uk-width-3-5">
                        <div className="uk-flex uk-flex-center uk-child-width-1-2@s">
                            <div className="uk-margin-right">
                                <Smallbenefits />
                            </div>
                            <div className="uk-margin-left">
                                <Smallbenefits />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-margin-large-bottom uk-margin-top">
                    <div className="uk-flex uk-flex-between uk-width-3-5">
                        <div className="uk-flex uk-flex-center uk-child-width-1-2@s">
                            <div className="uk-margin-right">
                                <Smallbenefits />
                            </div>
                            <div className="uk-margin-left">
                                <Smallbenefits />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
