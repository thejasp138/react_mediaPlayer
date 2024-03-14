import React,{useEffect,useState} from 'react'
import { getHistory } from '../services/allApis'
import { deletHis } from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify'




function History() {
    const [his,setHis]=useState([])
    const [delethisStatus,setDeletHisStatus]= useState({})


  useEffect(()=>{
    getData()
  },[delethisStatus])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)

  }

  const deletHistory =async (id)=>{
    console.log(id)
    const res= await deletHis(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      setDeletHisStatus(res)
      toast.success("Category Deleted SuccessFully!!")
    }
    else{
      toast.error("Category Delettion Failed!!")
    }


  }



  return (
    <>
      <div className='p-5'> 
        <h1>Watch History</h1>
        <table className='table table-bordered  bg-dark text-light  ' style={{border:"solid white"}} >

          <tr>
            <th>Caption</th>
            <th>Url</th>
            <th>Date & Time</th>
            <th></th>
          </tr>
          {
            his ?
            his.map(item =>(
              <tr>

             
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td><i class="fa-solid fa-trash text-dark bg-dark text-white"   onClick={()=>{deletHistory(item.id)}}></i></td>
              </tr>
            ))
            :
            <tr className='text-danger'>No Watch history</tr>
          }

        </table>


      </div>
      <ToastContainer/>
  
    </>
   
  )
}

export default History