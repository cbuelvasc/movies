import ImageColors from "react-native-image-colors";


const getColors = async (uri: string) => {
    let primary;
    let secondary;
    const colors = await ImageColors.getColors(uri, {});
    if (colors.platform === "android") {
        primary = colors.dominant;
        secondary = colors.average
      } else {
        primary = colors.primary;
        secondary = colors.secondary
      }

      return [primary, secondary]
};

export default getColors;