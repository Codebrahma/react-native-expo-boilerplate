import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const createAppStore = applyMiddleware(thunk)(createStore);

const configStore = async () => {
  const store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, { storage: AsyncStorage });
  return store;
};

export default configStore;
