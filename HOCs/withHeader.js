import React, {PureComponent} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const containerStyle = {
  alignItems: 'center',
  height: Platform.select({ios: 80, android: 60}),
  justifyContent: 'center',
};

const buttonStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: 5,
  width: 40,
};

const textStyle = {color: '#fff'};

const centerContainerStyle = {paddingRight: 20};

const withHeader = ({title = ''}) => WrappedComponent => {
  class HOC extends PureComponent {
    goHome = () => this.props.history.replace('/');
    goBack = () => this.props.history.goBack();

    renderIcon = (name, size, onPress) => (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Icon name={name} size={size} color="#fff" />
      </TouchableOpacity>
    );

    centerComponent = () => ({
      text: title.toUpperCase(),
      style: textStyle,
    });

    render() {
      return (
        <>
          <Header
            containerStyle={containerStyle}
            centerContainerStyle={centerContainerStyle}
            leftComponent={this.renderIcon('chevron-left', 20, this.goBack)}
            centerComponent={this.centerComponent()}
            rightComponent={this.renderIcon('home', 25, this.goHome)}
          />
          <WrappedComponent />
        </>
      );
    }
  }

  return HOC;
};

export default withHeader;
