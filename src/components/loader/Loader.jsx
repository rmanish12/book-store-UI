import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'

import '../../index.css'

function Loader(props) {

    const { show } = props

    return (
      <Modal
        show={show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
            <div className="align-center">
                <div className="loader"><Spinner animation="grow" /></div>
            </div>
        </Modal.Body>

      </Modal>
    );
  }

export default Loader