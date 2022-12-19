import './style.css';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
function createHome(){
    const element = document.createElement('div');
    element.classList.add('home');
    let paragraph = document.createElement('p');
    paragraph.textContent = "Come and enjoy the best pizzas";
    element.appendChild(paragraph);
    paragraph = document.createElement('p');
    paragraph.textContent = "Hand Made by our Famous chef";
    element.appendChild(paragraph);
    const chefImage = document.createElement("img");
    chefImage.src = images['chef.png'];
    chefImage.alt = "Chef";
    element.appendChild(chefImage);
    return element;
}

export default createHome;