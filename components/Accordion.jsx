import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { ScrollView } from "react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

function Accordion(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={handlePress} style={styles.accordionTitle}>
        <Text style={[styles.meduimText, styles.accordionTitleText]}>
          {props.accordionTitle}
        </Text>
        <Icon name={isCollapsed ? "chevron-down" : "chevron-up"} size={20} />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} style={styles.accordionContent}>
        {props.content}
        <View style={styles.comment}>
          <TextInput style={styles.input} placeholder="Add Comment..." />
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.meduimText, { marginTop: 0, color: "white" }]}>
              ADD
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.commentTable}>
          <View style={styles.tableHeader}>
            <Text style={styles.smallText}>Comment</Text>
            <Text style={styles.smallText}>Status</Text>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.smallText,
                  {
                    width: "75%",
                    fontWeight: 100,
                    textAlign: "left",
                    marginTop: 0,
                  },
                ]}
              >
                1. Comment on issue the personnel wants to be resolved
              </Text>
              <Text style={[styles.smallText, { color: "#1BC722" }]}>
                RESOLVED
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.smallText,
                  {
                    width: "75%",
                    fontWeight: 100,
                    textAlign: "left",
                    marginTop: 0,
                  },
                ]}
              >
                2. Comment on issue the personnel wants to be resolved
              </Text>
              <Text style={[styles.smallText, { color: "orange" }]}>SENT</Text>
            </View>
          </View>
        </View>
      </Collapsible>
    </View>
  );
}
const styles = StyleSheet.create({
  smallText: {
    fontFamily: "poppinsBold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  meduimText: {
    fontFamily: "poppinsBold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  profilePhoto: {
    display: "flex",
    alignItems: "center",
  },
  accordionTitle: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "100%",
    backgroundColor: "#D1D1D1",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accordionTitleText: {
    textAlign: "left",
    marginTop: 0,
  },
  accordionContent: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "100%",
    backgroundColor: "whitesmoke",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  comment: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(215, 215, 215, 0.5)",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#1BC722",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: 50,
    color: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  commentTable: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

    flexWrap: "wrap",
  },
  tableHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableBody: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tableRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default Accordion;
