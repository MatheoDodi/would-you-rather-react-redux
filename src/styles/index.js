import styled from 'styled-components';

export const Form = styled.form`
  padding: 3.1rem;
  margin: 3rem auto;
  margin-top: 6.5rem;
  display: grid;
  flex-direction: column;
  justify-items: center;
  grid-gap: 1.1rem;
  width: 30%;
  transition: .5s all;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .2);
  border-radius: 5px;
  &:hover {
    box-shadow: 0 6px 10px 6px rgba(0, 0, 0, .1);
  }
`

export const CardContainer = styled.div`
  width: 45%;
  margin: 3rem auto;
  margin-top: 6.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .1);
  border-radius: 5px;
`

export const Container = styled.div`
  width: fit-content;
  margin: 6.5rem auto;
  text-align: center;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
`

export const CardListItem = styled.div`
  margin: 3.5rem 2rem;
  transition: all .2s;
  &:hover {
    transform: scale(1.00005);
    box-shadow: 0 3px 10px 1px rgba(0,0,0,.15)
  }
`