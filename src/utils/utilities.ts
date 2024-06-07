import type { IProduct } from "../store/types";

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('ru-RU').format(num)
}

export const checkItemInArr = (id: number, arr: IProduct[]): boolean => {
  const product = arr.find((i) => i.id === id);
  return !(product === undefined)
}