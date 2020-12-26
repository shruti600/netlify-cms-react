import React, { Component } from 'react'
import Boxcard from './Boxcard'


export default class Boxes extends Component {
    render() {
        return (
            <div className="uk-margin-top uk-text-center">
                <h4><strong>Benefits of CMS</strong></h4>
                <p className="uk-margin-medium-bottom" style={{fontSize:'18px'}}>loremProident nulla exercitation esse nulla non enim qui magna. Officia consectetur nostrud est voluptate laborum cupidatat consequat anim.</p>
                <div className="uk-flex uk-flex-center uk-margin-medium-bottom">
                    <div className="uk-flex uk-flex-between uk-width-4-5">
                        <Boxcard />
                        <Boxcard />
                        <Boxcard />
                    </div>
                </div>
                
            </div>
        )
    }
}
