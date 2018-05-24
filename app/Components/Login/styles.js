const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;

export default {
    imageContainer: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        flexDirection: 'column'
    },
    headerText: {
        width:300,
        marginTop: 80,
        left: Platform.OS === 'android' ? 40 : 50,
    },
    slider:{
        width:deviceWidth,
        marginTop: 30,
    },
    sliderText:{
        width:300,
        height:50,
        marginTop: 5,
        left: Platform.OS === "android" ? 40 : 50,
    },
    buttonContent:{
        width:300,
        height:70,
        marginTop: 40,
        left: Platform.OS === "android" ? 40 : 50,
    },
    logoContainer: {
        flex: 1,
        marginTop: deviceHeight / 8,
        marginBottom: 30
    },
    logo: {
        width: 175,
        height: 175
    },
    loginBox: {
        width: deviceWidth,
        padding: 30,
        flex:2
    },
    
    input: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom: 20
    },
    inputText: {
        paddingLeft: 30,
        paddingRight: 30
    },
    
    text: {
        fontFamily: 'Varela Round Regular',
        color: "#758692",
        marginTop: 3,
        textAlign: 'center'
    },
    button: {
        alignSelf:'center',
        width:150,
        height:50,
        justifyContent: 'center'
    },
    buttonUye: {
        alignSelf:'center',
        width:150,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonLogin: {
        alignSelf:'center',
        width:150,
        height:50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        marginTop:50,
        marginBottom: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    footer: {
        backgroundColor: '#fff', 
        flex:2,
        paddingTop: 25,
        paddingBottom: 10,
        width: deviceWidth,
        height: deviceHeight / 3.5
    }
};
