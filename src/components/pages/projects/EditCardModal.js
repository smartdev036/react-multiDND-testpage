import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

export default function EditCardModal({ show, handleClose, item, applyEditCard }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  useEffect( () => {
    setTitle(item.title);
    setDescription(item.content);  
  }, [ item.title, item.content]);
  const handleApplyButton = () => {
    applyEditCard(title,description);
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}  placement='end' className='edit-card-canvas'>
        <Offcanvas.Header >
          <input className='form-control' value={title} onChange={e=>setTitle(e.target.value)} />   
          <span className='bottom-bar'></span>       
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='row'>
            <div className='col-sm-3'>
              Created By
            </div>
            <div className='col-sm-9'>
              <img alt='img' src={item.img} />
              <span>{item.name}</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-3'>
              Description
            </div>
            <div className='col-sm-9'>
              <textarea className='form-control' rows={6}  value={description} onChange={e=>setDescription(e.target.value)} />
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-primary btn-sm mx-2' onClick={handleApplyButton}>Apply</button>
            <button className='btn btn-danger btn-sm mx-2' onClick={handleClose}>Cancel</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

