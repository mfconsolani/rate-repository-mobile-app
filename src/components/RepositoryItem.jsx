import React from 'react';
import { Text, View } from 'react-native';


const RepositoryItem = ({repositories}) => {
  const { item } = repositories;
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.forksCount}</Text>
      <Text>Forks: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews:{item.reviewCount}</Text>

    </View>
  );
};

export default RepositoryItem;