import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./styles";
import COLORS from "../../../Constants/COLORS";
import {
    getNotification,
    markNotification
} from "../../../Store/Actions/UserData";
import { useSelector } from "react-redux";
import NotificationCard from "../../../Components/NotificationCard";
import { doubleTick } from "../../../Constants/Images";

const Composition = () => {

    const [notification, setNotification] = useState([]);
    const [read, setRead] = useState(false);
    const [load, setLoad] = useState(true);

    const AuthState = useSelector(state => {
        return state?.AuthReducer;
    });

    let token = AuthState?.TokenId;

    const renderNotification = ({ item }) => {
        return (
            <NotificationCard item={item} />
        );
    };

    const readNotification = () => {
        setLoad(true);
        markNotification(setRead, setLoad, token);
    };

    useEffect(() => {
        getNotification(setNotification, setRead, setLoad, token);
    }, [read]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.profileText}>Notification</Text>
                </View>
                {
                    load == true ? (
                        <ActivityIndicator size={"large"} color={COLORS.mehron} />
                    ) : (
                        <>
                            {
                                notification.length > 0 ? (
                                    <>
                                        <TouchableOpacity style={styles.readView} onPress={readNotification}>
                                            <Image source={doubleTick} style={styles.tick} />
                                            <Text style={styles.readText}>Mark as read</Text>
                                        </TouchableOpacity>
                                        <FlatList
                                            data={notification}
                                            renderItem={renderNotification}
                                            keyExtractor={item => item.id}
                                        />
                                    </>
                                ) : (
                                    <Text style={styles.available}>No notification available</Text>
                                )
                            }
                        </>
                    )
                }
            </View>
        </>
    );
};

export default Composition;