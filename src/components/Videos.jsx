import React,{useState,useEffect} from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'





function Videos({addStatus}) {

  const [allvideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState({})

  

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  

  const getData=async()=>{
    const res=await getVideos()
    setAllVideos(res.data)

    

    



    

    // console.log(allvideos)
  }
  
  
  
  return (
    <>
    <div className='bg-dark border border-3 border-dark p-5 row'>
      {
        allvideos?
        allvideos.map(item=>{
          return(<VideoCard   video={item} setDelStatus={setDelStatus}/>)

        })
        :
        <h1>NO Videos</h1>
      }
    

    </div>
    </>
  )
}

export default Videos