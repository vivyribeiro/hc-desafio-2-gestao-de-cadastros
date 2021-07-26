function validationProducts() {
  let idProduct = document.getElementById('product-id').value
  let nameProduct = document.getElementById('product-name').value
  let brandProduct = document.getElementById('product-brand').value
  let priceProduct = document.getElementById('product-price').value
  let quantityProduct = document.getElementById('product-quantity').value

  if (idProduct == '') alert('Favor preencher todos os campos')
  else if (nameProduct == '') alert('Favor preencher todos os campos')
  else if (brandProduct == '') alert('Favor preencher todos os campos')
  else if (priceProduct == '') alert('Favor preencher todos os campos')
  else if (quantityProduct == '') alert('Favor preencher todos os campos')
  else
    registerProducts(
      parseInt(idProduct),
      nameProduct,
      brandProduct,
      parseInt(priceProduct),
      parseInt(quantityProduct)
    )
}

function registerProducts() {
  let idProduct = document.getElementById('product-id').value
  let nameProduct = document.getElementById('product-name').value
  let brandProduct = document.getElementById('product-brand').value
  let priceProduct = document.getElementById('product-price').value
  let quantityProduct = document.getElementById('product-quantity').value

  let addNewProduct = {
    idProduct,
    nameProduct,
    brandProduct,
    priceProduct,
    quantityProduct
  }

  if (typeof Storage !== 'undefined') {
    let products = localStorage.getItem('products')
    if (products == null) products = []
    else products = JSON.parse(products)
    products.push(addNewProduct)
    localStorage.setItem('products', JSON.stringify(products))
    alert('Produto cadastrado com sucesso')
  } else alert('A versão do navegador é incompativel com essa aplicação.')
}

function validationClients() {
  let nameClient = document.getElementById('name-client').value
  let emailClient = document.getElementById('email-client').value
  let phoneClient = document.getElementById('phone-client').value
  let adressClient = document.getElementById('adress-client').value
  let cityClient = document.getElementById('city-client').value
  let stateClient = document.getElementById('state-client').value

  if (nameClient == '') alert('Favor preencher todos os campos obrigatórios')
  else if (emailClient == '')
    alert('Favor preencher todos os campos obrigatórios')
  else if (adressClient == '')
    alert('Favor preencher todos os campos obrigatórios')
  else if (phoneClient == '')
    alert('Favor preencher todos os campos obrigatórios')
  else if (cityClient == '')
    alert('Favor preencher todos os campos obrigatórios')
  else if (stateClient == '')
    alert('Favor preencher todos os campos obrigatórios')
  else registerClients()
}

function registerClients() {
  let nameClient = document.getElementById('name-client').value
  let emailClient = document.getElementById('email-client').value
  let adressClient = document.getElementById('adress-client').value
  let phoneClient = document.getElementById('phone-client').value
  let cityClient = document.getElementById('city-client').value
  let stateClient = document.getElementById('state-client').value

  let addNewClient = {
    nameClient,
    emailClient,
    adressClient,
    phoneClient,
    cityClient,
    stateClient
  }

  if (typeof Storage !== 'undefined') {
    let client = localStorage.getItem('client')
    if (client == null) cliente = []
    else client = JSON.parse(client)
    client.push(addNewClient)
    localStorage.setItem('cliente', JSON.stringify(client))
    alert('Cliente cadastrado com sucesso')
    e.preventDefault()
  } else alert('A versão do navegador é incompativel com essa aplicação.')
}
