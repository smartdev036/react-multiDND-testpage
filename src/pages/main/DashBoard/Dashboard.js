import React from 'react'
import MainContent from '../../../components/pages/projects/maincontent';
import MainSidebar from '../../../components/shared/layouts/SideBar';
import "./Dashboard.scss";

function Dashboard() {

  return (
      <div className='Dashboard'>
        <div className='d-flex'>
          <MainSidebar />
          <div className='empty-sideBar'></div>
          <MainContent />
        </div>
      </div>
      );
}


export default Dashboard;
