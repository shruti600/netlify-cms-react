import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <div className="uk-flex uk-flex-center">
                <div className="uk-flex uk-flex-center uk-width-1-2@s">
                    <span class="uk-margin-small-right" uk-icon="github"></span>
                    <span class="uk-margin-small-right" uk-icon="twitter"></span>
                    <span class="uk-margin-small-right" uk-icon="facebook"></span>
                    <span class="uk-margin-small-right" uk-icon="google"></span>
                    <span class="uk-margin-small-right" uk-icon="linkedin"></span>
                </div>
            </div>
            <div className="uk-flex uk-flex-center">
                <div className="uk-flex uk-flex-between uk-width-1-5@s uk-margin-top">
                    <div>News</div>
                    <div>Privacy Policy</div>
                    <div>Feedback</div>
                </div>
            </div>
            <p>&copy; Copyright {new Date().getFullYear()} Content Management System</p>
        </div>
    )
}

export default Footer