import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
import Home from './components/home';
import Loading from './components/loading';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeCreated: false,
      store: null,
    };
  }

  componentDidMount() {
    configureStore()
      .then(store => this.setState({ store, storeCreated: true }));
  }

  render() {
    if (!this.state.storeCreated) {
      return (<Loading />);
    }

    return (
      <Provider store={this.state.store}>
        <Home />
      </Provider>
    );
  }
}

export default Root;
