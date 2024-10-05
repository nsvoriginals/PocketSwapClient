import React, { useState } from 'react';
import { buttonVariants, Button } from "./button";
import Modal from "./SendModal";

export const Send = ({ user ,id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
    };

    return (
        <div className="shadow-xl m-10 border-bla">
            <div className="flex justify-between items-center m-10 p-5">
                <h1 className="text-2xl">{user}</h1>
                <Button className="justify-self-center items-center" onClick={openModal}>
                    Send
                </Button>
            </div>
            <Modal name={user} isOpen={isModalOpen} onClose={closeModal} id={id}/> 
        </div>
    );
};
