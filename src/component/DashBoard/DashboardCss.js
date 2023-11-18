import { StyleSheet } from "react-native";
// #48ff9a

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    height: "100%",
  },
  header: {
    flex: 0,
    height: 250,
    backgroundColor: "transparent",
  },
  containerDash: {
    flex: 1,
    paddingTop: 65,
    paddingLeft: 20,
  },
  welcome: {
    color: "#f8f9fc",
    fontSize: 25,
    fontWeight: "bold",
  },
  titleDash: {
    color: "#f8f9fc",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  imgLogo: {
    width: "15%",
    height: "100%",
    marginLeft: 10,
  },
  logo: {
    flex: 0,
    width: "100%",
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f8f9fc",
    padding: 20,
  },
  card: {
    height: 200,
    flex: 1,
    backgroundColor: "#f8f9fc",
    borderRadius: 12,
    flexDirection: "colunm",
    justifyContent: "end",
    shadowColor: "#141415",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderLeftWidth: 15,
    borderLeftColor: "#141415",
    borderRadius: 12,
  },
  textCard: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f8f9fc",
  },
  containerCard: {
    flex: 1,
    flexDirection: "colunm",
    padding: 20,
  },
  viewInfo: {
    flex: 0,
    width: "100%",
    height: "20%",
    flexDirection: "row",
    color: "#141415",
    alignItems: "start",
    justifyContent: "space-between",
  },
  txtInfo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tooltipTxt: {
    fontSize: 15,
    fontWeight: "600",
  },
  contentCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  divLeft: {
    flex: 0,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  divRight: {
    flex: 0,
    width: "50%",
    height: "60%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#48ff9a",
  },
  divRight2: {
    flex: 0,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  divLeft2: {
    flex: 0,
    width: "60%",
    height: "60%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#48ff9a",
  },
  txtCardRight: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#141415",
  },
  txtCardLeft2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#141415",
  },
  timeText: {
    fontSize: 18,
    textAlign: "center",
    color: "#14141555",
    fontWeight: "bold",
  },
});

export default style;
