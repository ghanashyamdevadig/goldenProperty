import React from 'react'
import "./Dashboard.css"
import Header from '../Component/Header'

export default function Dashboard() {
  return (
    <div>
    <Header/>
    
    <div className='main-cntr-dash'>
        <div className='main-heading'>
        <h1>Banner Images</h1>
        </div>
        <div className='button-cntr'>
            <button className='button-add-img'>Add Images</button>
        </div>
        <div className='banner-cntr'>
            <p className='total-img-text'>Total Images</p>
<div className='img-grid-cntr'>
<div className='images-grid'>
    <p>Image</p>
</div>
<div className='line-grid'>
<p>|</p>
</div>
<div className='descri-grid'>
    <p>Description</p>
</div>
<div className='line-grid2'>
<p>|</p>
</div>
<div className='action-grid'>
    Action
</div>
</div>
        </div>
    </div>
    </div>
  )
}


