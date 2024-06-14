import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  return (
    <View className="mb-14 flex-col items-center px-4">
      <View className="flex-row items-start gap-3">
        <View className="flex-1 flex-row items-center justify-center">
          <View className="h-[46px] w-[46px] items-center justify-center rounded-lg border border-secondary p-0.5">
            <Image
              source={{ uri: avatar }}
              className="h-full w-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="ml-3 flex-1 justify-center gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="font-pregular text-xs text-gray-100"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="h-5 w-5" resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
