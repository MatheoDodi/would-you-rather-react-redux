import styled from 'styled-components';

export const Form = styled.form`
  padding: 3rem;
  margin: 3rem auto;
  display: grid;
  flex-direction: column;
  justify-items: center;
  grid-gap: 1.1rem;
  width: 30%;
  transition: .5s all;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .2);
  &:hover {
    box-shadow: 0 6px 10px 6px rgba(0, 0, 0, .1);
  }
`