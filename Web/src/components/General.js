import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Card from './Card';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { setGeneralNews } from '../store/actions/newsActions';



function General() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const generalCategory = process.env.REACT_APP_GENERAL_CATEGORY;
    const generalCountry = process.env.REACT_APP_GENERAL_COUNTRY;
    const url = process.env.REACT_APP_ENDPOINT;

    const dispatch = useDispatch();



    const { i18n, t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };



    const { data: news, isLoading, isError } = useQuery(
        'generalNews',
        async () => {
            const response = await axios.get(
                url + 'access_key=' + apiKey + '&' + 'categories=' + generalCategory + '&' + 'countries=' + generalCountry
            );
            const filteredNews = response.data.data.filter((data) => data.title !== '[Removed]');
    dispatch(setGeneralNews(filteredNews)); 
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
            <p>General.</p>
            <h3>General Haberler</h3>
            <h2>{t('Genel')}</h2>
            <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('tr')}>Türkçe</button>
            </div>
            <div className="CardContainer">
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

export default General;
