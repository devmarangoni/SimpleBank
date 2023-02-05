import { useState } from "react";
import Modal from 'react-modal';
import { Form } from "./Form";
import "./style.css";

Modal.setAppElement("#root");

interface ModalsProps{
   textOfButton:String;
}

export function Modals({ textOfButton }:ModalsProps){
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
               className="mt-2 w-full h-36 border-2 border-solid border-black rounded-lg text-4xl bg-zinc-200 hover:bg-zinc-300"
               onClick={() => {openModal()}}
            >{ textOfButton }</button>
         <Modal
            isOpen={modalState}
            onRequestClose={closeModal}
            contentLabel="Example label"
            overlayClassName="modal-overlay"
            className="modal-content"
         >
            <div className="h-full w-full flex flex-wrap items-center justify-center -mx-3">
               <Form typeOfFunction={ textOfButton }/>
               <button className="text-3xl w-1/2 h-20 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Close</button>
            </div>  
         </Modal>
      </div>
   )
}