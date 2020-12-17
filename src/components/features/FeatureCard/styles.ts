import styled from "styled-components";

export const FeatureCardContainer = styled.div`
  background: ${(props) => props.theme.palette.paper};
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  > button {
    background: #1574cc;
    border-radius: 4px;
    color: white;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  > h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  > p {
    font-size: 14px;
    flex: 1;
  }

  > svg {
    height: 70px;
    width: 70px;
    margin: 20px 0px;
  }
`;

export const Progress = styled.span<{ passed: number }>`
  display: block;
  height: 20px;
  border-radius: 10px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 16px;

  &::after {
    content: "${(props) => props.passed}%";
    color: black;
    font-size: 0.8em;
    line-height: 20px;
    height: 20px;
    border-radius: 10px;
    width: ${(props) => props.passed}%;
    display: block;
    background: ${(props) => props.theme.palette.secondary};
  }
`;
