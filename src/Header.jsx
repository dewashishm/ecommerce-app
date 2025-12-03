import "./Header.css";


export function Header() {
  return (

    <div>
      <header id='navbar'>
        <p>Amazon</p>
        <div className='search-box'>
          <input type='text' placeholder="Search for Products..."></input>
          <button id='btn'>Search</button>
        </div>

        <div className="header-rightsection">
          <p className="cart">Cart</p>
          <p className="login">Login</p>
        </div>

      </header>
    </div>
  )
}