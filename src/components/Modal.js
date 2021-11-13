import { Button, Modal} from "react-bootstrap";
function SubmitTrans(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Transaction Successful!
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button onClick="./Transaction"> Another Transaction </button>
          <button onClick="./Home">Return to Home</button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
       
      </Modal>
    </div>
  );
}

{/*function MyVerticallyCenteredModal(props) {
    return (
      
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        
          
        
      </Modal>
    );
  }
  
  function Submitted() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }*/}

export default SubmitTrans;