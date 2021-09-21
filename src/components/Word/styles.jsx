import styled from 'styled-components'

export const Matched = styled.span`
  background-color: #fdf8c5;
  color: #282c34;

  &.completed {
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
    animation: moveDown 200ms ease-in;
  }


  @keyframes moveDown {
    0% {
      top: 0;
      opacity: 1;
    } 20% {
      top: -3rem;
      background-color: #26947c;
    } 100% {
      top: 22rem;
      opacity: 0;
    }
  }

`
export const Remainder = styled.span`
  opacity: 0.5;
`

