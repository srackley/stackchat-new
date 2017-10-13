
const WRITE_CHANNEL_NAME = 'WRITE_CHANNEL_NAME';

export function writeChannelName(channel) {
  const action = { type: WRITE_CHANNEL_NAME, channel };
  return action;
}

export default function newChannelReducer(state = '', action) {
  switch (action.type) {
    case WRITE_CHANNEL_NAME:
      return action.channel;
    default:
      return state;
  }
}
