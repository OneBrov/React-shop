function Card () {
    return (
        <div className="item ">
            <div className="favorite p-2">
                <img src="/img/addToFavorite.svg" alt="Not favorite"/>
            </div>
            <div className=" p-2">
                <img  height={200} src="/img/iphone_1.png" alt="" />
            </div>
            <div className="mx-2 ">
                <h6 className="my-0" >APPLE iPhone XR  128Gb</h6>
                <div className="d-flex justify-content-between align-center">
                    <div className="d-flex flex-column">
                        <span className="o7">Цена:</span>
                        <b> 120 000 руб. </b>
                    </div>
                    <div className="addToCart">
                        <img width={24} height={24} src="/img/addToCart.svg" alt="Add to cart"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;