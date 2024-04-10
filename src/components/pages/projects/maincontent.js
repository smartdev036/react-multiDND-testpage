import React, { useState } from 'react';
import img_member1 from '../../../assets/images/member1.png';
import img_member2 from '../../../assets/images/member2.png';
import img_member3 from '../../../assets/images/member3.png';
import img_member4 from '../../../assets/images/member4.png';
import img_member7 from '../../../assets/images/member7.png';
import img_member5 from '../../../assets/images/member5.png';
import img_search from '../../../assets/icons/search.svg';
import MultiDnD from './multi-dnd';
import ShowMemberModal from './showMemberModal';

const memberData = [
  {
    name: 'Saundarya',
    email: 'saundarya@idc.com',
    img: img_member5 
  },
  {
    name: 'Vaibhav',
    email: 'vaibhav@idc.com',
    img: img_member1 
  },
  {
    name: 'Sudhanshu',
    email: 'sudhanshu@idc.com',
    img: img_member2
  },
  {
    name: 'Shruti',
    email: 'shruti@idc.com',
    img: img_member3 
  },
  {
    name: 'Himanshu',
    email: 'himanshu@idc.com',
    img: img_member4
  },
  {
    name: 'Saundarya',
    email: 'saundarya@idc.com',
    img: img_member5 
  },
  {
    name: 'Vaibhav',
    email: 'vaibhav@idc.com',
    img: img_member1 
  },
]

function MainContent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( 
    <div className='main-content'>
      <div className='header row'>
        <div className='search col-sm-4 d-flex justify-content-start'>
          <p>
            <img src={img_search} alt='search' />
            Search
          </p>
        </div>
        <div className='member-img col-sm-4 d-flex justify-content-center' onClick={handleShow}>
          <img src={img_member7} alt='member'/>
          <img src={img_member4} alt='member'/>
          <img src={img_member3} alt='member'/>
          <img src={img_member2} alt='member'/>
          <img src={img_member1} alt='member'/>
        </div>
        <ShowMemberModal memberData={memberData} handleShow={handleShow} handleClose={handleClose} show={show}/>
        <div className='me col-sm-4 d-flex justify-content-end'>
          <p>
            Hi Saundarya 
            <img src={img_member5} alt='me' className='ms-3'/>
          </p>
        </div>
      </div>
      <MultiDnD />

    </div>

   );
}

export default MainContent;