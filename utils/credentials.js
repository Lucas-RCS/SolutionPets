import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
  url: "https://api.lucas-rcs.repl.co",
  serialNumber: "1YpCljGie2XPULY",
  activateKey: async () => {
    try {
      const value = await AsyncStorage.getItem("pass");
      return value;
    } catch (e) {
      console.error("Erro ao buscar no AsyncStorage", e);
      return null;
    }
  },
};
