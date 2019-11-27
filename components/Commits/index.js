import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withRouter} from 'react-router';

import withHeader from '../../HOCs/withHeader';
import fetchGithubAPI from '../../lib/apiClient';

class Commits extends Component {
  async componentDidMount() {
    const {
      location: {
        state: {owner, repository},
      },
    } = this.props;
    const data = await fetchGithubAPI(owner, repository);
    console.log({data});
  }

  render() {
    return (
      <View>
        <Text>I'm Commits component</Text>
      </View>
    );
  }
}

export default withHeader({title: 'Commits'})(withRouter(Commits));
