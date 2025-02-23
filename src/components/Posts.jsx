import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Posts() {
    document.title = 'Post'
    const [posts, setPosts] = useState([]);

    const [limit, setLimit] = useState(10);

    const [single, setSingle] = useState(null);

    useEffect(()=>{
        // fetch('https://logicracks.com/api/secondcellmart/demoapi/getbrands.php')
        // .then(response => {return response.json()})
        // .then(data => {setPosts(data); console.log(data)}) 
        axios('https://logicracks.com/api/secondcellmart/demoapi/getbrands.php')
        .then(function (response) {
            console.log(setPosts(response.data));
          });   
    },[])

    const viewDetail = (id) =>{
        
        // fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        // .then(response => {return response.json()})
        // .then(data => {setSingle(data)})  
        //console.log()
        setSingle(posts[id-1])

    }

    let sno = 1;
    

    return (
    <div className='row'>
    <div className='col-sm-6 overflow-auto' style={{height:700}}>
        
        <h1>Posts</h1>
        <table className='table'>
            <thead>
                <tr>
                <th>Sno</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Title</th>
                    <th>Title</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {

                    posts.map((item)=>{
                        
                        let a = item.id;
                        if(item.name == null || item.name == ''){
                            return "";
                        }
                        return(
                            <tr key={a}>
                                 <td>{sno++}</td>
                                <td>{a}</td>
                                <td>{item.name}</td>
                                <td>{item.tagline}</td>
                                <td>{item.details}</td>
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