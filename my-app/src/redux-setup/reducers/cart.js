import { ADD_TO_CART } from "../../shared/constants/action-type";
import { UPDATE_CART, DELETE_ITEM_CART } from "../../shared/constants/action-type";
const initState = {
    items: [],
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return addItem(state, action.payload);
      // case "SYNC_CART":
      //   return { ...state, items: action.payload };
      case UPDATE_CART:
        return updateCart(state,action.payload);
      case DELETE_ITEM_CART:
        const newCarts = state.items.filter(
          (item)=>item._id !==action.payload._id
          // Nếu id của payload khác với id item cần xóa => cho vào mảng mới
          
        );
        return {...state,items:newCarts}

      default:
        return state;
    }
  }
  const addItem=(state,payload)=>{
    const items = state.items;
    let isProductExists = false;
    items.map((item)=>{
        if(!isProductExists && payload._id===item._id ){
            item.qty+=payload.qty;
            isProductExists = true;
        }
        return item;

    });
    const newItemms=isProductExists?items:[...items,payload];
    // Nếu không tồn tại(false) => giải nén items + thêm payload
    localStorage.setItem("cart_items",JSON.stringify(newItemms));
    // localStorage require JSON 
    return{...state,items:newItemms};
    // Giải nén state => ra tất cả con bên trong, đè lại items gtri newItems

  }
    const updateCart =(state,payload)=>{
      const items=state.items;

      const newCarts = items.map((item)=>{
        if(item._id === payload._id){
          item.qty = payload.qty;
          // Nếu tìm thấy id item giống id payload muốn sửa => qty của item = qty của payload
        }
        return item;
        // Trả lại item vào giỏ hàng
      });
      return {...state,items:newCarts}
      
    }

// const addItem=(state,payload)=>{
//     const items=state.payload;
//     let isProductExists =false;
//     items.map((item)=>{
//         if(!isProductExists && payload._id === item._id )
//         // Nếu tồn tại và Object playload trùng vs item => thêm sản phẩm
//         // !isProductExist: đổi trạng thái
//         {
//             item.qty += payload.qty;
//             // Cộng thêm 1 sp từ payload.qty
//             isProductExists = true;
//         }
//         return item;
//     });
    

