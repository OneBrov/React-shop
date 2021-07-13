
import Header from './components/Header'
import Cart from './components/Cart'
import Card from './components/Card'
function App() {
  return (
      <div className="bg-white p-0">
        <Header />     
        <Cart />

        <div className="container-fluid p-3 align-center"> 
          <div className="d-flex mb-5 justify-content-between">
            <h1 className="" >Все товары</h1>
            <div className="search my-auto d-flex">
              <img height={24} width={24} src="/img/search.svg" alt="Search"/>
              <input className="ms-2" placeholder="Search..."></input>
            </div>
          </div>
          <div className="devices container-fluid d-flex">
            <Card /> 
            <Card /> 
            <Card /> 

          </div>

        </div>
      </div>
  );
}

export default App;
