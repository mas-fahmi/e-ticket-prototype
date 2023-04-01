import { Dimensions } from "react-native";

const widthDevice = Dimensions.get('window').width; //423.5293998850261
const heightDevice = Dimensions.get('window').height; //423.5293998850261

export const GlobalFont = {
    Gotham: {
        'reguler': 'Gotham-Book',
        'medium': 'Gotham-Medium',
        'mdItalic': 'Gotham-Medium-Italic',
        'bold': 'Gotham-Black'
    }
}
export const kDefaultPadding = 20
export const GlobalColors = {
    logos: "#121527",
    navIcon: "#121527",
    TEXT_PRIMARY: "#FFFFFF",
    TEXT_SECONDARY: "#444444",
    TEXT_TERTIARY: "#000000",
    BGCOLOR1: "#F8FAFD",
    BGCOLOR2: "#e42313",
    BGCOLOR3: "#690000",
    BUTTON1: "#46C6E9",
    BUTTON2: "#FF5B7F",
    OPENCOLOR: "#66FB4E",
    ONPROGRESSCOLOR: "#FFA132"
}
export const GlobalWidths = {
    2: Math.round(widthDevice * 0.025),
    5: Math.round(widthDevice * 0.05),
    10: Math.round(widthDevice * 0.1),
    15: Math.round(widthDevice * 0.15),
    20: Math.round(widthDevice * 0.2),
    25: Math.round(widthDevice * 0.25),
    30: Math.round(widthDevice * 0.3),
    35: Math.round(widthDevice * 0.35),
    40: Math.round(widthDevice * 0.4),
    45: Math.round(widthDevice * 0.45),
    50: Math.round(widthDevice * 0.5),
    55: Math.round(widthDevice * 0.55),
    60: Math.round(widthDevice * 0.6),
    65: Math.round(widthDevice * 0.65),
    70: Math.round(widthDevice * 0.7),
    75: Math.round(widthDevice * 0.75),
    80: Math.round(widthDevice * 0.8),
    85: Math.round(widthDevice * 0.85),
    90: Math.round(widthDevice * 0.9),
    95: Math.round(widthDevice * 0.95),
    100: widthDevice
}
export const GlobalHeights = {
    2: Math.round(heightDevice * 0.025),
    5: Math.round(heightDevice * 0.05),
    10: Math.round(heightDevice * 0.1),
    15: Math.round(heightDevice * 0.15),
    20: Math.round(heightDevice * 0.2),
    25: Math.round(heightDevice * 0.25),
    30: Math.round(heightDevice * 0.3),
    35: Math.round(heightDevice * 0.35),
    40: Math.round(heightDevice * 0.4),
    45: Math.round(heightDevice * 0.45),
    50: Math.round(heightDevice * 0.5),
    55: Math.round(heightDevice * 0.55),
    60: Math.round(heightDevice * 0.6),
    65: Math.round(heightDevice * 0.65),
    70: Math.round(heightDevice * 0.7),
    75: Math.round(heightDevice * 0.75),
    80: Math.round(heightDevice * 0.8),
    85: Math.round(heightDevice * 0.85),
    90: Math.round(heightDevice * 0.9),
    95: Math.round(heightDevice * 0.95),
    100: heightDevice
}
export const GlobalFontSizes = {
    8: Math.round(widthDevice * 0.01887), //8
    9: Math.round(widthDevice * 0.02123), //9
    10: Math.round(widthDevice * 0.02358), //10
    11: Math.round(widthDevice * 0.02594), //11
    12: Math.round(widthDevice * 0.02830), //12
    13: Math.round(widthDevice * 0.03066), //13
    14: Math.round(widthDevice * 0.03301), //14
    15: Math.round(widthDevice * 0.03537), //15
    16: Math.round(widthDevice * 0.03774), //16
    17: Math.round(widthDevice * 0.04009), //17
    18: Math.round(widthDevice * 0.04245), //18
    19: Math.round(widthDevice * 0.04481), //19
    20: Math.round(widthDevice * 0.04717), //20
    21: Math.round(widthDevice * 0.04953), //21
    22: Math.round(widthDevice * 0.05188), //22
    23: Math.round(widthDevice * 0.05425), //23
    24: Math.round(widthDevice * 0.05660), //24
    25: Math.round(widthDevice * 0.05896), //25
    26: Math.round(widthDevice * 0.06132), //26
    27: Math.round(widthDevice * 0.06368), //27
    28: Math.round(widthDevice * 0.06604), //28
    29: Math.round(widthDevice * 0.06840), //29
    30: Math.round(widthDevice * 0.07075), //30
    31: Math.round(widthDevice * 0.07311), //31
    32: Math.round(widthDevice * 0.07547), //32
    33: Math.round(widthDevice * 0.07783), //33
    34: Math.round(widthDevice * 0.08019), //34
    35: Math.round(widthDevice * 0.08254), //35
    36: Math.round(widthDevice * 0.08491), //36
    37: Math.round(widthDevice * 0.08726), //37
    38: Math.round(widthDevice * 0.08962), //38
    39: Math.round(widthDevice * 0.09198), //39
    40: Math.round(widthDevice * 0.09434), //40
}