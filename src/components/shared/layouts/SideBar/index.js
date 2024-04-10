import React from 'react';
import './index.scss';
import img_home from '../../../../assets/icons/home.svg';
import img_stats from '../../../../assets/icons/stats.svg';
import img_projects from '../../../../assets/icons/projects.svg';
import img_chat from '../../../../assets/icons/chat.svg';
import img_calendar from '../../../../assets/icons/calendar.svg';
import img_settings from '../../../../assets/icons/settings.svg';
import img_logout from '../../../../assets/icons/logout.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../actions/userAction';
import { useHistory } from 'react-router-dom';

function MainSidebar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout(history))
  }
  return ( 
    <div className='sidebar slim-scroll'>
      <div className='title'>
        <p>.taskez</p>
      </div>
      <div className='top-menu'>
        <ul>
          <li>
            <img src={img_home} alt='home' />
            Overview
          </li>
          <li>
            <img src={img_stats} alt='home' />
            Stats
          </li>
          <li className='active position-relative'>
            <img src={img_projects} alt='home' />
            Projects 
            <div className='vertical-bar'></div>
          </li>
          <li>
            <img src={img_chat} alt='home' />
            Chat
          </li>
          <li>
            <img src={img_calendar} alt='home' />
            Calendar
          </li>
        </ul>
      </div>
      <div className='bottom-menu'>
        <ul>
          <li>
            <img src={img_settings} alt='home' />
            Settings
          </li>
          <li onClick={handleLogout}>
            <img src={img_logout} alt='home'/>
              Log out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainSidebar;