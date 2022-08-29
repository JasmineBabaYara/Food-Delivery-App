import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Order from "./Order";

//importing icons
import nearby from "../assets/icons/nearby.png";
import basket from "../assets/icons/shopping-basket.png";
import rice_bowl from "../assets/icons/rice-bowl.png";
import noodle from "../assets/icons/noodle.png";
import hotdog from "../assets/icons/hotdog.png";
import salad from "../assets/icons/salad.png";
import hamburger from "../assets/icons/hamburger.png";
import pizza from "../assets/icons/pizza.png";
import fries from "../assets/icons/fries.png";
import sushi from "../assets/icons/sushi.png";
import donut from "../assets/icons/donut.png";
import drink from "../assets/icons/drink.png";
import star from "../assets/icons/star.png";

//importing images
import avatar_1 from "../assets/images/avatar-1.jpg";
import avatar_2 from "../assets/images/avatar-2.jpg";
import avatar_3 from "../assets/images/avatar-3.jpg";
import avatar_4 from "../assets/images/avatar-4.jpg";
import avatar_5 from "../assets/images/avatar-5.jpg";
import special_crispy_burger from "../assets/images/special-crispy-burger.jpeg";
import burger_restaurant_2 from "../assets/images/burger-restaurant-2.jpg";
import baked_fries from "../assets/images/baked-fries.jpg";
import crispy_chicken_burger from "../assets/images/chicken-burger.jpeg";
import chicago_hot_dog from "../assets/images/chicago-hot-dog.jpg";
import fries_restaurant from "../assets/images/fries-restaurant.jpg";
import hawaiian_pizza from "../assets/images/hawaiian-pizza.jpg";
import chicken_burger_honey from "../assets/images/chicken-burger-honey.jpeg";
import hot_dog_restaurant from "../assets/images/hot-dog-restaurant.jpeg";
import ice_kacang from "../assets/images/ice-kacang.jpg";
import japanese_restaurant from "../assets/images/japanese-restaurant.jpg";
import dessert from "../assets/images/Desserts.jpeg";
import drinks from "../assets/images/drinks.jpeg";
import kek_lapis from "../assets/images/kek-lapis.jpg";
import kolo_mee from "../assets/images/kolo-mee.jpg";
import nasi_briyani_mutton from "../assets/images/nasi-briyani-mutton.jpg";
import nasi_lemak from "../assets/images/nasi-lemak.jpg";
import noodle_shop from "../assets/images/noodle-shop.jpg";
import spicy_noodles from "../assets/images/spicy-noodles.jpeg";
import pizza_restaurant from "../assets/images/pizza-restaurant.jpeg";
import pizza_img from "../assets/images/pizza.jpg";
import salad_img from "../assets/images/salad.jpg";
import sarawak_laksa from "../assets/images/sarawak-laksa.jpg";
import sushi_img from "../assets/images/sushi.jpg";
import shrimp_noodles from "../assets/images/shrimp-noodles.jpeg";
import chicken_noodles from "../assets/images/chicken-noodles.jpeg";
import assorted_noodles from "../assets/images/assorted-noodles.jpeg";
import teh_c_peng from "../assets/images/teh-c-peng.jpg";
import tomato_pasta from "../assets/images/tomato-pasta.jpg";

