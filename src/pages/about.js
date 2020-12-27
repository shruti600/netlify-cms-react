import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout>
             <h1 style={{textAlign: `center`, marginBottom: `40px`, color:'yellow'}}>This is a React based CMS.</h1>
            <div className="page-content">
                <Markdown source={aboutText[0].content} escapeHtml={false} />
            </div>
        </Layout>
    )
}

export default About