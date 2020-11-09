import styled from 'styled-components';

export const AuthorHeader = styled.header<{ cover?: string }>`
  width: 100%;
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    ${(props) => (props.cover ? `url(${props.cover})` : '#000')};
  display: flex;
  align-items: center;
  background-position: top;
  background-size: cover;

  > div {
    display: flex;
    align-items: flex-start;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-left: 16px;

  h2 {
    margin-top: 8px;
    font-size: 1.8rem;
  }
  p {
    font-size: 0.8rem;
    margin-top: 4px;
  }
`;

export const Avatar = styled.div`
  border-radius: 50%;
  height: 64px;
  width: 64px;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Chip = styled.div`
  border-radius: 8px;
  padding: 4px 8px;
  background: white;
  color: #333;
  font-size: 0.8rem;
`;
