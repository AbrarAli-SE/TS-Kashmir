import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}}/>;

}

// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// export default function RootLayout() {
//   return (
//       <SafejjeaProvider>
//         <SafeAreaView style={{ flex: 1}}>
//         </SafeAreaView>
//       </SafeAreaProvider>
//   );
// }
