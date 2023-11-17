import Connection from "../Connection";
import setting from "../settings/device/info";
import credentials from "../../utils/credentials";

export default async () => {
  const last_resquest = setting.last_resquest();
  const feed_weight = setting.feed_weight();

  const auth = {
    username: credentials.serialNumber,
    password: await credentials.activateKey(),
  };

  last_resquest[0].auth = auth;
  feed_weight[0].auth = auth;

  return new Promise((resolve, reject) => {
    Connection.useApiResult(...last_resquest)
      .then((data) => {
        const last_resquest_data = data;

        Connection.useApiResult(...feed_weight)
          .then((data) => {
            const feed_weight_data = data;

            resolve({
              last_resquest: last_resquest_data,
              feed_weight: feed_weight_data.feedWeight,
            });
          })
          .catch(() => {
            reject("error");
          });
      })
      .catch(() => {
        reject("error");
      });
  });

  // return Connection.useApiResult(...last_resquest);
};

// loginHook(e.Login, e.Senha)
//   .then(([data, status]) => {
//     cookie.Token = data.token;
//     storage.Name = data.name;

//     const update = storage.updateLocalStorage(data.company);

//     if (update != null)
//       update.then(() => {
//         storage.updateCSSProperties();
//         message.success("Login realizado com sucesso!");
//         window.location.href = "/home";
//       });
//     else {
//       message.success("Login realizado com sucesso!");
//       setTimeout(() => {
//         window.location.href = "/home";
//       }, 200);
//     }
//   })
//   .catch(([error, status]) => {
//     message.error("Erro: " + error);
//   });
