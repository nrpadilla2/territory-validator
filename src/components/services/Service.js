import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form, Modal, Row } from 'react-bootstrap';

const Service = ({ service, handleChangeService }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConfigure = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    setModalOpen(false);
    handleChangeService({
      ...service,
      apiKey: event.target.apiKey.value,
      isEnabled: true,
    });
  };

  const handleBasicServiceAdd = () => {
    handleChangeService({
      ...service,
      isEnabled: true,
    });
  };

  const handleRemove = () => {
    handleChangeService({
      ...service,
      isEnabled: false,
      apiKey: null,
    });
  };

  return (
    <>
      <div className='card'>
        <h4>{service.name}</h4>
        {service.parsedData.length && (
          <div>
            <h6>Parsed Data:</h6>
            <ul>
              {service.parsedData.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        )}
        {service.isEnabled ? (
          <Button variant='primary' onClick={handleRemove}>
            Remove
          </Button>
        ) : service.requiresApiKey ? (
          <>
            <div className='text-danger'>* Requires API Key</div>
            <Button variant='primary' onClick={handleConfigure}>
              Configure
            </Button>
          </>
        ) : (
          <Button variant='primary' onClick={handleBasicServiceAdd}>
            Add
          </Button>
        )}
      </div>
      {modalOpen && (
        <Modal show={modalOpen}>
          <Modal.Body>
            <Row>
              <Form onSubmit={handleModalSubmit}>
                <Form.Group controlId='apiKey'>
                  <Form.Label>Please enter the API key to use with {service.name}</Form.Label>
                  <Form.Control type='text' name='apiKey' placeholder='API Key' required />
                </Form.Group>
                <Form.Group>
                  <Button variant='primary' type='submit'>
                    Add
                  </Button>
                </Form.Group>
              </Form>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='Danger' onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
  handleChangeService: PropTypes.func.isRequired,
};

export default Service;
