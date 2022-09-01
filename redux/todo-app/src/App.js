import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <>
      <section className='todoapp'>
        <Header></Header>
        <Form></Form>
        <Content></Content>
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
