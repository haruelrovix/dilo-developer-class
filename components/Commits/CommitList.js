import React from 'react';
import {FlatList, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import style from './style';

const CommitList = props => {
  const keyExtractor = item => item.sha;

  const renderAvatar = item => {
    const uri = (item.author && item.author.avatar_url) || undefined;

    return (
      <View>
        <Avatar source={{uri}} size="medium" rounded />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ListItem
        title={item.commit.author.name}
        subtitle={item.commit.message}
        leftElement={renderAvatar(item)}
        containerStyle={style.containerStyle}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={props.commits}
      renderItem={renderItem}
    />
  );
};

export default CommitList;