export default function Home({ navigation }) {
  // Dummy Datas

  const { width, height } = Dimensions.get("window");

  const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: "Rice",
      icon: rice_bowl,
    },
    {
      id: 2,
      name: "Noodles",
      icon: noodle,
    },
    {
      id: 3,
      name: "Hot Dogs",
      icon: hotdog,
    },
    {
      id: 4,
      name: "Salads",
      icon: salad,
    },
    {
      id: 5,
      name: "Burgers",
      icon: hamburger,
    },
    {
      id: 6,
      name: "Pizza",
      icon: pizza,
    },
    {
      id: 7,
      name: "Snacks",
      icon: fries,
    },
    {
      id: 8,
      name: "Sushi",
      icon: sushi,
    },
    {
      id: 9,
      name: "Desserts",
      icon: donut,
    },
    {
      id: 10,
      name: "Drinks",
      icon: drink,
    },
    {
      id: 11,
      name: "Shakes",
      icon: drink,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "Special Crispy Burger",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: special_crispy_burger,
      duration: "30 - 45 min",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: crispy_chicken_burger,
          description: "Burger with crispy chicken, cheese and lettuce",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger with Honey Mustard",
          photo: chicken_burger_honey,
          description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Crispy Baked French Fries",
          photo: baked_fries,
          description: "Crispy Baked French Fries",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "Sweet and Spicy Noodles",
      rating: 4.9,
      categories: [2],
      priceRating: affordable,
      photo: spicy_noodles,
      duration: "25 - 35 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: avatar_1,
        name: "Paul",
      },
      menu: [
        {
          menuId: 4,
          name: "Shrimp Noodles",
          photo: shrimp_noodles,
          description: "Sweet and Spicy noodles with shrimp",
          calories: 100,
          price: 2,
        },
        {
          menuId: 5,
          name: "Chicken Noodles",
          photo: chicken_noodles,
          description: "Hot Noodles with chicken",
          calories: 100,
          price: 3,
        },
        {
          menuId: 6,
          name: "Assorted Noodles",
          photo: assorted_noodles,
          description: "Assorted Noodles",
          calories: 300,
          price: 20,
        },
      ],
    },
    {
      id: 3,
      name: " Pizza",
      rating: 4.8,
      categories: [4, 6],
      priceRating: expensive,
      photo: pizza_restaurant,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: avatar_2,
        name: "Jackson",
      },
      menu: [
        {
          menuId: 7,
          name: "Hawaiian Pizza",
          photo: hawaiian_pizza,
          description: "Canadian bacon, homemade pizza crust, pizza sauce",
          calories: 250,
          price: 15,
        },
        {
          menuId: 8,
          name: "Tomato & Basil Pizza",
          photo: pizza_img,
          description:
            "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
          calories: 250,
          price: 20,
        },
        {
          menuId: 9,
          name: "Tomato Pasta",
          photo: tomato_pasta,
          description: "Pasta with fresh tomatoes",
          calories: 100,
          price: 10,
        },
        {
          menuId: 10,
          name: "Mediterranean Chopped Salad ",
          photo: salad_img,
          description: "Finely chopped lettuce, tomatoes, cucumbers",
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 4,
      name: " Hotdogs",
      rating: 4.8,
      categories: [3, 7],
      priceRating: expensive,
      photo: hot_dog_restaurant,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: avatar_3,
        name: "James",
      },
      menu: [
        {
          menuId: 11,
          name: "Chicago Style Hot Dog",
          photo: chicago_hot_dog,
          description: "Fresh tomatoes, all beef hot dogs",
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 5,
      name: "Sashimi Sushi",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: japanese_restaurant,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: avatar_4,
        name: "Ahmad",
      },
      menu: [
        {
          menuId: 12,
          name: "Sushi sets",
          photo: sushi_img,
          description: "Fresh salmon, sushi rice, fresh juicy avocado",
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 6,
      name: "Cuisine",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: noodle_shop,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: avatar_4,
        name: "Muthu",
      },
      menu: [
        {
          menuId: 13,
          name: "Kolo Mee",
          photo: kolo_mee,
          description: "Noodles with char siu",
          calories: 200,
          price: 5,
        },
        {
          menuId: 14,
          name: "Sarawak Laksa",
          photo: sarawak_laksa,
          description: "Vermicelli noodles, cooked prawns",
          calories: 300,
          price: 8,
        },
        {
          menuId: 15,
          name: "Nasi Lemak",
          photo: nasi_lemak,
          description: "A traditional Malay rice dish",
          calories: 300,
          price: 8,
        },
        {
          menuId: 16,
          name: "Nasi Briyani with Mutton",
          photo: nasi_briyani_mutton,
          description: "A traditional Indian rice dish with mutton",
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 7,
      name: "Dessets",
      rating: 4.9,
      categories: [9, 11, 7],
      priceRating: affordable,
      photo: dessert,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 17,
          name: "Teh C Peng",
          photo: teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 18,
          name: "ABC Ice Kacang",
          photo: ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 19,
          name: "Kek Lapis",
          photo: kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
    {
      id: 8,
      name: "Drinks",
      rating: 4.9,
      categories: [10, 11, 7, 9],
      priceRating: affordable,
      photo: drinks,
      duration: "5 - 15 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 20,
          name: "Teh C Peng",
          photo: teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 21,
          name: "ABC Ice Kacang",
          photo: ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 22,
          name: "Kek Lapis",
          photo: kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: 10,
            paddingBottom: 20,
            backgroundColor:
              selectedCategory?.id == item.id ? "darkorange" : "#fff",
            borderRadius: 32,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id ? "#fff" : "#F5F5F6",
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 10,
              color: selectedCategory?.id == item.id ? "#fff" : "#000",
              fontSize: 12,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Main</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() =>
          navigation.navigate("Order", {
            item,
            currentLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: 30,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: width * 0.35,
              backgroundColor: "#fff",
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.duration}
            </Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          {/* Ratings */}
          <Image
            source={star}
            style={{
              height: 20,
              width: 20,
              tintColor: "darkorange",
              marginRight: 10,
            }}
          />
          <Text style={{ fontSize: 16 }}>{item.rating}</Text>

          {/* Different Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ fontSize: 16 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ fontSize: 20, color: "#898C95" }}> . </Text>
                </View>
              );
            })}

            {/* Prices of foods */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  fontSize: 16,
                  color: priceRating <= item.priceRating ? "#000" : "darkgrey",
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.location_img}>
          <Image source={nearby} resizeMode="contain" style={styles.nearby} />
        </TouchableOpacity>

        <View style={styles.street}>
          <Text style={styles.street_name}>{currentLocation.streetName}</Text>
        </View>

        <TouchableOpacity style={styles.cart}>
          <Image source={basket} resizeMode="contain" style={styles.basket} />
        </TouchableOpacity>
      </View>
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
  },

  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
  },

  location_img: {
    width: 50,
    paddingLeft: 20,
    justifyContent: "center",
  },

  nearby: {
    width: 30,
    height: 30,
  },

  street: {
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: "50%",
    height: "70%",
    alignSelf: "center",
  },

  street_name: {
    fontWeight: "bold",
    fontSize: 18,
  },

  cart: {
    width: 50,
    paddingRight: 20,
    justifyContent: "center",
  },

  basket: {
    width: 30,
    height: 30,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
