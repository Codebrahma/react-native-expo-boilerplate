import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import globalStyles from './../styles/index';
import { GREEN } from './../styles/colors';
import { loadApp } from './../actions/app';

const styles = StyleSheet.create({
  welcomeText: {
    color: GREEN,
  },
});

class Home extends React.Component {
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <View style={[
          globalStyles.container,
          globalStyles.center,
        ]}
      >
        <Text style={styles.welcomeText}>
          Welcome! Your app loaded!
        </Text>
      </View>
    );
  }
}

Home.propTypes = {
  loadApp: PropTypes.func.isRequired,
};

const mapDispatchToProps = { loadApp };

export default connect(null, mapDispatchToProps)(Home);
