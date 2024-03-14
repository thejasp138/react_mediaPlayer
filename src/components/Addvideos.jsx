import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApis';
import { toast } from 'react-toastify';




function Addvideos({setAddStatus}) {
  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    caption:'',url:'',image:''

  })

  const getdata=(e)=>{
    const {name,value}=e.target 
    // console.log(name,value)

    if(name==="caption"){
      setVideo({...video,caption:value})
    }
    if(name==="url"){
      let furl=value
      furl=furl.split("v=")

      // console.log(furl)
      let vurl=`https://www.youtube.com/embed/${furl[1]}?si=Vmeo04k-zSzzALuz&autoplay=1`
      // console.log(vurl)
      setVideo({...video,url:vurl})
    }
    if(name==="image"){
      setVideo({...video,image:value})
    }

  }
   const handleUpload=async()=>{
    const{caption,url,image}=video

    if(!caption || !url ||!image){

      toast.warning("Enter valid Details")
    }
    else{
        // console.log(video)
        const res=await uploadVideo(video)
        console.log(res)
        if(res.status>=200 && res.status<300){
          setAddStatus(res.data)
          toast.success("Video Uploaded Successfully!!")
          handleClose()
        }
        else{
          toast.error("video Uploaded Failed")
        }
        

    }

   }
  



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (

    <>
    
    <span className='btn' onClick={handleShow} >
    <i class="fa-solid fa-circle-plus fa-2xl" style={{color:'#0a0a0a' ,cursor:'pointer'}}></i>
    </span>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Caption</Form.Label>
                      <Form.Control type="text" name='caption' placeholder="Enter Video Caption"  onChange={(e)=>{getdata(e)}}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" >
                      <Form.Label>Video URL</Form.Label>
                      <Form.Control type="email" name='url' placeholder="Enter Youtube Video URL"  onChange={(e)=>{getdata(e)}} />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" >
                      <Form.Label>Image URL</Form.Label>
                      <Form.Control type="email" name='image' placeholder="Enter TThumbnail Image URL"  onChange={(e)=>{getdata(e)}}/>
                 </Form.Group>
     
            </Form> 

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Uplode</Button>
        </Modal.Footer>
      </Modal>
    
       
    </>
   
  )
}

export default Addvideos