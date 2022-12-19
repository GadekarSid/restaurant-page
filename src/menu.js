import './style.css';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./images/pizzas', false, /\.(png|jpe?g|svg)$/));

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    console.log(menu);
    menu.appendChild(
        createMenuItem(
          "Salsiccia",
          "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Gamberi",
          "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Pepe",
          "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
        )
      );
      menu.appendChild(
        createMenuItem(
          "Disgustoso",
          "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
      );
      console.log(menu);
      return menu;
    }
    
function createMenuItem(name, description) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
      
        const foodName = document.createElement("h2");
        foodName.textContent = name;
      
        const foodDescription = document.createElement("p");
        foodDescription.textContent = description;
      
        const foodImage = document.createElement("img");
        console.log('images',images);
        console.log(`${name}.png`);
        foodImage.src = images[`${name.toLowerCase()}.png`];
        foodImage.alt = `${name}`;
      
        menuItem.appendChild(foodImage);
        menuItem.appendChild(foodName);
        menuItem.appendChild(foodDescription);
        console.log(menuItem);
        return menuItem;
    }
export default createMenu;