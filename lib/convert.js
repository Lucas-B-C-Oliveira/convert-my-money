const convert = (cotacao, quantidade) => {
  return cotacao * quantidade
}

const toMoney = value => {
  return parseFloat(value).toFixed(2)
}

module.exports = {
  convert,
  toMoney
}