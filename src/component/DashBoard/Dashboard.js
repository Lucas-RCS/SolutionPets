import React, { useEffect, useState } from "react";
import { View, ImageBackground, Text } from "react-native";
import style from "./DashboardCss.js";
import { Div, DivCard } from "../../elements/common.js";
import { Image } from "react-native";
import { Info, Scales } from "phosphor-react-native";
import { Tooltip } from "react-native-elements";
import infoHook from "../../../api/hooks/info";

export function Dashboard() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    infoHook()
      .then(async (data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
                  <Text style={style.txtCardRight}>100g</Text>
                </Div>
              </View>
            </View>
          </DivCard>
          <DivCard style={style.card}>
            <View style={style.contentCard}></View>
          </DivCard>
        </Div>
      </View>
    </View>
  );
}
