import Image from "next/image";
import OfferCard from "./RestaurantCard";
import pizaa from "@/assets/pizza.jpg";
import adjaruli from "@/assets/adjaruli.jpg";
import asia from "@/assets/asia.webp";
import burger from "@/assets/burger.jpg";
import cake from "@/assets/cake.jpg";
import chicken from "@/assets/chicken.jpeg";
import imeruli from "@/assets/imeruli.webp";
import khinkali from "@/assets/khinkali.jpg";
import pasta from "@/assets/pasta.jpg";
import salad from "@/assets/salad.jpg";
import soup from "@/assets/soup.jpg";
import sushi from "@/assets/sushi.jpg";
import promotion from "@/assets/promotion.svg";
const restaurants = [
  {
    id: 1,
    name: "Italian House",
    offer: "Pasta Mamma-Mia",
    img: pasta,
    adress: "34,Celentano Street,Rome",
    discount: "20%",
  },
  {
    id: 2,
    name: "Georgian Guest",
    offer: "Khinkali",
    img: khinkali,
    adress: "112,Gamarjoba Street,Tbilisi",
    discount: "12%",
  },
  {
    id: 3,
    name: "At Chinese  ",
    offer: "Asian Pastan from Jackie",
    img: asia,
    adress: "17,Chan Street,Beijing",
    discount: "10%",
  },
  {
    id: 4,
    name: "US Dinnery  ",
    offer: "Texas Burger - XL",
    img: burger,
    adress: "153,Nelson Street,Boston",
    discount: "25%",
  },
  {
    id: 5,
    name: "Dona Cakes",
    offer: " Strawwbery Cake ",
    img: cake,
    adress: "15,Admiral Street,Georgetown",
    discount: "20%",
  },
  {
    id: 6,
    name: "Meat World",
    offer: "Chicken",
    img: chicken,
    adress: "212,Celtics Street,Los-Angeles",
    discount: "25%",
  },
  {
    id: 7,
    name: "Sakartvelo",
    offer: "Adjaruli Khachapuri",
    img: adjaruli,
    adress: "57,Chavchavadze Street,Batumi",
    discount: "30%",
  },
  {
    id: 8,
    name: "Pizza Room  ",
    offer: "Salmon Pizza",
    img: pizaa,
    adress: "41,Calogero Street,Rome",
    discount: "17%",
  },
  {
    id: 9,
    name: "Imereti Restaurant ",
    offer: "Imeruli Khachapuri",
    img: imeruli,
    adress: "14,Bikentia Street,Kutaisi",
    discount: "32%",
  },
  {
    id: 10,
    name: "Salad Mastery",
    offer: "Salad",
    img: salad,
    adress: "153,Curry Street,Oakland",
    discount: "27%",
  },
  {
    id: 11,
    name: "Hot & Tasty",
    offer: "Chilly Soup",
    img: soup,
    adress: "82,Tatum Street,San-Antonio",
    discount: "25%",
  },
  {
    id: 12,
    name: "Sushi Master  ",
    offer: "Sushi - XL ",
    img: sushi,
    adress: "17th Ave,Jordan Street,Chicago",
    discount: "25%",
  },
];
const Restaurants = () => {
  return (
    <section>
      <div className="flex  justify-center text-2xl md:text-[1.7rem] my-12 lg:text-[1.9rem]">
        <h1 className="flex gap-1 fontpacifico font-extrabold ">
          Best Restaurants {""}&
          <span className="flex">
            <Image alt="icon" src={promotion} width={30} /> Promotions
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto  ">
        {restaurants.map((restaurant) => (
          <OfferCard
            key={restaurant.id}
            name={restaurant.name}
            adress={restaurant.adress}
            img={restaurant.img}
            offer={restaurant.offer}
          />
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
