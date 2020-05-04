import styled from "styled-components";

export const ScoreItem = styled.div`
  color: ${props => (props.correct ? "green" : "red")};
  margin: 0.5em;
`;
