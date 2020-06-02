import styled from 'styled-components';

export const ContainerDialog = styled.div`
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(0,0,0,.8);
  z-index:9999;
  overflow: hidden;

  img {
    max-height: 95vh;
    height: 100%;
    width: auto;
  }

  .dialog-header {
    display:flex;
    padding:16px;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px solid ${(props) => props.theme.palette.border}
  }

  .dialog-message{padding:16px;}

  .dialog-actions {
    padding: 16px;
    display:flex;
    justify-content: flex-end;

    button:first-child {
      margin-right: 8px;
    }
  }
`;
