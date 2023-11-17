import Connection from "../Connection";
import setting from "../settings/device/activation";
import credentials from "../../utils/credentials";

export default {
  set: async (dates) => {
    const config = setting.set_activation(dates);

    config[0].auth = {
      username: credentials.serialNumber,
      password: await credentials.activateKey(),
    };

    return Connection.useApiResult(...config);
  },
  get: async () => {
    const config = setting.list_activation();
    
    config[0].auth = {
      username: credentials.serialNumber,
      password: await credentials.activateKey(),
    };

    return Connection.useApiResult(...config);
  },
};
