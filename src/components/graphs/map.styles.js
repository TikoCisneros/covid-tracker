import styled from 'styled-components';

const InfoContainer = styled.div`
  width: 150px;
`;

const InfoFlag = styled.div`
  height: 80px;
  width: 100%;
  background-size: cover;
  border-radius: 8px;

  img {
    border-radius: 5px;
  }
`;

const InfoName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

const InfoLabel = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

export {
  InfoContainer,
  InfoFlag,
  InfoName,
  InfoLabel,
};