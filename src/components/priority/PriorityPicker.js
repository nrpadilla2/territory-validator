import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';

const PriorityPicker = ({ services, selectedId, onSelectionChange, onMoveUp, onMoveDown }) => {
  return (
    <Container className='picker-container'>
      <Row>
        <Col>
          <ListGroup as='ol' numbered>
            {services &&
              services.map((s) => (
                <ListGroup.Item
                  key={s.id}
                  active={s.id == selectedId}
                  onClick={() => onSelectionChange(s.id)}
                >
                  {s.name}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
        <Col xs={1}>
          <Stack gap={2}>
            <Button variant='success' onClick={onMoveUp} disabled={!selectedId}>
              <FontAwesomeIcon icon={faChevronUp} />
            </Button>
            <Button variant='success' onClick={onMoveDown} disabled={!selectedId}>
              <FontAwesomeIcon icon={faChevronDown} />
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

PriorityPicker.propTypes = {
  services: PropTypes.array.isRequired,
  selectedId: PropTypes.number,
  onSelectionChange: PropTypes.func.isRequired,
  onMoveUp: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func.isRequired,
};

export default PriorityPicker;
