import Connection from '../Connection';
import setting from '../settings/access';
import credentials from "../../utils/credentials";

export default (pass) => {
   const config = setting.login(credentials.serialNumber, pass);

   return Connection.useApiResult(...config);
} 