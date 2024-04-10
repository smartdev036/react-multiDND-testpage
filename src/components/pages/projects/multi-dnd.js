import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import img_filter from '../../../assets/icons/filter.svg';
import img_message from '../../../assets/icons/message.svg';
import img_member1 from '../../../assets/images/member1.png';
import img_member2 from '../../../assets/images/member2.png';
import img_member3 from '../../../assets/images/member3.png';
import img_member4 from '../../../assets/images/member4.png';
import img_member5 from '../../../assets/images/member5.png';
import img_member7 from '../../../assets/images/member7.png';

import img_apply from '../../../assets/icons/apply.png';
import img_decline from '../../../assets/icons/decline.png';

import EditCardModal from './EditCardModal'

const itemsFromBackend = [
  {
    id: '1',
    title: "Design App",
    content: "Modifying Career, Scholarship and Enhance exam screen Acc to new design pattern",
    name: 'Saundarya',
    img: img_member1,
  },
  {
    id: '2',
    title: "Design App",
    content: "Modifying Career, Scholarship and Enhance exam screen Acc to new design pattern",
    name: 'Vaibhav',
    img: img_member3,
  },
  {
    id: '3',
    title: "Design App",
    content: "Modifying Career, Scholarship and Enhance exam screen Acc to new design pattern",
    name: 'Sudhanshu',
    img: img_member2,
  },
];

const itemsFromBackend2 = [
  {
    id: '21',
    title: "Design App",
    content: "Modifying Career, Scholarship and Enhance exam screen Acc to new design pattern",
    img: img_member4,
    name: 'Shruti',
  },
  {
    id: '22',
    title: "Design App",
    content: "Modifying Career, Scholarship and Enhance exam screen Acc to new design pattern",
    img: img_member5,
    name: 'Himanshu',
  },
];

const columnsFromBackend = {
  '11': {
    name: "To do",
    items: itemsFromBackend,
  },
  '12': {
    name: "In progress",
    items: itemsFromBackend2,
  },  
  '13': {
    name: "Completed",
    items: [],
  }  
}

const onDragEnd = (result, columns, setColumns) => {
  if(!result.destination) return;
  const {source, destination} = result;

  if(source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [ removed ] = sourceItems.splice(source.index,1);
    destItems.splice(destination.index,0,removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns( {
      ...columns, 
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}



function MultiDnD() {

  const [columns, setColumns] = useState(columnsFromBackend);

  const user = useSelector( state => state.user.user)

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const [show, setShow] = useState([false, false, false]);
  const handleClose = () => {
    setShow([false, false, false]);    
    setNewTitle('')
    setNewContent('')
  }
  const handleShow = (index) => {
    setNewTitle('')
    setNewContent('')
    let copiedShow = [false, false,false];
    copiedShow[index] = true;
    setShow(copiedShow);
  }

  const handleApply = (droppableId) => {
    if(!newTitle || !newContent) return;
    setColumns( {
      ...columns, 
      [droppableId]: {
        ...columns[droppableId],
        items: [...columns[droppableId].items, {
          id: uuidv4(),
          title: newTitle,
          content: newContent,
          img: img_member7, 
          name: user.fullName
        } ]
      }
    })
    handleClose();
  }

  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditModalShow = () => setShowEditModal(true);

  const [editColumnId, setEditcolumnId] = useState(0);
  const [editItem, setEditItem] = useState({
    title: '',
    description: '',
  });

  const editCardByModal = (columnId, item) => {
    setEditcolumnId(columnId);
    setEditItem(item);
    handleEditModalShow();
  }

  const applyEditCard = (title,description) => {

    const column = columns[editColumnId];
    const copiedItems = [...column.items];
    const index = copiedItems.findIndex(item => item.id === editItem.id);
    copiedItems[index].title = title;
    copiedItems[index].content = description;

    setColumns( {
      ...columns, 
      [editColumnId]: {
        ...column,
        items: copiedItems
      }
    })
    handleEditModalClose();
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className='row multi-dnd' >
      <div className='d-flex justify-content-between mt-5 header'>
        <h4>Projects</h4>
        <div className='d-flex'>
          <img src={img_filter} alt='filter' className='me-2'/>
          <h6>Filter</h6>
        </div>
      </div>

      <EditCardModal show={showEditModal} item={editItem} handleShow={handleEditModalShow} handleClose={handleEditModalClose} applyEditCard={applyEditCard}/>

      <div className='row'>
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          {
            Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div key={columnId} className='col-sm-4'>
                    <Droppable droppableId={columnId} key={columnId}>
                      {
                        (provided, snapshot) => {
                          return (
                            <div 
                            { ...provided.droppbleProp }
                            ref = {provided.innerRef}
                            className='cards-box'>
                              <div className='header'>
                                <h6>{column.name}</h6>
                                <div className='card-count'>
                                  {column.items.length}
                                </div>
                              </div>

                              <button className='cardNew' onClick={()=>handleShow(index)}>+</button>

                              {/* Add New Card---index: 0, 1, 2 */}
                              {
                                show[index] === true 
                                  ? <div 
                                      className='drag-card newCard'
                                    >
                                      <input placeholder='Give your task a titile' className='newTitle' onChange={e=>setNewTitle(e.target.value)}>
                                      </input>
                                      <textarea className='newConent' placeholder='description...' rows={4} onChange={e=>setNewContent(e.target.value)}>
                                      </textarea>
                                      <div className='footer newTask'>
                                        <img src={img_message} alt='who' className='who'/>
                                        <span>
                                          <img src={img_decline} alt='msg' className='msg' onClick={handleClose}/>
                                          <img src={img_apply} alt='msg' className='msg' onClick={()=>handleApply(columnId)}/>
                                        </span>
                                      </div>
                                    </div>
                                  : ""
                              }

 
                               {column.items.map((item, index) => {
                                return (
                                  <Draggable 
                                    key={item.id}
                                    draggableId={item.id}
                                    index = {index}
                                    >
                                    {
                                      (provided, snapshot) => {
                                        return (
                                          <div 
                                            ref = {provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className='drag-card'
                                            onDoubleClick={()=>editCardByModal(columnId, item)}
                                          >
                                            <h6>
                                              {item.title}
                                            </h6>
                                            <p>
                                              {item.content}
                                            </p>
                                            <div className='footer'>
                                              <img src={item.img} alt='who' className='who'/>
                                              <span>
                                                <p>1</p>
                                                <img src={img_message} alt='msg' className='msg'/>
                                              </span>
                                            </div>
                                          </div>
                                        )
                                      }
                                    } 
                                    </Draggable>
                                )
                              })}

                            </div>
                          )
                        }
                      }
                    </Droppable>
                </div>
              )
            })
          }
        </DragDropContext>
      </div>
    </div> 
  );

}

export default MultiDnD;