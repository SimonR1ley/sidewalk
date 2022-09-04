import Header from './Header';
import { useState, useEffect} from 'react';
import Axios from 'axios';
import ProductCard from '../uiComponents/ProductCard';
import Modal from '../uiComponents/Modal';
import ProductViewPage from './ProductViewPage';


const Products = () => {


  // const [viewProduct, setViewProduct] = useState('noDisplay')

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  const [modalArea, setModal] = useState();


  // const ViewClick = () => {  
  //   setViewProduct("product-overlay-con");
  // }

  // const ExitViewClick = () => {  
  //   setViewProduct("noDisplay");
  // }


   //  productId={item._id}
    //                 name={item.productName}
    //                 price={item.price}
    //                 desc={item.description}
    //                 stock={item.inStock}
    //                 mini={item.variations.mini}
    //                 mid={item.variations.mid}
    //                 full={item.variations.full}
    //                 render={setUpdateProducts} />);



  useEffect(() => {
    Axios.get('http://localhost:5000/api/allProducts')
    .then(res => {
      let productData = res.data;
      console.log(productData);
     
      let allProducts = productData.map((item) => <ProductCard 
      key={item._id} 
      productId={item._id}
      name={item.productName}
      price={item.price}
      desc={item.desc}
      mini={item.mini}
      mid={item.mid}
      full={item.full}
      editRender={setRenderProducts}/>);

      setRenderProducts(false);
      setReadProducts(allProducts);

    });
  }, [renderProducts]);




  useEffect(() => {
    Axios.get('http://localhost:5000/api/allProducts')
    .then(res => {
      let productData = res.data;
      // console.log(productData);
     
      let productView = productData.map((item) => <ProductViewPage 
      productId={item._id} 
      name={item.productName} 
      price={item.price} 
      desc={item.desc}
      mini={item.mini}
      mid={item.mid}
      full={item.full}/>);

      setModal(productView);
    });
  });



  



  return (
    <div>
      <Header />


      <div className='products-con'>
        <p className='products-heading'>ALL DECKS</p>
        <div className='products-item-con'>

          {readProducts}

          {/* <div className='product-item'>
            <div className='product-img'></div>
            <div className='product-info-con'>
              <h2 className='all-products-heading'>STORMTROOPSTER</h2>
              <p className='rarity'>RARITY: 1/5</p>
              <p className='price'>PRICE: R1600</p>
              <div className='view-btn'>
                <p className='view-text' onClick={ViewClick}>VIEW</p>
              </div>
              <div className='wish-btn'>
                <div className='wish-icon'></div>
              </div>
              <div className='add-cart-btn'>
                <div className='cart-icon'></div>
              </div>
            </div>
          </div> */}

      

        </div>
      </div>


      {/* <div className={viewProduct}>
        <div className='exit-btn' onClick={ExitViewClick}></div>

      <div className='product-view-con'>

        <div className='view-product-img-con'>
          <div className='view-product-img'></div>

          <div className='view-product-info-con'>
            <h2 className='view-all-products-heading'>STORMTROOPSTER</h2>
            <p className='view-rarity'>RARITY: 1/5</p>
            <p className='view-price'>PRICE: R1600</p>
            <div className='view-wish-btn'>
              <div className='wish-icon'></div>
            </div>
            <div className='view-add-cart-btn'>
              <div className='cart-icon'></div>
            </div>
              <div className='desc-con'></div>

          </div>

        </div>
      </div>

      </div> */}


    </div>
  )
}

export default Products