import Routes from 'Routes';
import './assets/styles/custom.scss';
import './App.css';


/* Alternativa de como escrever uma função.
function App() {
  return (
    <>
      <h1>Hello DSCatalog!</h1>
    </>
  );
} */

/* Notação da espressão Lambda do JavaScript: */

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
