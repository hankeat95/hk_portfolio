import './App.css';
import Header from './Layouts/Header'
import PageBody from './Layouts/PageBody'

function App() {
  return (
    <>
      <Header />
      <div className="appContainer">
        <PageBody />
      </div>
    </>
  );
}

export default App;
