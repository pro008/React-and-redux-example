import React from "react"

import { hashHistory } from "react-router"
import { connect } from "react-redux"

import { fetchGetID } from "../../actions/userActions"

@connect((store) => {
  return {
    book: store.user.book,
    userFetched: store.user.fetched,
    errorL: store.user.error,
  };
})
export default class BookEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', description: '', price: ''};

    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    const self = this.state
    this.props.dispatch(fetchGetID(
      this.props.params.id, self.name, self.description, self.price))
  }

  handleChangeN(event) {
    this.setState({name: event.target.value});
  }

  handleChangeD(event){
  	this.setState({description: event.target.value})
  }

  handleChangeP(event) {
    this.setState({price: event.target.value});
  }

  handleSubmit(event) {
    const that = this;
    axios.patch(`http://210.211.117.57/books/${this.props.params.id}`, 
      {name: this.state.name, description: this.state.description, price: this.state.price})
      .then(function (response) {
        console.log(response);
        if( response.status === 200) {
          that.props.history.push('/');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
     <form  class="form-horizontal" role= "form" onSubmit={this.handleSubmit}>

      <div class="form-group">
        <div class="control-label col-sm-2">
          <label>
            Title:
          </label>
        </div>
        <div class="col-sm-8">    
          <input class="form-control" type="text" value={this.state.name} onChange={this.handleChangeN} />
        </div>
      </div>

      <div class="form-group">
        <div class="control-label col-sm-2">
          <label>
            Description:
          </label>
        </div>
        <div class="col-sm-8">    
          <textarea class="form-control" type="text" value={this.state.description} onChange={this.handleChangeD} cols="40" rows="5"></textarea>
        </div>
      </div>

      <div class="form-group">
        <div class="control-label col-sm-2">
          <label>
            Price:
          </label>
        </div>
        <div class="col-sm-8">    
          <input class="form-control" type="text" value={this.state.price} onChange={this.handleChangeP} />
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
      <input class="btn btn-lg btn-xlarge" type="submit" value="Submit" />
        </div>
      </div>

    </form>
    );
  }
}

