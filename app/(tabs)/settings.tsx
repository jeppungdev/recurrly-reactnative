import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Setting = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Setting</Text>
    </SafeAreaView>
  );
};

export default Setting;
