import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import fire from "../assets/icons/fire.png";
import master_card from "../assets/icons/mastercard.png";
const { width, height } = Dimensions.get("window");

export default function Restaurant({ navigation, route }) {
  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId == menuId);

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 10,
          paddingBottom: 20,
        }}
      >
        {restaurant?.menu.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8 * 0.8, 10, 8 * 0.8],
            extrapolate: "clamp",
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["grey", "darkorange", "grey"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: 30,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  }

  function renderOrder() {
    return (
      <View>
        {renderDots()}
        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderBottomColor: "#F6F6F7",
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {getBasketItemCount()} items in Cart
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              ${sumOrder()}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo name="location-pin" size={20} color="grey" />
              <Text
                style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}
              >
                Location
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Image
                source={master_card}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "grey",
                }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18 }}>8888</Text>
            </View>
          </View>

          {/* Order Button */}
          <View
            style={{
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: width * 0.9,
                padding: 17,
                backgroundColor: "darkorange",
                alignItems: "center",
                borderRadius: 20,
              }}
              onPress={() =>
                navigation.navigate("Delivery", {
                  restaurant: restaurant,
                  currentLocation: currentLocation,
                })
              }
            >
              <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
                ORDER
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/** empty view to cover safearea view space */}
        <View
          style={{
            position: "absolute",
            bottom: -34,
            left: 0,
            right: 0,
            height: 34,
            backgroundColor: "#fff",
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>

        {/* Restaurant Name Section */}
        <View style={styles.restaurant_name_section}>
          <View style={styles.restaurant_name}>
            <Text style={styles.restaurant}>{restaurant?.name}</Text>
          </View>
        </View>

        {/* food info section */}
        <TouchableOpacity style={styles.listicon}>
          <Feather name="list" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View style={{ height: height * 0.35, marginTop: 20 }}>
              {/* Food Image */}
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: width,
                  height: "100%",
                }}
              />

              {/* Quantity */}
              <View style={styles.quantity}>
                <TouchableOpacity
                  style={styles.decreaseorder}
                  onPress={() => editOrder("-", item.menuId, item.price)}
                >
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>-</Text>
                </TouchableOpacity>

                <View style={styles.orderquantity}>
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    {getOrderQty(item.menuId)}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.increaseorder}
                  onPress={() => editOrder("+", item.menuId, item.price)}
                >
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name & Description */}
            <View
              style={{
                width: width,
                alignItems: "center",
                marginTop: 25,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  marginVertical: 10,
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {item.description}
              </Text>
            </View>

            {/* Calories */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Image
                source={fire}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "grey",
                }}
              >
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {renderOrder()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F7",
  },

  backicon: {
    width: 50,
    paddingLeft: 20,
    justifyContent: "center",
  },

  restaurant_name_section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  restaurant_name: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: "#e6e6e6",
  },

  restaurant: {
    fontSize: 18,
    fontWeight: "bold",
  },

  listicon: {
    width: 50,
    paddingRight: 20,
    justifyContent: "center",
  },

  quantity: {
    position: "absolute",
    bottom: -20,
    width: width,
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
  },

  decreaseorder: {
    width: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },

  orderquantity: {
    width: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  increaseorder: {
    width: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});
