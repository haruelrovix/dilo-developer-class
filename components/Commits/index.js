import React, {Component} from 'react';
import {Text, View} from 'react-native';

import withHeader from '../../HOCs/withHeader';

class Commits extends Component {
  render() {
    return (
      <View>
        <Text>I'm Commits component</Text>
      </View>
    );
  }
}

export default withHeader({title: 'Commits'})(Commits);
