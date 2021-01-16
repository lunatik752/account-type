import {createStyles, Theme} from "@material-ui/core";

export const useStyles = (theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "270px",
            height: "270px",
            background: "#EDF2F7",
            boxSizing: "border-box",
            borderRadius: "20px",
            position: "relative",
            margin: "0 25px",
            cursor: "pointer"
        },
        wrapper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "262px",
            height: "262px"
        },
        active: {
            border: "4px solid #2241A7",
            fontWeight: 500,
            color: "#2241A7"
        },
        activeImg: {
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translate(-50%, -50%)",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#2241A7",
            justifyContent: "center",
            alignItems: "center",
        },
        open: {
            display: "flex",
        },
        close: {
            display: "none",
        },
        imageContainer: {
            marginTop: "38px",
            width: "117px",
            height: "117px",
        },
        title: {
            marginBottom: "46px",
            fontSize: "24px",
            lineHeight: "32px"
        },
        titleActive: {
        }
    });

