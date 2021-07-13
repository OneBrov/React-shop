function Cart() {
    return (
        <div style={{display:'none'}} className="overlay"> 
          <div className="offCanvas p-3 d-flex flex-column"> 
            <h2 className="p-3 d-flex justify-content-between"> 
              Корзина 
              <img className="btn" src="/img/cancel.svg" alt="Cancel"/> 
            </h2>
            <div className="items ">
              <div className="cartItem m-3 d-flex align-middle justify-content-between p-3">
                <img className="me-3 d-block" height={100} src="/img/iphone_1.png" alt="Device" />
                <div className="me-3 my-auto">
                  <p className="mb-1 fs-5">APPLE iPhone XR 128Gb</p>
                  <b className="fs-6">120 000 руб.</b>
                </div>
                <img className="cancelBtn" src="/img/cancel.svg" alt="Cancel"/>
              </div>

              <div className="cartItem m-3 d-flex align-middle justify-content-between p-3">
                <img className="me-3 d-block" height={100} src="/img/iphone_1.png" alt="Device" />
                <div className="me-3 my-auto">
                  <p className="mb-1 fs-5">APPLE iPhone XR 128Gb</p>
                  <b className="fs-6">120 000 руб.</b>
                </div>
                <img className="cancelBtn" src="/img/cancel.svg" alt="Cancel"/>
              </div>
            </div>
            <div className="bottomText">
              <ul className=" list-unstyled mb-4 px-3">
                <li className="d-flex">
                  <span>Итоговая стоимость </span>
                  <div></div>
                  <b>120 000 руб.</b>  
                </li>
              </ul>
              <button className="mb-4"> Оформить заказ </button>
            </div>
          </div>
        </div > 
    )
}

export default Cart;