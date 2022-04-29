const my_api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BSV&tsyms=USD,EUR'
const my_api_key = "2ce5222a6d0867167d59150d7ad6a4b7616bba7a0d1299da87a444e979ddc5ce"

const my_crypto_url = my_api_url + my_api_key

async function getwoc(){
    const response = await fetch(my_api_url);
    const data= await response.json();
    const {currency,rate} = data;
    document.getElementById('BTC USD prc').textContent=data.BTC.USD;
    document.getElementById('BTC EUR prc').textContent=data.BTC.EUR;
    document.getElementById('ETH USD prc').textContent=data.ETH.USD;
    document.getElementById('ETH EUR prc').textContent=data.ETH.EUR;
    document.getElementById('BSV USD prc').textContent=data.BSV.USD;
    document.getElementById('BSV EUR prc').textContent=data.BSV.EUR;
}
getwoc()