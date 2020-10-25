import styled from 'styled-components';

export const UplaodArea = styled.label`
  height: 250px;
  width: 300px;
  border-radius: 8px;
  border: 2px dashed ${(props) => props.theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    height: 40px;
    width: 40px;
    margin-bottom: 16px;
  }
`;

export const CropperStyle = styled.div`
  width: 450px;

  .crop-content {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
  }

  img {
    height: auto;
    max-height: 100%;
  }

  .slider {
    padding: 16px;
  }
`;
