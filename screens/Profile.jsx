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
import Accordion from "../components/Accordion";
import biodata from "../assets/data/biodata";

function Profile() {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.SafeAreaView}>
        {biodata.map((bio) => {
          return (
            <ScrollView vertical={true}>
              <View style={styles.profilePhoto}>
                <Image
                  source={require("../assets/Images/profile-pic.jpg")}
                  style={{ width: 380, height: 380, borderRadius: 30 }}
                />
                <Text style={styles.smallText}>{bio.name}</Text>
                <Text style={styles.meduimText}>{bio.email}</Text>
              </View>
              <Accordion
                accordionTitle="Education"
                content={bio.education.map((edu) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{edu.title}</Text>
                      <Text>{edu.year}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Courses"
                content={bio.courses.map((course) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{course.name}</Text>
                      <Text>{course.year}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Appointments"
                content={bio.appointments.map((appointment) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{appointment.name}</Text>
                      <Text>
                        {appointment["start date"]}-{appointment["end date"]}
                      </Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Promotions"
                content={bio.promotions.map((promotion) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{promotion.title}</Text>
                      <Text>{promotion.year}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Dependants"
                content={bio.dependants.map((dependant) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{dependant.name}</Text>
                      <Text>{dependant.sex}</Text>
                      <Text>{dependant.relationship}</Text>
                      <Text>{dependant.dob}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Marriage"
                content={bio.marriage.map((married) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{married.name}</Text>
                      <Text>{married.phone}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Nok"
                content={bio.nok.map((aNok) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{aNok.name}</Text>
                      <Text>{aNok.phone}</Text>
                      <Text>{aNok.relationship}</Text>
                      <Text>{aNok.address}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Promotion Exam"
                content={bio["promotion exam"].map((exam) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{exam.stage}</Text>
                      <Text>{exam.result}</Text>
                      <Text>{exam.grade}</Text>
                      <Text>{exam.attempt}</Text>
                      <Text>{exam.date}</Text>
                    </View>
                  );
                })}
              />
              <Accordion
                accordionTitle="Awards"
                content={bio.award.map((anAward) => {
                  return (
                    <View style={styles.accordionContent}>
                      <Text>{anAward.decoration}</Text>
                      <Text>{anAward.year}</Text>
                    </View>
                  );
                })}
              />
            </ScrollView>
          );
        })}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    height: 900,
  },
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
  // accordionTitle: {
  //   paddingVertical: 15,
  //   paddingHorizontal: 25,
  //   width: "100%",
  //   backgroundColor: "#D1D1D1",
  //   display: "flex",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // accordionTitleText: {
  //   textAlign: "left",
  //   marginTop: 0,
  // },
  accordionContent: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "100%",
    backgroundColor: "whitesmoke",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // comment: {
  //   width: "100%",
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: 30,
  // },

  // input: {
  //   width: "80%",
  //   height: 50,
  //   backgroundColor: "rgba(215, 215, 215, 0.5)",
  //   borderTopLeftRadius: 20,
  //   borderBottomLeftRadius: 20,
  //   padding: 10,
  // },
  // button: {
  //   backgroundColor: "#1BC722",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   width: "20%",
  //   height: 50,
  //   color: "white",
  //   borderTopRightRadius: 20,
  //   borderBottomRightRadius: 20,
  // },
});
export default Profile;
