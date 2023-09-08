export const fetchDataFailureAction = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const updateOfflineData = (data) => {
  console.log('updateOfflineData Eylemi: Çağrıldı'); 

  return {
    type: 'UPDATE_OFFLINE_DATA',
    payload: data,
  };
};

export const fetchData = () => {
  const apiKey = '64710032674e4cc8a92d215f491f3575'; 

  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA' });

    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`);
      const jsonData = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: jsonData.articles });
      console.log('fetchData Eylemi: Başarılı'); 

    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
      console.error('fetchData Eylemi: Hata', error); 

    }
  };
};
