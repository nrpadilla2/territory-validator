import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Container, Row, Stack, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as serviceActions from '../../redux/actions/serviceActions';
import ConfigureServiceModal from './ConfigureServiceModal';

const EditServicesPage = ({ services, actions }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleConfigure = (service) => {
    setActiveService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    setModalOpen(false);
    actions.updateService({
      ...activeService,
      apiKey: event.target.apiKey.value,
      isEnabled: true,
    });
    setActiveService(null);
  };

  const handleBasicServiceAdd = (service) => {
    actions.updateService({
      ...service,
      isEnabled: true,
    });
  };
  const handleAdd = (service) => {
    if (service.requiresApiKey) {
      handleConfigure(service);
    } else {
      handleBasicServiceAdd(service);
    }
  };

  const handleRemove = (service) => {
    actions.updateService({
      ...service,
      isEnabled: false,
      apiKey: null,
    });
  };

  const renderButton = (service) => {
    if (service.isEnabled) {
      return (
        <>
          <Button className='float-right' variant='danger' onClick={() => handleRemove(service)}>
            Remove
          </Button>
        </>
      );
    }

    return (
      <Stack direction='horizontal' gap={1}>
        <Button className='float-right' variant='primary' onClick={() => handleAdd(service)}>
          {service.requiresApiKey ? 'Configure' : 'Add'}
        </Button>
      </Stack>
    );
  };

  return (
    <Container>
      <Row>
        <h4>Configure Services</h4>
        <p>Please select which service should be searched.</p>
      </Row>
      <Row className='service-table'>
        <Table responsive>
          <thead>
            <tr>
              <td>#</td>
              <td>Service Name</td>
              <td>Data Available</td>
              <td>Option</td>
            </tr>
          </thead>
          <tbody>
            {services &&
              services.map((service) => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>
                    {service.name}
                    <Link to={service.url} className='mx-2' target='_blank'>
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </Link>
                    {service.requiresApiKey && <div className='text-danger'>Requires API Key</div>}
                  </td>
                  <td>
                    <ul>
                      {service.parsedData && service.parsedData.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </td>
                  <td>{renderButton(service)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
      <Row className='mt-3'>
        <Stack direction='horizontal' gap={3}>
          <Link to='/request' className='w-100'>
            Don&#39;t see a service? Request it.
          </Link>
          <div className='vr' />
          <Button variant='success'>Next</Button>
        </Stack>
      </Row>
      <Row>
        {modalOpen && (
          <ConfigureServiceModal
            service={activeService}
            isOpen={modalOpen}
            handleSave={handleModalSubmit}
            handleClose={handleCloseModal}
          />
        )}
      </Row>
    </Container>
  );
};

EditServicesPage.propTypes = {
  services: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    services: state.services,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(serviceActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditServicesPage);
