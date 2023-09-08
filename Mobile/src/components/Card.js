import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Card = ({ item }) => {
  const memoizedCard = useMemo(() => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <Text style={styles.description}>{item.title}</Text>
      </View>
    );
  }, [item]);

  return memoizedCard;
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    padding: 10,
    borderRadius:15,
    borderWidth:5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Card;
