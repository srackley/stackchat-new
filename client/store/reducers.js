

import {
  UPDATE_NAME,
  GET_MESSAGES,
  GET_MESSAGE,
  WRITE_MESSAGE,
  GET_CHANNELS,
  WRITE_CHANNEL_NAME,
  GET_CHANNEL
} from '../store';

// INITIAL STATE

const initialState = {
  messages: [],
  name: 'Reggie',
  newMessageEntry: '',
  channels: [],
  newChannel: ''
};

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };
    case GET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    default:
      return state
  }
}

export function channelsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: [...state.channels, ...action.channels]
      };
     case GET_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.channel]
      };
    default:
      return state;
  }
}

export function newChannelReducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_CHANNEL_NAME:
      return {
        ...state,
        newChannel: action.channel
      };
    default:
      return state;
  }
}

export function newMessageReducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_MESSAGE:
      return {
        ...state,
        newMessageEntry: action.content
      };
    default:
      return state;
  }
}

export function nameReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      }
    default:
      return state
    }
}

