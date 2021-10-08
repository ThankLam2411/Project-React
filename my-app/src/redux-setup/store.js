import { createStore } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
const persistConfig = {
    key: "redux-store",
    storage: storage,
    keyPrefix: "joy:",
}

const store = createStore(persistReducer(persistConfig, reducers));
// Khi tải trang storage đưa gtri trc đó đã lưu trữ vao reducers
persistStore(store);

export default store;