import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { setBusinessNews } from '../store/actions/newsActions';


function Business() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const businessCategory = process.env.REACT_APP_BUSINESS_CATEGORY;
  const businessCountry = process.env.REACT_APP_BUSINESS_COUNTRY;
  const url = process.env.REACT_APP_ENDPOINT;

  const dispatch = useDispatch();

  const { data: news, isLoading, isError } = useQuery(
    'businessNews',
    async () => {
      const response = await axios.get(
        url + 'access_key=' + apiKey + '&' + 'categories=' + businessCategory + '&' + 'countries=' + businessCountry
      );
      const filteredNews = response.data.data.filter((data) => data.title !== '[Removed]');
    dispatch(setBusinessNews(filteredNews)); 
    console.log(setBusinessNews);
   
      return response.data.data.filter((data) => data.title !== '[Removed]');
    }
  );

  const memoizedNews = useMemo(() => {
    if (!news) return [];

    return news.map((data, index) => ({
      key: index,
      title: data.title,
      content: data.description,
      imageUrl: data.image || '/assets/sampleNews.png',
    }));
  }, [news]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>BUSINESS!</h2>
      <p>BUSINESS.</p>
      <h3>BUSINESS Haberler</h3>
      <div className="CardContainer" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {memoizedNews.map(data => (
          <Card
            key={data.key}
            title={data.title}
            content={data.content}
            imageUrl={data.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Business;
