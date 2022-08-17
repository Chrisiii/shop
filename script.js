import { data } from "/index.js";

const container = document.getElementById("container");
let newArr = []

function fetchData() {
  return new Promise((resolve) => {
    resolve(data);
  });
}

function drewProducts() {
  fetchData()
    .then((res) => JSON.parse(res))
    .then((items) => {
        items.forEach(item => {
           let element =  createProduct(item)
          container.append(element)
        });  
    });
}

drewProducts();

function createProduct({ img, name, price }) {
  let div = document.createElement("div")

  let image = document.createElement("img");
  image.setAttribute("src", `${img}`);

  let title = document.createElement("span");
  title.innerText = name;

  let prices = document.createElement("span");
  prices.innerText = price;

  div.append(image, title, prices)
  return div
}

function filter(){

}
