import Header from './Header';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductCard from '../uiComponents/ProductCard';
import Modal from '../uiComponents/Modal';
import ProductViewPage from './ProductViewPage';


const Products = () => {


  // const [viewProduct, setViewProduct] = useState('noDisplay')

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  const [modalArea, setModal] = useState();

  const [imgUrl, setImgUrl] = useState();

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


        let allProducts = productData.map((item) => <ProductCard
          key={item._id}
          productId={item._id}
          name={item.productName}
          price={item.price}
          desc={item.desc}
          mini={item.mini}
          mid={item.mid}
          full={item.full}
          image={'http://localhost:5000/productImages/' + item.image}
          editRender={setRenderProducts} />);





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
          full={item.full} />);

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

        </div>
      </div>
    </div>
  )
}

export default Products