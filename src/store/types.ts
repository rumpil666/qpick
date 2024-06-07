export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface IRating {
  rate: number
  count: number
}

export interface IProductState {
  products: IProduct[]
  basketProducts: IBasketProduct[]
  favouriteProducts: IProduct[]
  category: ICategory
  loading: boolean
  error: string | null
  modalActive: boolean
  productModal: IProduct
}

export interface IBasketProduct extends IProduct {
  quantity: number;
}

export interface ICategory {
  [category: string]: IProduct[]
}
