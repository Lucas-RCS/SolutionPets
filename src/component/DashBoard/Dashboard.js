import React, { useEffect, useState } from "react";
import { View, ImageBackground, Text } from "react-native";
import style from "./DashboardCss.js";
import { Div, DivCard } from "../../elements/common.js";
import { Image } from "react-native";
import { Envelope, Info, Scales } from "phosphor-react-native";
import { Tooltip } from "react-native-elements";
import infoHook from "../../../api/hooks/info";
import moment from "moment-timezone";

export function Dashboard() {
  const [lastResquest, setLastResquest] = useState({
    date: "00/00/0000",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [feedWeight, setFeedWeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      infoHook()
        .then(async (data) => {
          data.last_resquest.date = moment(data.last_resquest.date)
            .format("DD/MM/YYYY")
            .toString();

          setLastResquest(data.last_resquest);
          setFeedWeight(data.feed_weight);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <View style={style.container}>
        <Div style={style.header}>
          <ImageBackground
            source={require("../../../assets/img/background2.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <Div style={style.containerDash}>
              <Text style={style.welcome}>Bem vindo(a)</Text>
              <Div style={style.logo}>
                <Text style={style.titleDash}>Solution Pets</Text>
                <Image
                  source={require("../../../assets/img/logo.png")}
                  style={style.imgLogo}
                />
              </Div>
            </Div>
          </ImageBackground>
        </Div>
        <Div style={style.content}>
          <DivCard style={style.card}>
            <View style={style.containerCard}>
              <View style={style.viewInfo}>
                <Tooltip
                  backgroundColor="#48ff9a"
                  height={60}
                  width={300}
                  popover={
                    <Text style={style.tooltipTxt}>
                      Medido com base no peso de cada porção dispejado no pote
                      de ração
                    </Text>
                  }
                >
                  <Info size={32} weight="duotone" color="#141415" />
                </Tooltip>
                <Text style={style.txtInfo}>Quantidade de Ração</Text>
              </View>

              <View style={style.contentCard}>
                <Div style={style.divLeft}>
                  <Scales size={100} weight="duotone" color="#141415" />
                  <Text style={style.txtInfo}>Balança</Text>
                </Div>
                <Div style={style.divRight}>
                  <Text style={style.txtCardRight}>{feedWeight}g</Text>
                </Div>
              </View>
            </View>
          </DivCard>
          <DivCard style={style.card}>
            <View style={style.containerCard}>
              <View style={style.viewInfo}>
                <Tooltip
                  backgroundColor="#48ff9a"
                  height={60}
                  width={300}
                  popover={
                    <Text style={style.tooltipTxt}>
                      Momento em que o dispositivo realizou a sua ultima
                      requisição.
                    </Text>
                  }
                >
                  <Info size={32} weight="duotone" color="#141415" />
                </Tooltip>
                <Text style={style.txtInfo}>Ultima Requisição</Text>
              </View>

              <View style={style.contentCard}>
                <Div style={style.divLeft2}>
                  <Text style={style.txtCardLeft2}>{lastResquest.date}</Text>
                </Div>
                <Div style={style.divRight2}>
                  <Envelope size={80} weight="duotone" color="#141415" />
                </Div>
              </View>
              <Text style={style.timeText}>
                Há {lastResquest.days} dias {lastResquest.minutes} minutos e{" "}
                {lastResquest.seconds} segundos
              </Text>
            </View>
          </DivCard>
        </Div>
      </View>
    </View>
  );
}
