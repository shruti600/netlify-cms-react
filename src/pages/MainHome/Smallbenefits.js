import React, { Component } from 'react'

export default class Smallbenefits extends Component {
    render() {
        return (
            <>
            <div className="uk-flex">
                <img src={this.props.pic} width="10%" style={{height:'50px'}}></img>
                <h4 style={{marginTop:'20px', marginLeft:'10px', marginTop:'10px', fontWeight:'500', color:'navy'}}>{this.props.head}</h4>
            </div>
            <div className="uk-margin-small-top" style={{color:'black'}}>
                {this.props.desc}
            </div>
            </>
        )
    }
}
