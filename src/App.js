import './App.css';
import { Banner } from "./slider";





function App() {
  return (
    <div className="App">
      <div>
      <header id='navbar'>
          <p>Amazon</p>
          <div className='search-box'>
            <input type='text' placeholder="Search products..."></input>
            <button id='btn'>Search</button> 
          </div>
          <p id='cart'>Cart</p>
      </header>
      </div>


      {/* Second Section */}
        
      <Banner />         

      <div>
    
        <h1>Hello React</h1>
      </div>

    </div>




  );
}

export default App;
