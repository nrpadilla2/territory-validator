import { chunk } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serviceActions from '../../redux/actions/serviceActions';
import Service from './Service';

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height: height * 0.75,
  };
};

const EditServicesPage = ({ services, actions }) => {
  const [screenSize, setScreenSize] = useState(getWindowSize());
  const [numCols, setNumColumns] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    //this.props.actions.createConfig(this.state.config);
  };

  const handleOnChange = (service) => {
    actions.updateService(service);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize');
  }, []);

  useEffect(() => {
    let cols = 1;
    if (screenSize.width > 1200) {
      cols = 4;
    } else if (screenSize.width > 992) {
      cols = 3;
    } else if (screenSize.width > 768) {
      cols = 2;
    }

    setNumColumns(cols);
  }, [screenSize]);

  const rows = chunk(services, numCols);

  return (
    <>
      <h1>Configuration</h1>
      <p>Please select the services you would like to retrieve data from.</p>
      <div
        style={{
          height: screenSize.height,
          maxHeight: '50%',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {services &&
          rows.map((cols, idx) => (
            <Row key={`row-${idx}`}>
              <CardGroup key={`row-${idx}`}>
                {cols.map((service) => (
                  // <Col key={`col-${idx}`}>
                  <Service
                    key={service.id}
                    service={service}
                    handleChangeService={handleOnChange}
                  />
                  // </Col>
                ))}
              </CardGroup>
            </Row>
          ))}
      </div>
      <Button className='float-right mt-3' variant='primary' onClick={handleSubmit}>
        Next
      </Button>
    </>
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
