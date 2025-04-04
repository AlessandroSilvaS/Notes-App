import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap"
import "../style/modal.css"
import React from "react"

interface ModalNoteProps{
    showProp: boolean,
    onHide: () => void
}

const ModalNote: React.FC<ModalNoteProps> = ({showProp, onHide}) => {
    return(
        <div>
        <Modal show = {showProp} onHide={onHide} className="modal-class">

                <ModalHeader closeButton>

                    <ModalTitle>
                        Create a Note!
                    </ModalTitle>

                </ModalHeader>

                <ModalBody>

                    <input type="text" placeholder="Title" className="title"/>

                    <textarea className="note-description" name="description" id="description" placeholder="Detail your note..."></textarea>

                </ModalBody>

                <ModalFooter>
                    <Button type="button" className="button-note">Create a note</Button>
                </ModalFooter>

        </Modal>
        </div>  
    )
}

export default ModalNote