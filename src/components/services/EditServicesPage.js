import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serviceActions from '../../redux/actions/serviceActions';
import Service from './Service';

const EditServicesPage = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //this.props.actions.createConfig(this.state.config);
  };

  const handleOnChange = (service) => {
    props.actions.updateService(service);
  };

  return (
    <>
      <h1>Configuration</h1>
      <p>Please select the services you would like to retrieve data from.</p>
      {props.services &&
        props.services.map((s) => (
          <Service key={s.id} service={s} handleChangeService={handleOnChange} />
        ))}

      <input type='submit' value='Next' onClick={handleSubmit} />
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
