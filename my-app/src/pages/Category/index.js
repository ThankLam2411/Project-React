import React from "react";
import { getCategoriesProducts, getCategory } from "../../services/Api";
import ProductItem from "../../shared/Components/productItem";
const Category=({match})=>{
  const id = match.params.id;
  const [category, setCategory] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [totalProduct, setTotalProduct] = React.useState(0);
  React.useEffect(()=>{
    // Get Category
    getCategory(id).then((res)=>{
      setCategory(res.data.data);
    });
    // Get Categories by ID
    getCategoriesProducts(id).then((res)=>{
      setProducts(res.data.data.docs)
      setTotalProduct(res.data.data.docs.length);
    })
  },[id])
    
    return(
        <>
        <div>
  {/*	List Product	*/}
  <div className="products">
    <h3>{category.name} (hiện có {totalProduct} sản phẩm)</h3>
    <div className="product-list card-deck">
        {
          products.map((product,key)=>{
            return(
              <ProductItem key={key} item={product}/>
              
            )
          })
        }
   
    </div>
  </div>
  {/*	End List Product	*/}
  <div id="pagination">
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
      <li className="page-item active"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
    </ul> 
  </div>
</div>

        </>
    )
}
export default Category;