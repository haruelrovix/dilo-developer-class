import {Dimensions} from 'react-native';

const containerStyle = {
  alignItems: 'flex-start',
  borderBottomWidth: 1,
  flex: 1,
  width: Dimensions.get('screen').width,
};

const subtitleStyle = {
  color: 'rgba(0, 0, 0, 0.54)',
};

export default {
  containerStyle,
  subtitleStyle,
};
