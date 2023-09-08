import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css'; 

function Home() {
  const sportsNews = useSelector((state) => state.newsReducer.sportsNews);
  const businessNews = useSelector((state) => state.newsReducer.businessNews);
  const generalNews = useSelector((state) => state.newsReducer.generalNews);
  const politicalNews = useSelector((state) => state.newsReducer.politicalNews);
  console.log(businessNews, 'business');
  console.log(generalNews, 'general');
  console.log(politicalNews, 'politicalNews');
  console.log(sportsNews, 'sportsNews');

  const { i18n, t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const renderNewsCards = (newsArray) => {
    
    const firstFiveNews = newsArray.slice(0, 5);

    return firstFiveNews.map((news, index) => (
      <Card
        key={index}
        title={news.title}
        content={news.description} 
        imageUrl={
          news.image ||
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
        } 
      />
    ));
  };

  return (
    <div>
      <div className="pageTitle">
        <h2>Hoş Geldiniz!</h2>
      </div>
      <div className="pageTitle">
        <h1>{t('Ana Sayfa')}</h1>
      </div>
      <div className='slider'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/013/704/508/original/world-map-background-news-studio-background-for-news-report-and-breaking-news-on-world-live-report-video.jpg' />
      </div>
      <div className="pageTitle">
        <h1>{t('Spor Haberleri')}</h1>
      </div>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('tr')}>Türkçe</button>
      </div>
      <div className="CardContainer">{renderNewsCards(sportsNews)}</div>

      <div className="pageTitle">
        <h1>{t('İş Haberleri')}</h1>
      </div>
      <div className="CardContainer">{renderNewsCards(businessNews)}</div>

      <div className="pageTitle">
        <h1>{t('Genel Haberler')}</h1>
      </div>
      <div className="CardContainer">{renderNewsCards(generalNews)}</div>

      <div className="pageTitle">
        <h1>{t('Politik Haberler')}</h1>
      </div>
      <div className="CardContainer">{renderNewsCards(politicalNews)}</div>
    </div>
  );
}

export default Home;
