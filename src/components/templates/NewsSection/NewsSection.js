import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}
`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(
        ({
          data: {
            data: { allArticles },
          },
        }) => setArticles(allArticles)
      )
      .catch((err) => setError(err));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {
        articles.length > 0 ? (
          articles.map(({ id, title, category, content, image = null }) => (
            <ArticleWrapper key={id}>
              <TitleWrapper>
                <h4>{title}</h4>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt="article" /> : null}
              </ContentWrapper>
              <Button isBig>Read More</Button>
            </ArticleWrapper>
          ))
        ) : (
          <NewsSectionHeader>{error ? `Sorry, we couldn't load articles for you. ${error}` : 'Loading...'}</NewsSectionHeader>
        )
        // )} : error ? (
        //   <NewsSectionHeader>Sorry, we couldn't load articles for you. {error}</NewsSectionHeader>
        // ) : (
        //   <NewsSectionHeader>Loading...</NewsSectionHeader>
      }
    </Wrapper>
  );
};

export default NewsSection;
