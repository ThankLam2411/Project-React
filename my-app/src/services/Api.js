import Http from "./Http";
export const getProducts=(config)=>{
    return Http.get("/products",config);
}
export const getCategories=(config)=>{
    return Http.get("/categories",config);
}
// Get Category 
export const getCategory =(id, config)=>{
    return Http.get(`/categories/${id}`,config);

}
// Get Categories by ID
export const getCategoriesProducts=(id,config)=>{
    return Http.get(`/categories/${id}/products`,config);
}
// Get Product by ID
export const getProduct = (id, config)=>{
    return Http.get(`/products/${id}`,config);
}

// Get cmt
export const getProductsComments=(id,config)=>{
    return Http.get(`/products/${id}/comments`,config);
}

export const createProductsComments=(id,data,config)=>{
    return Http.post(`/products/${id}/comments`,data,config);
}

export const order=(data,config)=>{
    return Http.post("/order",data,config);
}