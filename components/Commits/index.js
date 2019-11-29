import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {withRouter} from 'react-router';

import withHeader from '../../HOCs/withHeader';
import fetchGithubAPI from '../../lib/apiClient';
import CommitList from './CommitList';

class Commits extends Component {
  state = {
    loading: false,
    data: null,
  };

  async componentDidMount() {
    this.setState({loading: true});

    const {
      location: {
        state: {owner, repository},
      },
    } = this.props;
    const data = await fetchGithubAPI(owner, repository);
    console.log({data});

    this.setState({loading: false, data});
  }

  render() {
    const {loading, data} = this.state;

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {data && !data.message && <CommitList commits={data} />}
        {data && data.message && <Text>{data.message}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withHeader({title: 'Commits'})(withRouter(Commits));
