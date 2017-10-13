import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export function ChannelList(props) {
  const messages = props.messages;
    return (
      <ul>
      {
        props.channels.map(channel => (
          <li key={channel.id}>
          <NavLink to={channel.name} activeClassName="active">
            <span>{channel.name}</span>
            <span className="badge">{ messages.filter(message => message.channelId === channel.id).length }</span>
          </NavLink>
        </li>
        ))
      }
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
}

/** Write your `connect` component below! **/

function mapStateToProps(state) {
  return { channels: state.channels, messages: state.messages }
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList);
export default ChannelListContainer;
