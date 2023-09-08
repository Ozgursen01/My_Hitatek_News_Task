
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions,FlatList } from 'react-native';

const AuthorCard = ({ item, index }) => { 
  
    return (
        <View style={styles.authorCard}>
        <View style={styles.cardHeader}>
          <Image source={{ uri: item.urlToImage }}  style={styles.authorImage} />
          <View style={styles.authorHeaderText}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.authorTitle}>{item.title}</Text>
          </View>
        </View>
      </View>

    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatarContainer: {
        flex: 1,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'cover',
    },
    descriptionContainer: {
        flex: 4,
        marginLeft: 10,
    },
    description: {
        fontSize: 16,
    },
    authorCard: {
        width: Dimensions.get("window").width,
        alignItems: "center",
        borderRadius: 20,
        padding: 1,
        overflow: "hidden",
        elevation: 5,
        backgroundColor: "white",
        margin: 5,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 30,
      },
    author: {
        fontSize: 16,
        marginTop: 10,
        color: "gray",
        fontWeight: "bold",
    },
    authorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: "cover",
        marginRight: 20,
    },
    authorHeaderText: {
        flex: 1,
        justifyContent: "center",
    },
    authorTitle: {
        fontSize: 19,
        marginTop: 10,
        color: "black",
    },
});

export default AuthorCard;
