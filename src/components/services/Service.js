import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';

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

  const handleAdd = () => {
    if (service.requiresApiKey) {
      handleConfigure();
    } else {
      handleBasicServiceAdd();
    }
  };

  const handleRemove = () => {
    handleChangeService({
      ...service,
      isEnabled: false,
      apiKey: null,
    });
  };

  const renderButton = () => {
    if (service.isEnabled) {
      return (
        <Button className='float-right' variant='danger' onClick={handleRemove}>
          Remove
        </Button>
      );
    }

    return (
      <Button className='float-right' variant='primary' onClick={handleAdd}>
        {service.requiresApiKey ? 'Configure' : 'Add'}
      </Button>
    );
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Link href={service.url}>{service.name}</Card.Link>
          {service.requiresApiKey && (
            <Card.Text className='text-danger'>Requires API key</Card.Text>
          )}
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>Parsed Data:</Card.Subtitle>
          {service.parsedData &&
            service.parsedData.map((p) => (
              <Card.Text style={{ margin: '0 1rem' }} key={p}>
                {p}
              </Card.Text>
            ))}
        </Card.Body>
        <Card.Footer>{renderButton()}</Card.Footer>
      </Card>
      {modalOpen && (
        <Modal show={modalOpen}>
          <Modal.Body>
            <Form onSubmit={handleModalSubmit}>
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
            <Button variant='danger' onClick={handleCloseModal}>
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
