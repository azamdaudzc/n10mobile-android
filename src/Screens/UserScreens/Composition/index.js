import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import HomeHeader from "../../../Components/HomeHeader";
import UserHeader from "../../../Components/UserHeader";
import DateView from "../../../Components/DateView";
import UpdatedCompositionData from "../../../Constants/UpdatedCompositionData";
import CompCard from "../../../Components/CompCard";
import DatePicker from "react-native-modern-datepicker";
import PastComposition from "../../../Constants/PastComposition";
import ProgressData from "../../../Constants/ProgressData";
import ProgressPic from "../../../Components/ProgressPic";
import COLORS from "../../../Constants/COLORS";
import { downArray } from "../../../Constants/Images";

const Composition = () => {
    const [comp, setComp] = useState(0);
    const [date, setDate] = useState(new Date()?.toLocaleDateString());
    const [open, setOpen] = useState(false);
    // const [selectedDate, setSelectedDate] = useState(new Date());

    const renderCompData = ({ item }) => {
        return (
            <>
                <CompCard title={item?.title} value={item?.value} />
            </>
        );
    };

    const renderPast = ({ item }) => {
        return (
            <>
                <CompCard title={item?.title} value={item?.value} />
            </>
        );
    };

    const renderProgress = ({ item }) => {
        return (
            <>
                <ProgressPic picture={item?.picture} />
            </>
        );
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: "center", backgroundColor: COLORS.grey }}>
                    <HomeHeader />
                </View>
                <UserHeader type={1} />
                <DateView title={"WEEK OF 24 APRIL 2022 - 07 MAY 2022"} />
                <View style={styles.nutrition}>
                    <Text style={{ color: COLORS.white, alignSelf: "center" }}>
                        PREVIOUS NUTRITION STATS
                    </Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity
                        style={[
                            styles.past,
                            { backgroundColor: comp === 1 ? COLORS.mehron : COLORS.grey }
                        ]}
                        onPress={() => {
                            setComp(0);
                        }}
                    >
                        <Text style={styles.updatedText}>Updated Composition</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.past,
                            { backgroundColor: comp === 1 ? COLORS.grey : COLORS.mehron }
                        ]}
                        onPress={() => {
                            setComp(1);
                        }}
                    >
                        <Text style={styles.updatedText}>Past Composition</Text>
                    </TouchableOpacity>
                </View>
                {
                    comp === 0 ? (
                        <>
                            <FlatList
                                data={UpdatedCompositionData}
                                renderItem={renderCompData}
                                keyExtractor={(item) => item.id}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
                    ) : (
                        <>
                            <View>
                                <View style={styles.dateView}>
                                    <Text style={styles.selectDate}>Select Date</Text>
                                    <TouchableOpacity
                                        style={styles.dateTouch}
                                        onPress={() => {
                                            open === true ? setOpen(false) : setOpen(true);
                                        }}
                                    >
                                        <Text style={styles.dateText}>
                                            {date}
                                        </Text>
                                        <Image
                                            source={downArray}
                                            style={styles.downArrow}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ height: "25%" }}>
                                <FlatList
                                    data={PastComposition}
                                    renderItem={renderPast}
                                    keyExtractor={(item) => item.id}
                                    // style={{ height: "20%" }}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                            <View style={styles.progressView}>
                                <Text style={styles.progressText}>Progress Picture/Link</Text>
                                <FlatList
                                    data={ProgressData}
                                    renderItem={renderProgress}
                                    keyExtractor={(item) => item.id}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={4}
                                    contentContainerStyle={{
                                        // flex: 1,
                                        justifyContent: "space-between",
                                        alignSelf: "center",
                                        alignItems: "space-around",
                                        width: "80%",
                                        height: 130
                                        // alignContent: "center"
                                    }}
                                />
                            </View>
                        </>
                    )
                }
            </View>
            {
                open === true ? (
                    <>
                        <DatePicker
                            modal
                            mode="calendar"
                            open={open}
                            date={date}
                            selectorStartingYear={2020}
                            // onConfirm={(date) => {
                            //     setOpen(false);
                            //     setDate(date);
                            // }}
                            onSelectedChange={e => setDate(e)}
                        // onCancel={() => {
                        //     setOpen(false);
                        // }}
                        />
                        {/* <DatePicker
            onSelectedChange={(date) => setSelectedDate(date)}
            mode="calendar"
            maximumDate={todayDate}
            selectorStartingYear={2020}
            current="Date()"
            options={{
              backgroundColor: "#090C08",
              textHeaderColor: "#FFA25B",
              textDefaultColor: "#F6E7C1",
              selectedTextColor: "#fff",
              mainColor: "#F4722B",
              textSecondaryColor: "#D6C7A1",
              borderColor: "rgba(122, 146, 165, 0.1)"
            }}
          /> */}
                    </>
                ) : null
            }
        </>
    );
};

export default Composition;
