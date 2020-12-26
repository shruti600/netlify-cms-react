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
                    backgroundColor: 'white',color:'navy', fontWeight:'bold'
                }}
                >
                    <div className="uk-margin-medium-top">
                        <div>
                            <span uk-icon="icon: check"></span> Helloo
                        </div>
                        <div className="uk-margin-large-top">
                            Watch it
                        </div>
                    </div>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: 'navy', color:'white'}}>
                ROCKS
                </BackSide>
            </Flippy>
        );
    }
}
