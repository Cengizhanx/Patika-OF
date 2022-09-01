import './App.css';
import User from './components/User';

const friends = [
  {
    name: 'AA'
  },
  {
    name: 'BB'
  },
  {
    name: 'CC'
  },
]

function App() {
  return (
    <>
      <User name="Cengiz" surname="Durmus" isLogged={true} age={23} friends={friends}
        address={{
          title: 'İstanbul',
          zip: 34600
        }} />
    </>
  );
}

export default App;
