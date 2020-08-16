import styled from 'styled-components';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  padding-top: 10px;

  @media (max-width: 1200px) {
    max-width: 95%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export {
  Container,
  Content,
};