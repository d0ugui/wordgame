import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ValidKeys = styled.div`
  font-size: 10rem;
  font-weight: bold;
  min-width: 600px;
  border-bottom: solid 2px #fff;
`

export const CompletedWords = styled.div`
  width: max-content;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  text-align: left;
  padding: 20px 40px;
  font-size: 1.8rem;
  line-height: 2.5rem;
  opacity: 0.5;
`
export const TypedKeys = styled.div`
  width: 600px;
  margin-top: 20px;
  font-size: 1.3rem;
  overflow: hidden;
`
