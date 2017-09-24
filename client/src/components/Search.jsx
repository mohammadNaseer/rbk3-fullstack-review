import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value

    });
  }

  search(term) {
    console.log('Hiiiiiiiiiiiii')
     //this.props.onSearch(this.state.term);
    $.ajax({
      url: 'http://127.0.0.1:1128/repos/import',
      type :'POST',
      data: this.state.term,
      dataType:'json',
      error: function(error){
        console.log(error)
      }
    })
  }

  fetch() {
    $.ajax({
      url: '127.0.0.1:1128/repos/import',
      type :'GET',
      dataType:'json',
      contentType:'application/json',
      success: function(data){
        console.log(data)
        this.setState({repos:data})

      }.bind(this),


      error: function(error){
        console.log(error)
      }
    })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;