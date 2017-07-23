import _ from 'lodash';
import React, { Component, PropTypes } from "react";

import { reduxForm } from 'redux-form'
import { hashHistory } from "react-router"
import { connect } from "react-redux"

import { fetchAdd } from "../../actions/userActions"

const FIELDS = {
  name: {
    id: 1,
    type: 'input',
    label: 'Title for Book'
  },
  description: {
    id: 2,
    type: 'textarea',
    label: 'Enter some description'
  },
  price: {
    id: 3,
    type: 'input',
    label: 'Cost of Book'
  }
};

//['name', 'description', 'price'];

class BookNew extends Component{
  onSubmit(props){
    alert('Post submitted');
    const self = this.state
    this.props.dispatch(fetchAdd(
      props.name, props.description, props.price))
  }

  renderField(fieldConfig, field){
    const fieldHelper = this.props.fields[field];

    return(
      <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`}>
        <div className="control-label col-sm-2">
          <label>
            {fieldConfig.label}:
          </label>
        </div>
        <div className="col-sm-8">
          <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        </div>
        <div className="col-sm-2 text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
     <form  className="form-horizontal" onSubmit={handleSubmit(props => this.onSubmit(props))}>
      <h3>Create a New Book</h3>

      {_.map(FIELDS, this.renderField.bind(this))}

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <input className="btn btn-lg btn-xlarge" type="submit" value="Submit" />
        </div>
      </div>
    </form>
    );
  }
}

function validate(values){
  const errors = {};
  _.each(FIELDS, (type, field) =>{
    if(!values[field]){
      errors[field] = `Enter a ${field}`
    }
  });

  return errors;
}

export default reduxForm({
  form: 'BookNew',
  fields: _.keys(FIELDS),
  validate
})(BookNew);
