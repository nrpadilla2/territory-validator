import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Service = ({ service, handleChangeService }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const handleConfigure = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = () => {
    handleChangeService({
      ...service,
      apiKey: apiKey,
      isEnabled: true,
    });
  };

  const handleBasicServiceAdd = () => {
    handleChangeService({
      ...service,
      isEnabled: true,
    });
  };

  const handleApiKeyChange = ({ target }) => {
    setApiKey(target.value);
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
          <button className='btn btn-primary' onClick={() => handleRemove()}>
            Remove
          </button>
        ) : service.requiresApiKey ? (
          <>
            <div className='text-danger'>* Requires API Key</div>
            <button className='btn btn-primary' onClick={() => handleConfigure()}>
              Configure
            </button>
          </>
        ) : (
          <button className='btn btn-primary' onClick={() => handleBasicServiceAdd()}>
            Add
          </button>
        )}
      </div>
      {modalOpen && (
        <Modal show={modalOpen}>
          <Modal.Body>
            <p>Please enter the API key to use with {service.name}</p>
            <input type='text' onChange={handleApiKeyChange} value={apiKey} />
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleModalSubmit}>Add</button>
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
