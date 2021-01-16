import {createStyles, Theme} from "@material-ui/core";
import {images} from "../../assets/images";

const {vector1, vector2} = images;

export const useStyles = (theme: Theme) =>
    createStyles({
        container: {
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url('${vector1}'), url('${vector2}')`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        },
        logo: {
            marginTop: "70px",
        },
        caption: {
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "24px",
            color: "#2241A7",
            fontFamily: "Roboto",
            marginTop: "179px"
        },
        accountsContainer: {
            margin: "0",
            marginTop: "64px",
            width: "100%",
            maxWidth: "100%",
            display: "flex",
        },
        confirm: {
            marginTop: "64px",
            height: "48px",
            width: "262px",
            background: "#2241A7",
            borderRadius: "4px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "16px",
            color: "#FFFFFF",
            cursor: "pointer",
        }
    });
