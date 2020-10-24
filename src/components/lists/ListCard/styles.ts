import styled from 'styled-components';

export const ListCardWrap = styled.div`
  width: 100%;
  .list-cover {
    width: 100%;
    height: 120px;
    position: relative;
    display: flex;
    justify-content: flex-end;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      height: 120px;
      background: rgba(0, 0, 0, 0.8);
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      svg {
        fill: white;
        margin-top: 8px;
      }
    }
  }
  h4 {
    margin: 8px 0px 0px;
    padding: 0px;
    line-height: 1.25rem;
    font-size: 1.25rem;
    margin: 15px 0px 5px;
    color: ${(props) => props.theme.palette.text.primary};
  }
`;
