import React, { useState, useRef } from 'react'
import {
    Alert,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import COLORS from '../../Constants/COLORS';
import { cancel } from '../../Constants/Images';
import YoutubePlayer from "react-native-youtube-iframe";
import Video from 'react-native-video';

const DetailModal = ({ open, setOpen, title, description, video, category, equipment, pattern }) => {

    const [playing, setPlaying] = useState(false);
    // const videoPlayer = useRef(null);
    let split = video.split("=");

    let arr = convertStringToArray(video);

    const onStateChange = (state) => {
        if (state === 'ended') {
            setPlaying(false);
        };
    };

    console.log(arr);

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={open}
                    onRequestClose={() => {
                        setOpen(!open);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.cancelBtn} onPress={() => setOpen(!open)}>
                                <Image source={cancel} style={styles.cancel} />
                            </TouchableOpacity>
                            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                                <Text style={styles.title}>{title}</Text>
                                <View style={styles.line} />
                                <View style={styles.descriptionView}>
                                    <Text style={styles.descriptionText}>{description}</Text>
                                    <Text style={styles.category}>Exercise Category</Text>
                                    <Text style={styles.descriptionText}>{category}</Text>
                                    <Text style={styles.category}>Exercise Equipment</Text>
                                    <Text style={styles.descriptionText}>{equipment}</Text>
                                    <Text style={styles.category}>Exercise Pattern</Text>
                                    <Text style={styles.descriptionText}>{pattern}</Text>
                                </View>
                                <View style={{ width: "100%", marginTop: 20 }}>
                                    <YoutubePlayer
                                        height={160}
                                        width={"100%"}
                                        play={playing}
                                        videoId={split[1]}
                                        onChangeState={onStateChange}
                                    />
                                    {/* <Video
                                        source={{ uri: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4' }}
                                        paused={false}                  // make it start    
                                        style={styles.backgroundVideo}  // any style you want
                                        repeat={true}                   // make it a loop
                                        ref={ref => (videoPlayer.current = ref)}
                                    /> */}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default DetailModal;

const styles = StyleSheet.create({
    backgroundVideo: {
        backgroundColor: "red",

    },
    category: {
        color: COLORS.black,
        marginTop: 10,
        fontSize: 15,
        fontWeight: "bold"
    },
    cancelBtn: {
        position: "absolute",
        right: 20,
        top: 20
    },
    cancel: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        tintColor: COLORS.mehron
    },
    descriptionView: {
        width: "90%",
        alignItems: "center",
        marginTop: 10
    },
    descriptionText: {
        color: COLORS.black,
        fontSize: 13
    },
    line: {
        borderBottomWidth: 2,
        borderColor: COLORS.mehron,
        width: "30%",
        marginTop: 8,
        alignSelf: "center"
    },
    title: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 2,
        borderColor: COLORS.mehron,
        width: "90%",
        height: "60%"
    },
});