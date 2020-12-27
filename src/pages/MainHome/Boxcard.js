import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Boxcard extends Component {
    render() {
        return (
            <Flippy
                flipOnHover={true} 
                flipOnClick={false} 
                flipDirection="horizontal"
                ref={(r) => this.flippy = r} // to use 
                style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: 'lightgrey',color:'navy', fontWeight:'bold', borderRadius:'10px', cursor:'pointer'
                }}
                >
                    <div className="uk-margin-top" style={{fontFamily:'palantino', fontSize:'20px'}}>

                        <div className="uk-flex uk-flex-center" style={{fontFamily:'garamond', fontSize:'30px', marginLeft:'25px'}}>
                            <img src={this.props.pic} width="20%" style={{height:'50px'}}></img>
                            <div className="uk-margin-left" style={{marginTop:'-10px', lineHeight:'1.2'}}>
                             {this.props.title}
                             </div>
                        </div>
                        <div className="uk-margin-medium-top uk-flex uk-flex-start" style={{marginLeft:'20px'}}>
                            <div className="" style={{fontFamily:'palantino', fontSize:'20px'}}>
                                <div><span class="uk-margin-small-right" uk-icon="chevron-double-right"></span>{this.props.b1}</div>
                                <div><span class="uk-margin-small-right" uk-icon="chevron-double-right"></span>{this.props.b2}</div>
                                <div><span class="uk-margin-small-right" uk-icon="chevron-double-right"></span>{this.props.b3}</div>
                            </div>
                            
                        </div>
                    </div>
                </FrontSide>
                <BackSide style={{ backgroundColor: 'black', color:'white',borderRadius:'10px', cursor:'pointer'}}>
                    <div classname="uk-text-center" style={{padding:'30px'}}>
                        {this.props.desc}
                    </div>
                </BackSide>
            </Flippy>
        );
    }
}
