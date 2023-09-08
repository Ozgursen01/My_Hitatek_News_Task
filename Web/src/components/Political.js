import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Card from './Card';
import { setPoliticalNews } from '../store/actions/newsActions';
import { useDispatch } from "react-redux";



function Political() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const politicalCategory = process.env.REACT_APP_POLITICAL_CATEGORY;
  const politicalCountry = process.env.REACT_APP_POLITICAL_COUNTRY;
  const url = process.env.REACT_APP_ENDPOINT;

  const dispatch = useDispatch();


  const { data: news, isLoading, isError } = useQuery(
    'politicalNews',
    async () => {
      const response = await axios.get(
        url + 'access_key=' + apiKey + '&' + 'categories=' + politicalCategory + '&' + 'countries=' + politicalCountry
      );
      const filteredNews = response.data.data.filter((data) => data.title !== '[Removed]');
    dispatch(setPoliticalNews(filteredNews)); 
            
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
      <h2>POLITICAL!</h2>
      <p>POLITICAL.</p>
      <h3>Politik Haberler</h3>
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

export default Political;
