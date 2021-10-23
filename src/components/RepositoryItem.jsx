import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4
  },
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white'
  },
  headingContainer: {
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 5
  },
  laguange: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 5
  }
});

const RepositoryItem = ({ repositories }) => {
  const { item } = repositories;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.tinyLogo} />
        <View style={styles.headingContainer}>
          <Text fontWeight="bold" marginBottom="mb-one">{item.fullName}</Text>
          <Text color="textSecondary" marginBottom="mb-three">{item.description}</Text>
          <Text style={styles.laguange}>{item.language}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 5 }}>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight="bold">{(item.stargazersCount / 1000).toFixed(1).replace(/\.0$/, '') + 'k'}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight="bold">{(item.forksCount / 1000).toFixed(1).replace(/\.0$/, '') + 'k'}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;