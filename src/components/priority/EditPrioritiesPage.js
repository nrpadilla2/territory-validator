import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as priorityActions from '../../redux/actions/priorityActions';
import { NAME, PHONE, POSTAL_CODE, STREET_ADDRESS } from '../../shared/constants';
import PriorityPicker from './PriorityPicker';

const EditPrioritesPage = ({ actions, services, priorities }) => {
  console.log(actions, services, priorities);

  const enabledServices = useMemo(() => {
    if (!services || !services.length) {
      return [];
    }

    return services.filter((s) => s.isEnabled);
  }, [services]);

  const hasEnabledServices = useMemo(() => {
    if (!services || !services.length) {
      return false;
    }

    return enabledServices.length;
  }, [services]);

  return (
    <Container>
      <Row>
        <h4>Set Priority</h4>
        <p>
          Set the priority order for each of Name, Address and Phone. The priority order will be
          used to set the initial values for each field. You will be able to override the selections
          before exporting the territory.
        </p>
      </Row>
      {hasEnabledServices ? (
        <Row>
          <PriorityPicker field={NAME} services={enabledServices} />
          <PriorityPicker field={STREET_ADDRESS} services={enabledServices} />
          <PriorityPicker field={POSTAL_CODE} services={enabledServices} />
          <PriorityPicker field={PHONE} services={enabledServices} />
        </Row>
      ) : (
        <Card border='danger'>
          <Card.Header className='text-danger'>No enabled services.</Card.Header>
          <Card.Body>
            You have not enabled any services. Please <Link to='/services'>click here</Link> to
            select the services you would like to retrieve data from.
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

EditPrioritesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
  priorities: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    priorities: state.priorities,
    services: state.services,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(priorityActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPrioritesPage);
