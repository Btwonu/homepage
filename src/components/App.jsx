import React from 'react';
import reactDom from 'react-dom';
import '../styles.css';
import styled, { ThemeProvider } from "styled-components";
import db from "../db.json";

const StyledSection = styled.section`
  padding: 60px 0;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledShell = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
`;

const Shell = ({ children }) => {
  return <StyledShell>{children}</StyledShell>;
};

const StyledCard = styled.div`
  height: 100%;
  box-shadow: 0 0 2px 2px rgba(20, 20, 20, 0.2);
  padding: 60px 55px;
  border-radius: 2px;

  h2 {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }
`;

const StyledGridContainer = styled.div`
  display: flex;
  margin: 0 -20px;
`;

const StyledGridItem = styled.div`
  flex: 0 0 ${({ widthPercentage }) => widthPercentage}%;
  padding: 0 20px;
`;

const Card = ({ id, title, description, url }) => {
  return (
    <StyledCard>
      <h2>
        <a href={url}>{title}</a>
      </h2>

      <p>{description}</p>
    </StyledCard>
  );
};

const Grid = ({ id, container, item, children, xs }) => {
  console.log(id, container, item);

  let widthPercentage = (100 / 12) * xs;

  if (container) {
    return <StyledGridContainer>{children}</StyledGridContainer>;
  } else if (item) {
    return (
      <StyledGridItem widthPercentage={widthPercentage}>
        {children}
      </StyledGridItem>
    );
  }
};

export default function App() {
  const cardList = db.articles.map((article) => {
    return (
      <Grid id={article.id} key={article.id} item xs={4}>
        <Card {...article} />
      </Grid>
    );
  });

  return (
    <div className="App">
      <Shell>
        <Section>
          <Grid container spacing={2}>
            {cardList && cardList}
          </Grid>
        </Section>
      </Shell>
    </div>
  );
}
