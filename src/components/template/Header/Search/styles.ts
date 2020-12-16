import styled from 'styled-components';

export const SearchContainer = styled.div`
  i,
  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .not-collapsed {
    height: 64px;
    width: 100%;
    padding: 0px 16px;
    background: ${(props) => props.theme.palette.paper};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.palette.text.primary};

    > input {
      border: none;
      background: transparent;
      padding: 16px;
      outline: none;
      flex: 1;
      color: ${(props) => props.theme.palette.text.primary};

      &::placeholder {
        color: ${(props) => props.theme.palette.text.primary};
        font-size: 16px;
        font-family: Ubuntu;
      }
    }
  }

  .mobile-search {
    color: ${(props) => props.theme.palette.text.primary};

    > button {
      display: block;
      position: relative;
      margin-left: 8px;
      padding: 8px;
      border-radius: 50%;
      height: 40px;
      width: 40px;

      &:hover {
        background: rgba(0, 0, 0, 0.15);
      }

      svg {
        color: ${(props) => props.theme.palette.text.primary};
      }
    }

    > a {
      padding: 8px;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }

  .desktop-search {
    display: none;
  }

  @media (min-width: 576px) {
    .mobile-search {
      display: none;
    }
    .desktop-search {
      display: block;
      background: rgba(0, 0, 0, 0.15);
      width: 360px;
      border-radius: 24px;
      display: flex;
      align-items: center;
      padding: 8px 16px;
      height: 48px;
      color: ${(props) => props.theme.palette.text.primary};

      input {
        flex: 1;
        padding: 8px;
        border: none;
        background: transparent;
      }

      a,
      input,
      input::placeholder {
        color: ${(props) => props.theme.palette.text.primary};
        font-size: 1rem;
      }
    }
  }
`;
