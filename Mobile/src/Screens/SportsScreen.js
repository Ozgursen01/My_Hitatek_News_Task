import React ,{useState} from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import Card from '../components/Card';
import AuthorCard from '../components/AuthorCard';

import { Button } from 'react-native';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { updateOfflineData } from '../redux/actions';
import { translate } from '../lang/i18n';
import { ScrollView } from 'react-native-gesture-handler';

const SportsScreen = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const fetchData = async () => {
    const apiKey = 'ee90cb1748344802be903a957e36eddb';
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`
    );
    const jsonData = await response.json();
    // İlk 10 veriyi atla ve sonraki 10 veriyi al
    return jsonData.articles.slice(10, 20);
  };
  const { data, isLoading, isError, error } = useQuery('fetchData', fetchData);
  const updateDataMutation = useMutation(async (updatedData) => {
    return updatedData;
  });
  const handleUpdateData = async () => {
    try {
      const updatedData = await fetchData();
      const updatedDataResult = await updateDataMutation.mutateAsync(updatedData);
      if (updatedDataResult) {
        dispatch(updateOfflineData(updatedDataResult));
        queryClient.setQueryData('fetchData', updatedDataResult);
        console.log('Veriler başarıyla güncellendi:', updatedDataResult);
      }
    } catch (error) {
      console.error('Verileri güncelleme sırasında hata oluştu:', error);
    }
  };

  
  return (
    <ScrollView>
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            snapToInterval={Dimensions.get('window').width}
            decelerationRate={0.9}
            showsHorizontalScrollIndicator={false}
          />
        )}
       
      </View>
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <AuthorCard item={item} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            snapToInterval={Dimensions.get('window').width}
            decelerationRate={0.9}
            showsHorizontalScrollIndicator={false}
          />
        )}
       
      </View>
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <AuthorCard item={item} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            snapToInterval={Dimensions.get('window').width}
            decelerationRate={0.9}
            showsHorizontalScrollIndicator={false}
          />
        )}
       
      </View>
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <AuthorCard item={item} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            snapToInterval={Dimensions.get('window').width}
            decelerationRate={0.9}
            showsHorizontalScrollIndicator={false}
          />
        )}
               <Button title="Verileri Güncelle" onPress={handleUpdateData} />

      </View>
    </ScrollView>

  );
};

export default SportsScreen;
