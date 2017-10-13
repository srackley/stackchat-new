import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';


import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import the messages sub-reducer
import messages from './messages';
import channels from './channels';
import name from './name';
import newMessageEntry from './newMessageEntry';
import newChannelEntry from './newChannelEntry';

const reducer = combineReducers({
  messages,
  channels,
  name,
  newChannelEntry,
  newMessageEntry,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger(),
  )),
);

export default store;


export * from './messages';
export * from './channels';
export * from './name';
export * from './newMessageEntry';
export * from './newChannelEntry';
