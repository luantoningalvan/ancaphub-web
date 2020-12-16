import styled from 'styled-components';

export const ProfileLinkContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;

  > a {
    display: block;
    border: none;
    outline: none;
    border-radius: 100%;
    height: 44px;
    width: 44px;
    overflow: hidden;
    cursor: pointer;

    > img {
      height: 100%;
      width: 100%;
    }
  }

  > div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }

  @media (min-width: 576px) {
    border: none;
    justify-content: center;
    padding: 0px;
    width: 64px;
    div {
      display: none;
    }
  }
`;
