import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ShowMemberModal({handleClose, handleShow, show, memberData}) {
  return (
      <Modal show={show} onHide={handleClose}  className='showMemberModal'>
        <Modal.Header closeButton>
          <Modal.Title className='position-relative'>Project Members
            <span className='bottom-bar'></span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='slim-scroll'>
          <ul>
            {
              memberData.map((data, index) => {
                return <li key={index}>
                  <img alt='aaa' src={data.img} />
                  <div>
                    <h6>{data.name}</h6>
                    <p>{data.email}</p>
                  </div>
                </li>
                })
            }
          </ul>
        </Modal.Body>
      </Modal>
  );
}

