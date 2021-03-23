import './App.css';
import StudentCard from './components/StudentCard';
import 'fontsource-roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette:{
    primary: {
      main: green[500]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StudentCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
