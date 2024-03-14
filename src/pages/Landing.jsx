import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className=' w-100 d-flex justify-content-center align-items-center ' style={{height:'80vh'}}>
        <div className='row p-5  shadow '>
          <div className='col d-flex flex-column justify-content-center '>
            <h1>Media Player 2024</h1>
            <p>Explore mmedia player for youtube video uplode and management.you can add mange videos,categories and even check</p>
            <div>
              <Link to={'/dash'} className='btn btn-warning'>Explore</Link>
              
            </div>

          </div>
          <div className='col '>
            <img src="https://png.pngtree.com/element_our/png/20181015/media-marketing-concept-people-sitting-on-big-media-player-and-png_133260.jpg "
             className=' img-flude shadow' alt="img" />
          </div>


        </div>
      </div>
      <div className='mt-3 p-5 shadow' >
        <h2 className='text-center'>Feactures</h2>
        <div className='d-flex mt-2 flex-row justify-content-between' >

          <div class="card shadow" style={{width:'18rem'}}>
             <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" style={{height:'300px'}} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">Uplode Videos</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
              </div>
          </div>

          <div class="card shadow" style={{width:'18rem'}}>
             <img src="https://i.imgur.com/XWt6Bdk.gif" style={{height:'300px'}} className="card-img-top" alt="..."/>
             <div className="card-body border-solid">
                <h5 className="card-title">Watch videos</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
              </div>
          </div>

          <div class="card shadow" style={{width:'18rem'}}>
             <img src="https://media0.giphy.com/media/7qsy0r6iwCJsURssZY/200w.gif?cid=6c09b952e4l8b3qhdjlbo6lw0awgcawivhq1whvsd9xj1bb4&ep=v1_gifs_search&rid=200w.gif&ct=g" style={{height:'300px'}} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">View History</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
              </div>
          </div>

        </div>

      </div>
      <div className='mt-5  d-flex justify-content-between  flex-row  align-items-center p-5'>
        <div className='col'>
          <h2>Simple , Fast & Secured</h2>
          <p style={{textAlign:'justify'}}>Media player 2024 is a platforrm for simple and faster youtube  video uploding <br></br> and management video watch history too where you get a simple video player interface with the app itself.... </p>

        </div>
        <div cassName='col p-5 '>


        <iframe width="560" height="315" src="https://www.youtube.com/embed/SfsWWXQK8pg?si=q6fBqtPaFmRA_Cd2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>

      </div>
    </>
  )
}

export default Landing