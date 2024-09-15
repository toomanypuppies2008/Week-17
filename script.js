/*Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:

    создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
    
    создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
    
    создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла. Объект, с которым вам предстоит работать:*/

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>",
  },
];

class Transport {
  constructor(type, price, brand, image) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.image = image;
  }
  getInfo() {
    return {
      Тип: this.type,
      Марка: this.brand,
    };
  }
  getPrice() {
    return {
      Цена: (this.price += " каких-то денег"),
    };
  }
  getImageUrl() {
    return this.image.slice(1, -1);
  }
}

class Car extends Transport {
  constructor(type, price, brand, image, doors) {
    super(type, price, brand, image);
    this.doors = doors;
  }
  getDoorsCount() {
    return {
      "Количество дверей": this.doors,
    };
  }
}

class Bike extends Transport {
  constructor(type, price, brand, image, maxSpeed) {
    super(type, price, brand, image);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return {
      "Максимальная скорость": (this.maxSpeed += " каких-то единиц"),
    };
  }
}

function createObject(data) {
  if (data.type === "car")
    return new Car(data.type, data.price, data.brand, data.image, data.doors);
  if (data.type === "bike")
    return new Bike(
      data.type,
      data.price,
      data.brand,
      data.image,
      data.maxSpeed
    );
}

const newArrayOfObjects = data.map(createObject);

let car1 = newArrayOfObjects[0];
let car2 = newArrayOfObjects[1];
let bike1 = newArrayOfObjects[2];
let bike2 = newArrayOfObjects[3];

function fillInfo(div, item) {
  const p1 = document.createElement("p");
  div.appendChild(p1);
  for (let [key, value] of Object.entries(item.getInfo())) {
    p1.append(`${key}: ${value} \n`);
  }
  const p2 = document.createElement("p");
  div.appendChild(p2);
  for (let [key, value] of Object.entries(item.getPrice())) {
    p2.append(`${key}: ${value}`);
  }
  const p3 = document.createElement("p");
  if (item instanceof Car) {
    for (let [key, value] of Object.entries(item.getDoorsCount())) {
      p3.append(`${key}: ${value}`);
    }
  }
  if (item instanceof Bike) {
    for (let [key, value] of Object.entries(item.getMaxSpeed())) {
      p3.append(`${key}: ${value}`);
    }
  }
  div.appendChild(p3);
  div.style.backgroundImage = `url(${item.getImageUrl()})`;
  div.style.backgroundPosition = "center";
  div.style.backgroundSize = "cover";
  div.style.opacity = 0.8;
}

const button1 = document
  .getElementById("button1")
  .addEventListener("click", function () {
    const div1 = document.getElementById("div1");
    fillInfo(div1, car1);
    document.getElementById("button1").setAttribute("disabled", true);
  });

const button2 = document
  .getElementById("button2")
  .addEventListener("click", function () {
    const div2 = document.getElementById("div2");
    fillInfo(div2, car2);
    document.getElementById("button2").setAttribute("disabled", true);
  });

const button3 = document
  .getElementById("button3")
  .addEventListener("click", function () {
    const div3 = document.getElementById("div3");
    fillInfo(div3, bike1);
    document.getElementById("button3").setAttribute("disabled", true);
  });

const button4 = document
  .getElementById("button4")
  .addEventListener("click", function () {
    const div4 = document.getElementById("div4");
    fillInfo(div4, bike2);
    document.getElementById("button4").setAttribute("disabled", true);
  });
