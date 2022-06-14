import { useState } from 'react';
import Modal from '../modal/modal';

export default function NullComponent({ preview, componentName, componentData }) {
    const [showModal, setShowModal] = useState(false);
    
    if (preview) {
        return (
            <div>
                <p>Component {componentName} not implemented.</p>
                <button onClick={() => setShowModal(true)}>Show component data</button>
                <Modal onClose={() => setShowModal(false)}
                   show={showModal}>
                       <div><pre>{JSON.stringify(componentData, null, 2) }</pre></div>
                </Modal>
            </div>
            
        )
    }
    return (
        <></>
    )
}