import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'
import LinkButton from '../../LinkButton'

function MyChoice(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Que voulez-vous ajouter ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LinkButton className="btn btn-lg btn-primary ml-5" to='/form'>Chambre</LinkButton>
          <button className="btn btn-lg btn-primary m-3">Appartement</button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function Ajouter() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button className="btn btn-primary m-3" variant="primary" onClick={() => setModalShow(true)}>
          Ajouter
        </Button>
  
        <MyChoice
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  