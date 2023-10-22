import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { categories, featuredFruits } from "../constants";
import { themeColors } from "../theme";
import { Ionicons, Feather } from "@expo/vector-icons";
import FruitCard from "../components/fruitCard";
import FruitCardSales from "../components/fruitCardSales";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [isActiveCategory, setActiveCategory] = useState("Oranges");
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <View className="px-5 flex-row items-center justify-between">
        <Ionicons name="menu" size={24} color="black" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          className="flex items-center justify-center p-4 bg-orange-200/40 rounded-full">
          <Feather name="shopping-cart" size={20} color={"orange"} />
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        <Text className="pl-4 text-2xl font-medium tracking-widest">
          Seasonal
        </Text>
        <Text className="pl-4 font-semibold text-3xl">
          Fruits and Vegetables
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-8 px-4">
          {categories.map((categories, index) => {
            let isActive = categories === isActiveCategory;
            let activeClass = `text-xl ${isActive ? "font-bold" : ""}`;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(categories)}
                className="mr-8 relative">
                <Text
                  className={activeClass}
                  style={{
                    color: themeColors.text,
                  }}>
                  {categories}
                </Text>
                {isActive && (
                  <View className="h-[2px] rounded-lg w-full bg-orange-300" />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View className="mt-8">
        <ScrollView
          className=""
          horizontal
          showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => (
            <FruitCard key={index} fruit={fruit} />
          ))}
        </ScrollView>
      </View>
      <View className="mt-8 pl-4 space-y-1">
        <Text className="text-xl font-bold" style={{ color: themeColors.text }}>
          Hot Sales
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            overflow: "visible",
          }}>
          {[...featuredFruits].reverse().map((fruit, index) => (
            <FruitCardSales fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
