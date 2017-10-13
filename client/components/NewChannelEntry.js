import React, { Component } from 'react';
import {connect} from 'react-redux';
import { writeChannelName, getChannel, postChannel } from '../store';

export function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannel} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

function mapStateToProps(state) {
  return { newChannel: state.newChannel }
}

function mapDispatchToProps(dispatch) {
  return { handleChange (event) {
    const action = writeChannelName(event.target.value);
    dispatch(action);
  },
    handleSubmit(event) {
      event.preventDefault();
      const name = event.target.channelName.value;
      dispatch(postChannel({name}));
    }

}
}

const newChannelContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default newChannelContainer;
