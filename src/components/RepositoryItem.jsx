import React from 'react';
import { Text, View} from 'react-native';


const RepositoryItem = ({repositories}) => {
  console.log(repositories);
  const { item } = repositories
  return (
    <View>
      <Text>{item.fullName}</Text>
      <Text>{item.description}</Text>
      <Text>{item.language}</Text>
      <Text>{item.forksCount}</Text>
      <Text>{item.stargazersCount}</Text>
      <Text>{item.ratingAverage}</Text>
      <Text>{item.reviewCount}</Text>
      <Text>{item.ownerAvatarUrl}</Text>

    </View>
  );
};

export default RepositoryItem;