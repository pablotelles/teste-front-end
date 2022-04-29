import { api } from './api'

export function getProducts (setProducts) {
  api.get('/products')
    .then(function (response) {
      setProducts(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
