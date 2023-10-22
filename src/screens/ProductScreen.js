import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import StarRating from "react-native-star-rating";
const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const fruit = route.params;
  return (
    <View className="flex-1" style={{ backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View className="flex-row justify-start items-center mx-5">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="border border-white rounded-full p-2">
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center mt-5 pb-8"
          style={{
            shadowColor: fruit.shadow,
            shadowRadius: 50,
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.9,
          }}>
          <Image
            style={{
              width: 290,
              height: 290,
            }}
            source={fruit.image}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 space-y-2 px-6 bg-orange-50"
        style={{
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}>
        <Text
          style={{ color: themeColors.text }}
          className="text-2xl mt-8 font-bold">
          {fruit.name}
        </Text>
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
          <Text className="text-gray-500 font-semibold">
            Sold <Text className="text-gray-900 font-extrabold">239</Text>
          </Text>
        </View>
        <StarRating
          disabled={true}
          starSize={18}
          containerStyle={{ width: 180 }}
          rating={fruit.stars}
          maxStars={5}
          emptyStarColor="lightgray"
          fullStar={require("../../assets/images/fullStar.png")}
        />
        <View
          style={{
            height: 165,
          }}>
          <Text
            className="tracking-wider py-3"
            style={{
              color: themeColors.text,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tincidunt erat et volutpat faucibus. Curabitur at orci lectus. Duis
            sagittis ut ipsum nec molestie. In hac habitasse platea dictumst.
            Nullam venenatis elementum dolor, ac imperdiet urna vehicula nec.
            Morbi laoreet vitae orci ac tempus
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl">${fruit.price}</Text>
          <TouchableOpacity
            className="flex-1 p-3 ml-6 rounded-xl"
            onPress={() => navigation.navigate("Cart")}
            style={{
              backgroundColor: fruit.shadow,
              opacity: 0.6,
              shadowColor: fruit.shadow,
              shadowRadius: 20,
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.4,
            }}>
            <Text className="text-center text-xl text-white font-bold">
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
