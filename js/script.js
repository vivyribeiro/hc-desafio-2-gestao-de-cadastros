function validationProducts() {
    let idProduct = document.getElementById('product-id').value;
  let nameProduct = document.getElementById('product-name').value;
  let brandProduct = document.getElementById('product-brand').value;
  let priceProduct = document.getElementById('product-price').value;
  let quantityProduct = document.getElementById('product-quantity').value;

  if (idProduct == "") alert("Favor preencher todos os campos");
  else if (nameProduct == "") alert("Favor preencher todos os campos");
  else if (brandProduct == "") alert("Favor preencher todos os campos");
  else if (priceProduct == "") alert("Favor preencher todos os campos");
  else if (quantityProduct == "") alert("Favor preencher todos os campos");
  else
    registerProducts(
      parseInt(idProduct),
      nameProduct,
      brandProduct,
      parseInt(priceProduct),
      parseInt(quantityProduct)
    );
}

function registerProducts(){
    let idProduct = document.getElementById('product-id').value;
  let nameProduct = document.getElementById('product-name').value;
  let brandProduct = document.getElementById('product-brand').value;
  let priceProduct = document.getElementById('product-price').value;
  let quantityProduct = document.getElementById('product-quantity').value;

  let addNewProduct = {
    idProduct,
    nameProduct,
    brandProduct,
    priceProduct,
    quantityProduct
  }

    if (typeof(Storage) !== "undefined") {
        let products = localStorage.getItem("products");
        if (products == null) products = [];
        else products = JSON.parse(products);
        products.push(addNewProduct);
        localStorage.setItem("products",JSON.stringify(products))
        alert("Produto cadastrado com sucesso")
}

else alert("A versão do navegador é incompativel com essa aplicação.")
};


function validationClients() {
  let nameClient = document.getElementById('name-client').value;
  let emailClient = document.getElementById('email-client').value;
  let phoneClient = document.getElementById('phone-client').value;
  let addressClient = document.getElementById('address-client').value;
  let cityClient = document.getElementById('city-client').value;
  let stateClient = document.getElementById('state-client').value;

  if (nameClient == "") alert("Favor preencher todos os campos");
  else if (emailClient == "") alert("Favor preencher todos os campos");
  else if (addressClient == "") alert("Favor preencher todos os campos");
  else if (phoneClient == "") alert("Favor preencher todos os campos");
  else if (cityClient == "") alert("Favor preencher todos os campos");
  else if (stateClient == "") alert("Favor preencher todos os campos");

  else registerClients();
}

function registerClients(){
  let nameClient = document.getElementById('name-client').value;
  let emailClient = document.getElementById('email-client').value;
  let phoneClient = document.getElementById('phone-client').value;
  let addressClient = document.getElementById('address-client').value;
  let cityClient = document.getElementById('city-client').value;
  let stateClient = document.getElementById('state-client').value;

  let addNewClient = {
    nameClient,
    emailClient,
    phoneClient,
    addressClient,
    cityClient,
    stateClient,
  }

  if (typeof Storage !== "undefine") {
    let client = localStorage.getItem("client")
    if (client == null) client = []
    else client = JSON.parse(client)
    client.push(addNewClient)
    localStorage.setItem("client", JSON.stringify(client))
    alert("Cliente cadastrado com sucesso")
  } 
  
  else alert("A versão do navegador é incompativel com essa aplicação.")
};

function listProducts() {

if (typeof(Storage) !== "undefined") {
    let products = localStorage.getItem("products");
    document.write("<h1>Produtos Cadastrados:</h1>")
    if (products == null)
        document.write("<h3>Ainda não há nenhum cliente cadastrado!</h3>");
    else {

        produts = JSON.parse(products)
        products.forEach(product => {
          document.write('<ul>')
          document.write(`<li>Código: ${product.idProduct}</li>`)
          document.write(`<li>Nome do produto: ${product.nameProduct}</li>`)
          document.write(`<li>Marca: ${product.brandProduct}</li>`)
          document.write(`<li>Preço: ${product.priceProduct}</li>`)
          document.write(`<li>Quantidade: ${product.quantityProduct}</li>`)
          document.write('</ul>')
        })
        
        
    }
} 
else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    

};


function listClients() {

    if (typeof(Storage) !== "undefined") {
        let client = localStorage.getItem("client");
        document.write("<h1>Clientes Cadastrados:</h1>")
        if (client == null)
            document.write("<h3>Ainda não há nenhum cadastro!</h3>");
        else {
            client = JSON.parse(client);
            client.forEach(client => {
                document.write("<ul>");

                document.write(`<li>Nome Completo: ${client.nameClient}</li>`)
                document.write(`<li>E-mail: ${client.emailClient}</li>`)
                document.write(`<li>Celular: ${client.phoneClient}</li>`)
                document.write(`<li>Endereço Completo: ${client.addressClient}</li>`)
                document.write(`<li>Cidade: ${client.cityClient}</li>`)
                document.write(`<li>Estado: ${client.stateClient}</li>`)

               
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador não é compatível. Por isso, não será possível visualizar o conteúdo!");    
    
}
