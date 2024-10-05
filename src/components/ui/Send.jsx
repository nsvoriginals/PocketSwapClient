import React, { useState } from 'react';
import { buttonVariants, Button } from "./button";
import Modal from "./SendModal";

export const Send = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="shadow-xl m-10 border-bla">
            <div className="flex justify-between items-center m-10 p-5">
                <h1 className="text-2xl">{user}</h1>
                <Button className="justify-self-center items-center" onClick={openModal}>
                    Send
                </Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Render modal based on state */}
        </div>
    );
};
