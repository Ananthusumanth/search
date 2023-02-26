import React from 'react'
import Content from './Components/Content'
import SideMenu from './Components/SideMenu';






function Sai() {
 
  
  
  return (
    <div className='homemenu'>
      <div   style={{display: "flex", flexDirection: "col"}}>
        <SideMenu/>
        <Content />
        
      </div>
    </div>
  )}
    

export default Sai;
