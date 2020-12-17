import styled, { css } from 'styled-components';

export const AppBar = styled.header<{ transparent?: boolean }>`
  background: ${(props) => props.theme.palette.paper};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  ${(props) =>
    props.transparent &&
    css`
      background: transparent;
      box-shadow: none;
    `}

  @media (min-width: 576px) {
    z-index: 180;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
`;

export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    justify-content: flex-start;

    display: flex;
    justify-content: center;
    height: 64px;
    margin-left: 16px;

    svg {
      transition: fill 200ms ease-in-out;
      margin: 8px;
      height: 56px;
      width: 56px;
      fill: ${(props) => props.theme.palette.text.primary};
    }
  }

  .collapse-button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-left: 16px;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    border-radius: 100%;
    svg {
      height: 24px;
      width: 24px;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }

  @media (min-width: 576px) {
    .collapse-button {
      display: none;
    }
    .logo {
      width: 64px;
    }
    flex: 0;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  margin-right: 25px;
`;

export const HeaderMenuItem = styled.li<{ current?: boolean }>`
  list-style: none;
  cursor: pointer;
  color: ${(props) => props.theme.palette.text.primary};

  &:last-child {
    margin-right: 0px;
  }

  > a,
  > div {
    display: block;
    position: relative;
    margin-left: 8px;
    padding: 8px;
    border-radius: 50%;
    height: 40px;
    width: 40px;

    background: ${(props) =>
      props.current ? 'rgba(0,0,0,0.15)' : 'transparent'};
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.palette.text.primary};
    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .badge {
    position: absolute;
    height: 8px;
    width: 8px;
    top: 8px;
    right: 8px;
    border-radius: 4px;
    background: red;
  }
`;

export const Bell = styled.div<{ animated?: boolean }>`
  #e8n1zamhvyle3_tr {
    transform: translate(12px, 9.5px) rotate(0deg);
  }

  #e8n1zamhvyle5_to {
    transform: translate(12px, 21.503926px);
  }

  ${(props) =>
    props.animated &&
    css`
      #e8n1zamhvyle3_tr {
        animation: e8n1zamhvyle3_tr__tr 3000ms linear 1 normal forwards;
      }

      @keyframes e8n1zamhvyle3_tr__tr {
        0% {
          transform: translate(12px, 9.5px) rotate(10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        3.333333% {
          transform: translate(12px, 9.5px) rotate(-10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        6.666667% {
          transform: translate(12px, 9.5px) rotate(10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        10% {
          transform: translate(12px, 9.5px) rotate(-10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        13.333333% {
          transform: translate(12px, 9.5px) rotate(10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        15% {
          transform: translate(12px, 9.5px) rotate(0deg);
        }
        100% {
          transform: translate(12px, 9.5px) rotate(0deg);
        }
      }
      #e8n1zamhvyle5_to {
        animation: e8n1zamhvyle5_to__to 3000ms linear 1 normal forwards;
      }
      @keyframes e8n1zamhvyle5_to__to {
        0% {
          transform: translate(17px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        3.333333% {
          transform: translate(7px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        6.666667% {
          transform: translate(17px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        10% {
          transform: translate(7px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        13.333333% {
          transform: translate(17px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        15% {
          transform: translate(12px, 21.503926px);
        }
        100% {
          transform: translate(12px, 21.503926px);
        }
      }
      #e8n1zamhvyle5_tr {
        animation: e8n1zamhvyle5_tr__tr 3000ms linear 1 normal forwards;
      }
      @keyframes e8n1zamhvyle5_tr__tr {
        0% {
          transform: rotate(0deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        3.333333% {
          transform: rotate(5deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        6.666667% {
          transform: rotate(0deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        10% {
          transform: rotate(5deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        13.333333% {
          transform: rotate(-5deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        15% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `}
`;
