import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-bottom: 28px;
`;

export const Step = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;

  .step-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .step-id {
    height: 40px;
    width: 40px;
    background: ${({ theme, checked, current }) =>
      checked || current ? theme.palette.secondary : theme.palette.paper};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 48px;
    line-height: 20px;
  }

  &:after {
    content: '';
    height: 2px;
    width: calc(100% - 40px);
    background: ${({ theme, checked }) =>
      checked ? theme.palette.secondary : theme.palette.paper};
  }

  &:first-child {
    &:before {
      content: '';
      height: 0px;
      width: 0px;
    }
  }

  &:last-child {
    flex: inherit;
    &:after {
      content: '';
      height: 0px;
      width: 0px;
    }
  }
`;
