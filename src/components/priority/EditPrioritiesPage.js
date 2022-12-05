import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as priorityActions from '../../redux/actions/priorityActions';
import { ADDRESS, NAME, PHONE, ZIP } from '../../shared/constants';
import PriorityPicker from './PriorityPicker';

const fields = [NAME, ADDRESS, ZIP, PHONE];

const EditPrioritesPage = ({ services, priorities, actions }) => {
  const [selectedServiceId, setSelectedServiceId] = useState();
  const [orderedPriorities, setOrderedPriorities] = useState([]);
  const [field, setField] = useState(fields[0]);

  const enabledServices = useMemo(() => {
    return services.filter((s) => s.isEnabled && s.parsedData.includes(field));
  }, [services, field]);

  const hasEnabledServices = useMemo(() => {
    return enabledServices && enabledServices.length;
  }, [services]);

  const orderedServices = useMemo(() => {
    const _orderedServices = [];

    //Add services that are already ordered.
    orderedPriorities.forEach((id) => {
      const found = enabledServices.find((s) => s.id == id);
      if (found) {
        _orderedServices.push(found);
      }
    });

    //Account for services enabled after order generated
    enabledServices.forEach((s) => {
      const found = _orderedServices.find((o) => s.id == o.id);
      if (!found) {
        _orderedServices.push(s);
      }
    });

    return _orderedServices;
  }, [enabledServices, orderedPriorities]);

  const getIndex = () => {
    return orderedPriorities.indexOf(selectedServiceId);
  };

  useEffect(() => {
    const fieldPriorities = priorities.get(field);
    if (fieldPriorities && fieldPriorities.length) {
      setOrderedPriorities([...priorities.get(field)]);
    } else {
      setOrderedPriorities(enabledServices.map((s) => s.id));
    }
  }, [field, services, priorities]);

  const handleMoveUp = () => {
    const idx = getIndex();
    if (idx == 0) {
      return;
    }

    const newOrderedPriorities = orderedPriorities.slice();
    newOrderedPriorities[idx] = newOrderedPriorities[idx - 1];
    newOrderedPriorities[idx - 1] = selectedServiceId;

    actions.updatePriorities(field, newOrderedPriorities);
  };

  const handleMoveDown = () => {
    console.log('moved down');
    const idx = getIndex();
    if (idx == orderedPriorities.length - 1) {
      return;
    }

    const newOrderedPriorities = orderedPriorities.slice();
    newOrderedPriorities[idx] = orderedPriorities[idx + 1];
    newOrderedPriorities[idx + 1] = selectedServiceId;

    actions.updatePriorities(field, newOrderedPriorities);
  };

  const handleSubmit = () => {
    actions.updatePriorities(field, orderedPriorities);

    const idx = fields.indexOf(field);

    if (idx + 1 == fields.length) {
      alert('Navigate');
    } else {
      setField(fields[idx + 1]);
    }
  };

  const handleBack = () => {
    const idx = fields.indexOf(field);

    if (idx == 0) {
      return;
    } else {
      setField(fields[idx - 1]);
    }
  };

  return (
    <Container>
      <Row>
        <h4>Set Priority</h4>
        <p>
          Set the priority order for <strong>{field}</strong>. The priority order will be used to
          set the initial value for each result. For example, if the priority order is set to
          service C, then A, then B, <strong>{field}</strong> will be pulled first from C. If the
          data is not available from service C, then it will be pulled from service A and so on. You
          will be able to override the selections for each result individually before exporting the
          territory.
        </p>
      </Row>
      {hasEnabledServices ? (
        <>
          <Row>
            <PriorityPicker
              services={orderedServices}
              selectedId={selectedServiceId}
              onSelectionChange={setSelectedServiceId}
              onMoveUp={handleMoveUp}
              onMoveDown={handleMoveDown}
            />
          </Row>
          <Row>
            <Button variant='success' onClick={handleBack}>
              Back
            </Button>
            <Button variant='success' onClick={handleSubmit}>
              Next
            </Button>
          </Row>
        </>
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
  priorities: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    services: state.services,
    priorities: state.priorities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(priorityActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPrioritesPage);
