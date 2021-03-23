import './App.css';
import StudentCard from './components/StudentCard';
import 'fontsource-roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Header from './components/Header';

const theme = createMuiTheme({
  palette:{
    primary: {
      main: blue[600]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <StudentCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
