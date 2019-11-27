import React, {PureComponent} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const wrapperStyle = {
  alignItems: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  flex: 1,
  height: '100%',
};

const containerStyle = {
  alignItems: 'center',
  height: 50,
  justifyContent: 'center',
  paddingHorizontal: 0,
  width: '100%',
};

const centerContainerStyle = {paddingRight: 20};

const withHeader = ({title = ''}) => WrappedComponent => {
  class HOC extends PureComponent {
    goHome = () => this.props.history.replace('/');
    goBack = () => this.props.history.goBack();

    leftRightComponent = (name, size, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size} color="#fff" />
      </TouchableOpacity>
    );

    centerComponent = title => ({
      text: title.toUpperCase(),
      style: {color: '#fff'},
    });

    render() {
      return (
        <SafeAreaView style={wrapperStyle}>
          <Header
            containerStyle={containerStyle}
            centerContainerStyle={centerContainerStyle}
            leftComponent={this.leftRightComponent(
              'chevron-left',
              20,
              this.goBack,
            )}
            centerComponent={this.centerComponent(title)}
            rightComponent={this.leftRightComponent('home', 25, this.goHome)}
          />
          <WrappedComponent />
        </SafeAreaView>
      );
    }
  }

  return HOC;
};

export default withHeader;
