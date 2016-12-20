//purpose is to render a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render () {
    return(
      <ul className='list-group col-sm-4'>

          {this.renderList()}

      </ul>
    )
  }
}

function mapStateToProps(state) {
  //array of books and active book from state
  //whatever is in the return statement will be set equal to this.props
  return {
    //want to return the array of books
    books: state.books,

  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//make use of the connect fn imported at top
//take component, and mapStateToProps fn and return it to container
//this is why we deleted the export default statement above

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//
