import React,{useEffect,useState} from 'react'
import { getCategories,deletCat,getSpecificVideo, updatecategory} from '../services/allApis';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard'





function Categorylist({status}) {

  const [cat,setCat]=useState([])
  const [deletStatus,setDelStatus]=useState({})

 

  const delectCate=async (id)=>{
    console.log(id)
    const res= await deletCat(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      setDelStatus(res)
      toast.success("Category Deleted SuccessFully!!")
    }
    else{
      toast.error("Category Delettion Failed!!")
    }


  }

  
 

  useEffect(()=>{

    getCat()
  },[status,deletStatus])


  
  const getCat=async()=>{
    const res =await getCategories()
    console.log(res)
    setCat(res.data)

  }

  const handleDrop= async (e,id)=>{
    console.log("category id:"+id)
    const vid=e.dataTransfer.getData("VideoId")
    console.log("dropped video id :"+vid)
    let category=cat.find(item=>item.id==id)
    console.log(category)
    const res= await getSpecificVideo(vid)
    // console.log(res.data)
    category.videos.push(res.data)
    console.log(category)
    const rescat=await updatecategory(category,id)
    if(rescat.status>=200 && rescat.status<300){
      toast.success(`${res.data.caption} is added to ${category.name}`)
      getCat()
    }

    else{
      toast.error("video adding to categorry Failled")
    }
  }



  const handleDragOver=(e)=>{
    e.preventDefault()
    console.log("draging over category")

  }






  return (
    <>
    <div  className='bg-dark border  border-light p-3  mt-3'>
      {
       cat ?
       cat.map(item =>(
            <div className='bg-light mb-3 p-3 rounded shadow' onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
              <div>
              <span>{item.name}</span>
              <i class="fa-solid fa-trash float-end" onClick={()=>{delectCate(item.id)}}   style={{color:'#990000',cursor:'pointer'}} ></i>

              </div><br />
              <div>
                {

                  item?.videos.map(v=>(
                  

                    <VideoCard video={v} cat={true } />

                  ))
                }

              </div>


              
            </div>

       ))
       :
       <h1>No Categories</h1>
      }

    
    
       
      </div>
    </>
  )
}

export default Categorylist