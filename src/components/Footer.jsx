import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      
      <div className='w-100 d-flex flex-coloumn justify-content-center bg-light bg-dark  '>
        <div className='row p-5'>
          <div className='col  text-light'> 
          <h4 style={{color:"white"}}>Media Player 2024</h4>
          <p style={{textAlign:'justify'}}>Besides that, if you specify for video such data as Title, Description, Play page URL, Thumbnail URL, Raw video file 
            location, and Player URL Google will have all the necessary information to include it in search, thereby moving you up on
             the ladder as a helpful, informative resource.</p>

          </div>
          <div className='col ' style={{textAlign:'center'}}>
            <h4 style={{color:"white"}}>Links</h4>
            <Link to={'/' } style={{color:"white"}}>Landing</Link><br />
            <Link to={'/dash'} style={{color:"white"}}>Dashbord</Link><br />
            <Link to={'/his'} style={{color:"white"}}>History</Link><br />
            

          </div>
          <div className='col  '>
            <h4 style={{color:"white"}}>Reference</h4>
            <a href="https://getbootstrap.com/" target='-blank' style={{color:"white"}}>Bootsttrap</a> <br />
            <a href="https://react-bootstrap.netlify.app/"  target='-blank' style={{color:"white"}}>React-Bootstrap</a> <br />
            <a href="https://react.dev/" target='-blank' style={{color:"white"}}>React</a>

          </div>

          <div className='text-center'>
            <p style={{color:"white"}}> &copy;Media Player</p>
            
          </div>

        </div>
      </div>

    </>
  )
}

export default Footer