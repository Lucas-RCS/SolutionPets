import Connection from "../Connection";
import setting from "../settings/access";
import credentials from "../../utils/credentials";

export default {
  set: async (dates) => {
    const config = setting.set_activation(dates);

    config.auth = {
      username: credentials.serialNumber,
      password: await credentials.activateKey(),
    };

    return Connection.useApiResult(...config);
  },
  get: async (dates) => {
    const config = setting.list_activation(dates);

    config.auth = {
      username: credentials.serialNumber,
      password: await credentials.activateKey(),
    };

    return Connection.useApiResult(...config);
  },
};
