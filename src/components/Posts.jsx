import React, { useEffect, useState } from 'react'

function Posts() {
    document.title = 'Post'
    const [posts, setPosts] = useState([]);

    const [limit, setLimit] = useState(10);

    const [single, setSingle] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {return response.json()})
        .then(data => {setPosts(data)})    
    },[])

    const viewDetail = (id) =>{
        
        // fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        // .then(response => {return response.json()})
        // .then(data => {setSingle(data)})  
        //console.log()
        setSingle(posts[id-1])

    }
    

    return (
    <div className='row'>
    <div className='col-sm-6 overflow-auto' style={{height:700}}>
        
        <h1>Posts</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((item)=>{
                        let a = item.id;
                        return(
                            <tr key={a}>
                                <td>{a}</td>
                                <td>{item.title}</td>
                                <td><input type='button' value="view" onClick={()=>{viewDetail(a)}} /></td>
                            </tr>
                        ) 
                        
                    })
                }
            </tbody>
        </table>

        {/* <input type='button' value={limit} onClick={()=>{setLimit(limit+10)}} />     */}
    </div>
    <div className='col-sm-6'>
        {
            single && 
            <h1 className='display-4 text-center'>{single.title}</h1>
        }

    </div>
    </div>
  )
}

export default Posts