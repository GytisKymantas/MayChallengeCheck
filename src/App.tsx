import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import './styles/index.css';
import { theme } from './styles/theme';
import { useQuery } from './styles/useQuery';

function App() {
  const { isTabletMF } = useQuery();
  return (
    <div
      className='App'
      style={{
        background: isTabletMF
          ? `${theme.colors.white}`
          : `${theme.colors.white2}`,
      }}
    >
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
