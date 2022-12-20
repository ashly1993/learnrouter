
import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

function StoryList() {

    const [stories,setStories] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?page=1').then((response)=>{
            console.log(response.data);
            setStories(response.data)
            console.log("stories:",stories);

        }
        )
      
    })
  return (
    <div className='storyList'>
         <h2>hiiiiii</h2>
       {
         stories.map((story,index) =>{
            return(
              <div key={index}>
                <h2>{story.title}</h2>
            </div>
            )
         })
       }
    </div>
  )
}

export default StoryList