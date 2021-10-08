import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/Components/productItem";
import axios from "axios";
const Home =(props)=>{
  const [latestProducts,setLatestProducts]=React.useState([]);
  const [featuredProducts,setFeaturedProducts]=React.useState([]);
  React.useEffect(()=>{
    getProducts({
      params: {limit : 10}
    }).then((res)=>{
      setLatestProducts(res.data.data.docs);
    });

    // Featured Products
    getProducts({
      params: {
        limit: 10,
        "filter[is_featured]": true,
      },
    }).then((res)=>{
      setFeaturedProducts(res.data.data.docs)
    });
  },[])
    return(
        <div>
  {/*	Feature Product	*/}
  <div className="products">
    <h3>Sản phẩm nổi bật</h3>
    <div className="product-list card-deck">
      {
        featuredProducts.map((product, key)=>{
          return (<ProductItem key={key} item={product}/> )
        })
      }
      {/* <div className="product-item card text-center">
        <a href="#"><img src="images/product-1.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-2.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-3.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
    </div>
    <div className="product-list card-deck">
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-4.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-5.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-6.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div> */}
    </div>
  </div>
  {/*	End Feature Product	*/}
  {/*	Latest Product	*/}
  <div className="products">
    <h3>Sản phẩm mới</h3>
    <div className="product-list card-deck">
      {latestProducts.map((product)=>{
        return(
          <ProductItem  item={product}/>
        )
      })
      }
      {/* <div className="product-item card text-center">
        <a href="#"><img src="images/product-7.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-8.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-9.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
    </div>
    <div className="product-list card-deck">
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-10.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-11.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div>
      <div className="product-item card text-center">
        <a href="#"><img src="images/product-12.png" /></a>
        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
        <p>Giá Bán: <span>32.990.000đ</span></p>
      </div> */}
    </div>
  </div>
  {/*	End Latest Product	*/}
</div>

    )
}
export default Home;