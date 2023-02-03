import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement("#root");


export function Withdraw(){
   const [modalState, setModalState] = useState(false);

   function openModal(){
      setModalState(true);
   }

   function closeModal(){
      setModalState(false);
   }

   return (
      <div>
         <button 
               className="w-full h-36 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300"
               onClick={() => {openModal()}}
            >Withdraw</button>
         <Modal
            isOpen={modalState}
            onRequestClose={closeModal}
            contentLabel="Example label"
            overlayClassName="modal-overlay"
            className=""
         >
            <div>
               <h1>a modal esta aberta</h1>
               <button onClick={closeModal}>Close</button>
            </div>  
         </Modal>
      </div>
   )
}