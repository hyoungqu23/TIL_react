import styled from 'styled-components';

const Card = (props) => {
  const classes = 'card ' + props.className; // className 기본 값 설정

  return <StyledCard className={classes}>{props.children}</StyledCard>;
};

export default Card;

const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
