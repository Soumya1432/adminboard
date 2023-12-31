import React from 'react';
import "./navbar1.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

function Navbar() {

  return (
    <div className="navbar"><h2>Adminboard</h2>
    <div className="wrapper">
      <div className='search'>
        <input type="text" placeholder='Search..' />
    <SearchIcon/>
      </div>
 <div className='items'>

     <div className='item'>
     <LanguageOutlinedIcon  className='icon' />
     English
     </div>
     
     <div className='item'>
     <DarkModeOutlinedIcon  className='icon' />
     </div>

     
     <div className='item'>
     <FullscreenExitOutlinedIcon  className='icon'  />
     
     </div>
     
     <div className='item'>
     <NotificationsOffOutlinedIcon  className='icon' />
     <div className='counter'>1</div>
     </div>

     <div className='item'>
     <ChatBubbleOutlineOutlinedIcon  className='icon' />
     <div className='counter'>2</div>
     </div>

     <div className='item'>
     <ListOutlinedIcon  className='icon' />
     </div>

     <div className='item'>
      <img src="https://images.pexels.com/photos/17739178/pexels-photo-17739178/free-photo-of-man-in-shirt-working-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      className='avatar' />
     </div>
 </div>

    </div>
  </div>

  )
}

export default Navbar
