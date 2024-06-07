import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IProductState, IProduct } from "./types";

export const fetchProducts = createAsyncThunk<IProduct[], undefined, { rejectValue: string }>(
  'product/fetchProducts',
  async function (_, { rejectWithValue, dispatch }) {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();

    dispatch(getCategoryProduct(data))

    return data
  }
)

const initialState: IProductState = {
  products: [],
  basketProducts: [],
  favouriteProducts: [],
  category: {},
  loading: false,
  error: null,
  modalActive: false,
  productModal: {
    id: 1,
    title: "string",
    price: 1,
    description: "string",
    category: "string",
    image: "string",
    rating: {
      rate: 1,
      count: 1,
    }
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductInBasket(state, action: PayloadAction<number>,) {
      const basketProducts = state.basketProducts;
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        basketProducts.push({ ...product, quantity: 1 })
      }
    },
    countPlus(state, action: PayloadAction<number>) {
      const basketProducts = state.basketProducts.find(p => p.id === action.payload);
      if (basketProducts) {
        basketProducts.quantity += 1;
      }
    },
    countMinus(state, action: PayloadAction<number>) {
      const basketProducts = state.basketProducts.find(p => p.id === action.payload);
      if (basketProducts) {
        basketProducts.quantity -= 1;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.basketProducts = state.basketProducts.filter(p => p.id !== action.payload);
    },
    addProductFromFavourites(state, action: PayloadAction<number>) {
      const favouriteProducts = state.favouriteProducts;
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        favouriteProducts.push(product)
      }
    },
    removeProductFromFavourites(state, action: PayloadAction<number>) {
      state.favouriteProducts = state.favouriteProducts.filter(p => p.id !== action.payload);
    },
    getCategoryProduct(state, action: PayloadAction<IProduct[]>) {
      action.payload.forEach((product) => {
        if (!(product.category in state.category)) {
          state.category[`${product.category}`] = [product]
        } else {
          state.category[`${product.category}`].push(product)
        }
      });
    },
    toggleModalActive(state) {
      state.modalActive = !state.modalActive;
    },
    addProductInModal(state, action: PayloadAction<number>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        state.productModal = product;
      }
    },
    buy(state) {
      state.basketProducts = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, { error }: any) => {
        state.error = error.message;
        state.loading = false;
      })
  }
})

export const { countPlus, countMinus, removeProduct, getCategoryProduct, addProductInBasket, removeProductFromFavourites, addProductFromFavourites, toggleModalActive, addProductInModal, buy } = productSlice.actions;

export default productSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith('rejected');
}