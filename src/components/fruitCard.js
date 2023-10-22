import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const FruitCard = ({ fruit }) => {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <View
      style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }}
      className="mx-5">
      <TouchableOpacity
        onPress={() => setFavorite((prev) => !prev)}
        className="flex-row justify-end mt-4 mr-4">
        <AntDesign
          name="heart"
          size={24}
          color={isFavorite ? fruit.shadow : "white"}
        />
      </TouchableOpacity>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: fruit.shadow,
          shadowRadius: 40,
          shadowOffset: {
            width: 0,
            height: 50,
          },
          shadowOpacity: 0.6,
        }}>
        <Image source={fruit.image} style={{ width: 210, height: 210 }} />
      </View>
      <View className="ml-4 my-4">
        <Text className="font-bold text-xl text-white shadow">
          {fruit.name}
        </Text>
        <Text className="font-bold text-lg text-white shadow tracking-widest">
          {fruit.price}$
        </Text>
      </View>
    </View>
  );
};

export default FruitCard;
