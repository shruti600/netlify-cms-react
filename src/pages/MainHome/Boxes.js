import React, { Component } from 'react'
import Smallbenefits from './Smallbenefits'
// import Boxcard from './Boxcard'
import img1 from '../../Images/exchange.png'
import img2 from '../../Images/controls.png'
import img3 from '../../Images/cpu.png'
import img4 from '../../Images/engineering.png'
import img5 from '../../Images/users.png'
import img6 from '../../Images/calendar.png'

export default class Boxes extends Component {
    render() {
        return (
            <div className="" style={{marginTop:'-40px', background:'#e2e2e2'}}>
                <svg height="900" width="1600" style={{fill:'black', position:'absolute'}}>
                    <path d="M0 0 L400 0 L0 300 Z" />
                    <path d="M1600 900 L1100 900 L1600 500 Z" />  
                </svg>
                <h2 className="uk-text-center"><strong style={{lineHeight:'3'}}>Benefits of CMS</strong></h2>
                <p className="uk-margin-medium-bottom uk-text-center" style={{fontSize:'21px', fontFamily:'Blue Ubuntu', marginTop:'-40px', width:'40%', margin:'auto'}}>A Content Management System saves you from having to pay a developer every time you want to make an update to your site.</p>
                <div className="uk-flex uk-flex-center uk-margin-bottom uk-margin-large-top">
                    <div className="uk-flex uk-flex-between uk-width-3-5">
                        <div className="uk-flex uk-flex-center uk-child-width-1-2@s">
                            <div className="uk-margin-right">
                                <Smallbenefits pic={img1} head="Simple Design Changes" desc="If you want to change the site design, a CMS makes the process easy. That's because the content and design are in separate virtual boxes, so you can make design changes while keeping the site functional."/>
                            </div>
                            <div className="uk-margin-left">
                                <Smallbenefits pic={img2} head="Complete Control" desc="Instead of being reliant on an external vendor, with a CMS you are in control, with the ability to assign tasks and roles and to check progress at any time. That puts you in the driving seat when it comes to this important business tool."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-margin-bottom uk-margin-top">
                    <div className="uk-flex uk-flex-between uk-width-3-5">
                        <div className="uk-flex uk-flex-center uk-child-width-1-2@s">
                            <div className="uk-margin-right">
                                <Smallbenefits pic={img3} head="Non-Technical " desc="Not all users have the same comfort level with technology, but the basic CMS functions of writing and publishing content, and slightly more advanced ones of adding media are usually easy for everyone to grasp."/>
                            </div>
                            <div className="uk-margin-left">
                                <Smallbenefits pic={img4} head="Improved Site Maintenance " desc="With a CMS, the underlying architecture is the same so you can make maintenance changes, update the CMS software and add functionality without breaking the site."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-margin-top">
                    <div className="uk-flex uk-flex-between uk-margin-large-bottom uk-width-3-5">
                        <div className="uk-flex uk-flex-center uk-child-width-1-2@s">
                            <div className="uk-margin-right">
                                <Smallbenefits pic={img5} head="Multiple Users " desc="A CMS makes it easy to manage roles and publishing permissions for all these users so that only those you allow can publish content and content only goes live when you're ready."/>
                            </div>
                            <div className="uk-margin-left">
                                <Smallbenefits pic={img6} head="Streamlines scheduling " desc="Decent CMS will give you an at a glance view of the status of all content, whether it's live, being reviewed or a draft."/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
