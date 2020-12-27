import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"

import "./components.css"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist" style={{width:'50%'}}>
            <h1 className="title" style={{color:'navy'}}>All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card" style={{ background:'black'}}>
                            <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={600} src={post.thumbnail} alt="" style={{height:'350px'}}/> }
                            </div>
                            <h2 className="post-title" style={{marginTop:'15px', fontFamily:'Times New Roman'}}><Link className="links" to={`/post/${post.id}`} style={{textDecoration:'none', color:'white'}}>{post.title}</Link></h2>
                            <small style={{fontFamily:'sans-serif', color:'white'}}>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown source={excerptList[i]} escapeHtml={false} style={{color:'white'}} />
                            <small style={{}}><Link className="links" to={`/post/${post.id}`} style={{textDecoration:'none', color:'white'}}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList