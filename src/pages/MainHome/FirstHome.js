import React from 'react'
import './First.css';
import ReactTextTransition, { presets } from "react-text-transition";
import Image from '../../Images/cms.jpg'
import Footer from '../../components/footer';
import Header from '../../components/header';
import Boxes from './Boxes';
import {Link} from 'react-router-dom'

let texts=[
    "User-friendly", 
    "Quick deployment", 
    "Design Flexibility", 
    "Ease-of-maintenance"
    ];
export default function FirstHome() {
    
    return (
        <>
        <Header />
        <div className="mainpage fullpage">
            <div className="uk-flex" style={{alignItems:'center', height:'65vh'}}>
                <div style={{width:'60%'}}>
                    <h2 className="head" style={{color:'yellow', width:'100%'}}>
                        <div className="uk-flex uk-flex-center" style={{paddingTop:'10px'}}>
                        <ReactTextTransition
                        text="Content Mangement System"
                        delay={800}            
                        direction='down'
                        overflow
                        /></div>
                    </h2>
                    <div className="uk-flex uk-flex-center" style={{paddingTop:'10px'}}>
                        <Link to="allposts" style={{textDecoration:'none', color:'black', background:'yellow', padding:'10px 20px', borderRadius:'8px', fontWeight:'500', fontSize:'20px'}}><ReactTextTransition
                        text="Get Started"
                        delay={800}            
                        direction='right'
                        overflow
                        color='yellow'
                        /></Link>
                    </div>
                    
                </div>
                <div className="uk-flex uk-width-1-6  uk-margin-large-left">
                    <div style={{width:'100%'}}>
                        
                        {texts.map((item,index)=>(                      
                            <div className="uk-text-center uk-margin uk-flex uk-flex-start uk-margin-medium-bottom" style={{fontWeight:'500', fontSize:'20px', color:'yellow'}}>
                                <div style={{color:'yellow'}}>
                                <span class="uk-margin-small-right" uk-icon="chevron-double-right"></span>
                                </div>
                                <ReactTextTransition
                                text={item}
                                delay={1500+index*1000}            
                                direction='right'
                                overflow
                                />
                            </div>
                        ))}

                    </div>
                    </div>
            </div>
            <div className="uk-text-center uk-flex uk-flex-center" style={{background:'black', color:'gold', fontSize:'20px', marginTop:'20px'}}>
            <div className="uk-width-1-2@s">
            A content management system (CMS) is an application that is used to manage web content, allowing multiple contributors to create, edit and publish. 
            </div>
        </div>
        </div>
        
        <img src={Image} width="100%" style={{height:'650px'}} />
        <Boxes />
        <Footer />
        </>
    )
}
