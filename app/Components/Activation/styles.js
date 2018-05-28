const React = require('react-native');
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;

export default {
    subBox: {
        flex:1,
        width: deviceWidth *0.75
    },
    modalHeader: {
        fontFamily: 'Varela Round Regular',
        fontSize: 35,
        textAlign: 'center',
        color: '#4cb906',
        marginBottom: 20
    },
    inputNew: {
        backgroundColor: '#ccc',
        marginBottom: 25,
        borderColor: '#aaa'
    },  
    inputText: {
        paddingLeft: 20,
        paddingRight: 30
    },
    button: {
        alignSelf:'center',
        width:150,
        height:50,
        marginBottom: 20,
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Varela Round Regular',
        color: "#758692",
        marginTop: 3,
        marginBottom: 20,
        textAlign: 'center'
    }

};