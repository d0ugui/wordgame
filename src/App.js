import {
  Container,
  ValidKeys,
  Matched,
  Remainder,
  CompletedWords,
  TypedKeys
} from './styles/app'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Container>
      <ValidKeys>
        <Matched>Doug</Matched>
        <Remainder>las</Remainder>
      </ValidKeys>
      <TypedKeys>ugla</TypedKeys>
      <CompletedWords>
        <ol>
          <li>Cidade</li>
          <li>Carro</li>
          <li>Profissional</li>
        </ol>
      </CompletedWords>
      <GlobalStyle />
    </Container>
  )
}

export default App
