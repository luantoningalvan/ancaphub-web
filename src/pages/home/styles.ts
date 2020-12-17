import styled from 'styled-components';

export const VideoLight = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
      color: white;
      stroke-width: 1;
    }
  }
`;

export const CountDownContainer = styled.section<{ bg: string }>`
  height: 100vh;
  flex-direction: column;
  width: 100%;
  background: radial-gradient(
      ellipse at center,
      rgba(256, 256, 256, 0.2) 0%,
      #080f20 100%
    ),
    url(${(props) => props.bg});
  display: flex;
  background-size: cover;
  background-position: center;
  justify-content: space-between;
  padding: 64px 0px;
  background-attachment: fixed;
  align-items: center;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 32px;

    .number {
      font-size: 7rem;
      font-weight: bold;
      color: #e0b30d;
      text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    }

    .type {
      font-size: 2rem;
      font-weight: lighter;
    }
  }
`;
