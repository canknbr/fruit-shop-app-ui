import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const FruitCardSales = ({ fruit }) => {
  const navigation = useNavigation();
  return (
    <View className="mr-6">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Product", { ...fruit, color: fruit.color(1) })
        }
        className="-mb-9 flex-row justify-center shadow-md z-20">
        <Image
          source={fruit.image}
          style={{
            height: 65,
            width: 65,
            overflow: "visible",
            shadowColor: fruit.shadowColor,
            shadowRadius: 20,
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.6,
          }}
        />
      </TouchableOpacity>
      <View
        className="rounded-xl flex justify-end items-center"
        style={{
          backgroundColor: fruit.color(0.4),
          height: 75,
          width: 80,
        }}>
        <Text className="text-gray-800 text-center font-semibold tracking-wide pb-3">
          ${fruit.price}
        </Text>
      </View>
    </View>
  );
};

export default FruitCardSales;
