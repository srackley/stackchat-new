import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { postMessage, writeMessage } from '../store';

export function NewMessageEntry (props) {
    return (
      <form id="new-message-form" onSubmit={props.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={props.newMessage}
            onChange={props.handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
}

function mapStateToProps(state, ownProps) {
  return { newMessage: state.newMessage }
}

function mapDispatchToProps(dispatch, ownProps) {
  return { handleChange (event) {
    const action = writeMessage(event.target.value);
    dispatch(action);
  },
    handleSubmit(event) {
      event.preventDefault();
      const name = event.target.content.value;
      dispatch(postMessage({name}, ownProps.history));
      dispatch(writeMessage(''));
    }

}
}

const newMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry);
export default newMessageContainer;
