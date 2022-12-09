import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Model = ({isOpen , modelHandler}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
const fileUpload =(event)=>{
console.log(event.target.files[0])
}
 
  return (
    <>
     
      <Modal title="Basic Modal" open={isOpen}  onCancel = {modelHandler}>
        <input type="file" onChange={fileUpload} />
    <input type="text" />
      </Modal>
    </>
  );
};
export default Model;