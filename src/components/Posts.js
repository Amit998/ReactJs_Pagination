import React from 'react'

function Posts({posts,loading}) {
    if(loading){
        return <h2>Loading...</h2>

    }
    return (
        <div className="list-group md-4">
            {posts.map( post =>(

                <a key={post.id} className='list-group-item list-group-item-action'>
                {post.title}</a>
            ))}
        
        </div>
    )
}

export default Posts
