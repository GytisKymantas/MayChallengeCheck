import styled from 'styled-components';
import { Box } from './components/Box';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import './styles/index.css';
import { theme } from './styles/theme';
import { tabletMF } from './styles/useQuery';

function App() {
  return (
    <StyledContainer className='App'>
      <Navigation />
      <Main />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled(Box)`
  background: ${theme.colors.white2};

  @media ${tabletMF} {
    background: ${theme.colors.white};
  }
`;
