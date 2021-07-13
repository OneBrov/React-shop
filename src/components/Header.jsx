function Header () {
    return (
        <header className="d-flex  justify-content-between p-3">
          <div className="d-flex align-center">
            <img width={50} height={80} src="/img/logo.png" alt="Company Logo"/> 
            
            <div className="container my-auto">
              <h2 className="mb-0"> React Shop</h2> 
              <p className="o6 m-0">Магазин лучших девайсов</p> 
            </div>  
          </div>
          
          <ul className="d-flex list-unstyled my-auto">
            <li className="me-4"> 
              <img width={40} height={40} src="/img/cart.png" alt="shopping cart"/>
              <span > 60 000 руб.</span>
            </li>
            <li className="me-4"> 
              <img width={40} height={40} src="/img/favorite.png" alt="favorites"/>
            </li>
            <li className="me-4">
              <img width={40} height={40} src="/img/user.png" alt="" />
            </li>
          </ul>
        </header>  
    )
}

export default Header;