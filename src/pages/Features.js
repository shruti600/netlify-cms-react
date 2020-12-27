import React, { Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Image from '../Images/cms-banner.jpg'
import Boxcard from './MainHome/Boxcard'

export default class Features extends Component {
    render() {
        return (
            <>
            <div style={{background:'black', color:'gold'}}>
            <Header />
            <img src={Image} width="100%" style={{marginTop:'-15px'}}></img>
            <h2 className="uk-text-center" style={{color:'gold'}}><strong>Features</strong></h2>
            <p className="uk-margin-top uk-text-center" style={{fontSize:'18px', fontFamily:'Blue Ubuntu', fontWeight:'400'}}>A Content Management System will help you build and maintain your site and all the important content for your business.</p>
            <div className="uk-flex uk-flex-center uk-margin-large-bottom uk-margin-large-top">
                <div className="uk-flex uk-flex-between uk-width-4-5">
                    <Boxcard />
                    <Boxcard />
                    <Boxcard />
                </div>
            </div>
            <Footer />
            </div>
            </>
        )
    }
}
