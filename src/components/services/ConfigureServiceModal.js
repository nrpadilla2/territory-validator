import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ConfigureServiceModal = ({ service, handleSave, handleClose, isOpen = false }) => {
  return (
    <Modal show={isOpen}>
      <Modal.Body>
        <Form onSubmit={handleSave}>
          <Form.Group controlId='apiKey'>
            <Form.Label>Please enter the API key to use with {service.name}</Form.Label>
            <Form.Control type='text' name='apiKey' placeholder='API Key' required />
          </Form.Group>
          <Form.Group>
            <Button className='mt-2 float-right' variant='primary' type='submit'>
              Add
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfigureServiceModal.propTypes = {
  service: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ConfigureServiceModal;
