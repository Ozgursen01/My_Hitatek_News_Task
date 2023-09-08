
const initialState = {
    sportsNews: [],
    businessNews: [],
    generalNews: [],
    politicalNews: [],
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SPORTS_NEWS':
        return { ...state, sportsNews: action.payload };
      case 'SET_BUSINESS_NEWS':
        return { ...state, businessNews: action.payload };
      case 'SET_GENERAL_NEWS':
        return { ...state, generalNews: action.payload };
      case 'SET_POLITICAL_NEWS':
        return { ...state, politicalNews: action.payload };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  