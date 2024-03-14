import React,{useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Categories from '../components/Categories'
import Videos from '../components/Videos'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'



function Dashboard() {
  const [addStatus,setAddStatus]=useState([])

  return (
    <>
      <div>
        <h3>Dashboarrd</h3>
        <Link to={'/his'}>Watch History</Link>
        

        <Row className='p-5'>
          <Col sm='1' md='1'>
            <Addvideos setAddStatus={setAddStatus}/>

          </Col>
          <Col sm='4' md='7'>
            <Videos addStatus={addStatus}/>

          </Col>
          <Col sm='2' md='4'>
            <Categories/>

          </Col>



        </Row>

      </div>
      <ToastContainer/>
    </>
    
  )
}

export default Dashboard