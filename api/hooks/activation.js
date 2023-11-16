import Connection from "../Connection";
import setting from "../settings/access";
import credentials from "../../utils/credentials";

export default {
  set: (dates) => {
    const config = setting.set_activation(dates);

    config.auth = {
      username: credentials.serialNumber,
      password: credentials.activateKey(),
    };

    return Connection.useApiResult(...config);
  },
  get: (dates) => {
    const config = setting.list_activation(dates);

    config.auth = {
      username: credentials.serialNumber,
      password: credentials.activateKey(),
    };

    return Connection.useApiResult(...config);
  },
};
