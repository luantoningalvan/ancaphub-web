import styled from 'styled-components';

export const BubbleWrap = styled.div`
  display: flex;
  justify-content: ${(props) => (props.mine ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  width: 100%;
`;

export const BubbleBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  background-color: ${(props) =>
    props.mine ? props.theme.palette.secondary : props.theme.palette.paperDark};
  padding: 16px;
  color: ${(props) => (props.mine ? 'black' : '#ccc')};
  border-radius: 5px;
  border-bottom-right-radius: ${(props) => (props.mine ? '0px' : '5px')};
  border-top-left-radius: ${(props) => (!props.mine ? '0px' : '5px')};
  justify-content: flex-end;
  & > span.messageBody {
    display: inline-block;
    font-size: 0.9em;
    line-height: 1em;
  }

  span.messageSenderName {
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  & > div.answeringTo {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25em;
    border-radius: 5px;
    margin: 0.25em 0;
  }

  & > div.messageContent {
    & > span.messageTime {
      display: inline-block;
      font-size: 0.6em;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1em;
      margin: 0 1em;
      vertical-align: center;
    }
    & > div.messageContent {
      display: flex;
      flex-direction: ${(props) => (props.mine ? 'row-reverse' : 'row')};
    }
  }
`;
