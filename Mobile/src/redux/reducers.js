const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };

  
  
  export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        console.log('Reducer: FETCH_DATA işlemi başlatıldı'); 
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'FETCH_DATA_SUCCESS':
        console.log('Reducer: FETCH_DATA_SUCCESS işlemi başarılı oldu'); 
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          error: null,
        };
      case 'FETCH_DATA_FAILURE':
        console.error('Reducer: FETCH_DATA_FAILURE işlemi hatayla sonuçlandı', action.payload); 
        return {
          ...state,
          isLoading: false,
          data: [],
          error: action.payload,
        };
      case 'UPDATE_OFFLINE_DATA':
        console.log('Reducer: UPDATE_OFFLINE_DATA işlemi gerçekleşti'); 
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };