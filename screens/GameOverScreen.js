import { View, Image, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380) {
        imageSize =150
    }

    if(height < 400){
        imageSize = 80;
    }
 
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.Highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.Highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPressProp={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    scrollContent: {
        flexGrow: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 120,
        paddingBottom: 150,
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
    },
    Highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500,
    },
});
