import React, { useState } from 'react';
import { db } from '../../firebase/firebase-config'; // Ensure the firebase config file is correctly imported
import { collection, addDoc } from '@firebase/firestore';
import Modal from 'react-modal'; // You can use a modal library like react-modal
import "./Form.css"

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create or reference the 'contacts' collection
            await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                message: message
            });

            // Show the modal upon successful submission
            setIsModalOpen(true);

            // Clear the form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.error("Error adding document: ", err);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='contactForm'>
            <form onSubmit={handleSubmit}>
                <div className='textField'>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='textField'>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='textField'>
                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* Modal for confirmation */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Message Sent Confirmation"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#c38c31',
                        color:'white'
                    },
                }}
            >
                <h2>Message Sent</h2>
                <p>Thank you for reaching out! We will get back to you soon.</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Form;
