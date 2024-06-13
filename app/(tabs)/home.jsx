import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6 px-4">
            <View className="mb-6 flex-row items-start justify-between">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back,{" "}
                </Text>
                <Text className="font-psemibold text-2xl text-white">
                  Andrei
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="h-10 w-9"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
