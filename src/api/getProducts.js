import { api } from './api'

export function getProducts () {
  api.get('/')
    .then(function (response) {
    // handle success
      console.log(response)
    })
    .catch(function (error) {
    // handle error
      console.log(error)
    })
    .then(function () {
    // always executed
    })
}
