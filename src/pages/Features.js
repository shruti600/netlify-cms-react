import React, { Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Image from '../Images/cms-banner.jpg'
import Boxcard from './MainHome/Boxcard'
import img1 from '../Images/advertisement.png'
import img2 from '../Images/content.png'
import img3 from '../Images/home.png'
import img4 from '../Images/web-design.png'

export default class Features extends Component {
    render() {
        return (
            <>
            <div>
            <Header />
            <img src={Image} width="100%" style={{marginTop:'-15px'}}></img>
            <h2 className="uk-text-center" style={{color:'navy', fontFamily:'Garamond', fontWeight:'bold'}}><strong>Features</strong></h2>
            <p className="uk-margin-top uk-text-center" style={{fontSize:'20px', fontFamily:'Blue Ubuntu', fontWeight:'500', color:'black'}}>A Content Management System will help you build and maintain your site and all the important content for your business.</p>
            <div className="uk-flex uk-flex-center uk-margin-large-bottom uk-margin-large-top">
                <div className="uk-flex uk-flex-between" style={{width:'90%'}}>
                    <Boxcard pic={img3} title="Intuitive Dashboard" b1="Scheduling content" b2="Monitoring threats" b3="Performance analytics" desc="At the core of every CMS is the admin dashboard. It helps to monitor threats, track user activity, etc." />
                    <Boxcard pic={img1} title="Publishing Tools" b1="Add images" b2="Videos" b3="Publishing interface" desc="You need a powerful content editor to ensure you can easily create and publish different types of content — from blog posts with custom layouts to landing pages with embedded resources." />
                    <Boxcard pic={img4} title="Pre-made Templates" b1="Pre-built landing page" b2="Website pages" b3="Email templates" desc="It's important to note that a template is not the same as a theme, though the terms are often conflated. A template is a single page layout that’s available within a theme or is compatible with a theme and can be downloaded separately." />
                    <Boxcard pic={img2} title="Content Staging" b1="Visitor experience" b2="Test changes" b3="Preview content" desc="Once your site is live, it's unlikely it will look the same for long. Whether you're launching a new product or completely overhauling your site's design, there are many situations in which you'll need to make major changes to your site." />
                </div>
            </div>
            <Footer />
            </div>
            </>
        )
    }
}
