import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos'
})
