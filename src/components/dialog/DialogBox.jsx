import React from 'react'

import { Modal } from 'react-bootstrap'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';

function DialogBox(props) {

    const { show, onHide, state, message } = props

    function getModalTitle() {
        if(state === "success") {
            return (
                <>
                    <CheckCircleIcon />
                    <span>Success</span>
                </>
            )
        } else if(state === "error") {
            return (
                <>
                    <ErrorIcon />
                    <span>Error</span>
                </>
            )
        } else if(state === "warning") {
            return (
                <>
                    <WarningIcon />
                    <span>Warning</span>
                </>
            )
        }
    }

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={`${state}-modal`}>
          <Modal.Title id="contained-modal-title-vcenter">
            {getModalTitle()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {message}
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  export default DialogBox