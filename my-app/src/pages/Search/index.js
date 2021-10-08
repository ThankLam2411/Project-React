import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/Components/productItem";
import Pagination from "../../shared/Components/Pagination";
const Search=({location})=>{
  const query= new URLSearchParams(location.search);
  const keyword =query.get("q");
  const page = query.get("page");

  const [products,setProducts]=React.useState([]);
  const [pages,setPages]=React.useState({
    total:0,
    limit:12,
    currentPage:page
  });
 

  React.useEffect(()=>{
    getProducts({
      params:{
        name:keyword,
        limit:12,
        page:page
      }
    }).then(({data})=>{
      setProducts(data.data.docs);
      setPages({
        ...pages, ...data.data.pages
      });
    })
  },[keyword,page])
    return(
        <>
        <div>
  {/*	List Product	*/}
  <div className="products">
    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{keyword}</span></div>
    <div className="product-list card-deck">
      {products.map((product)=>{
        return(
          <ProductItem item={product}/>
        )
      })}
    </div>
  </div>
  {/*	End List Product	*/}
  <div id="pagination">
      <Pagination pages={pages}/>
    
  </div>
</div>

        </>
    )
}
export default Search;