export default {
    // root: {
    //     backgroundColor: "#293557",
    //     // color: 'rgba(255, 255, 255, 0.50)',
    //     // borderBottomColor: 'rgba(255, 255, 255, 0.50)',
    //     borderBottom: "1px solid white",
    //     '& label.Mui-focused': {
    //         color: 'rgba(255, 255, 255, 0.50)',
    //     },
    //     '& .MuiInput-underline:after': {
    //         borderBottomColor: 'rgba(255, 255, 255, 0.50)',
    //     },
    //     '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //             borderColor: 'orange',
    //         }
    //     },
    // },
    label: {
        "&$focusedLabel": {
            color: "white"
        },
        "&$erroredLabel": {
            color: "red"
        }
    },
    focusedLabel: {},
    erroredLabel: {},
    underline: {
        "&$error:after": {
            borderBottomColor: "white"
        },
        "&:after": {
            borderBottom: `2px solid white`
        }
    },
    error: {},
    underline: {},
    focused: {
        backgroundColor: "#293557",
        borderBottom: "1px solid #fff",
        "&:hover": {
            borderBottom: "1px solid #fff",
        },
        "&$focused": {
            borderBottom: "1px solid #fff",
        }
    },
    error: {
        background: "#fff",
        border: " 1px solid #E95652",
        boxShadow: "0 2px 4px 0 rgba(121,121,121,0.10)",
        "&:hover": {
            backgroundColor: "#fff",
            border: "  1px solid #E95652",
            boxShadow: "0 2px 4px 0 rgba(121,121,121,0.10)",
            borderRadius: "4px"
        },
        "&$focused": {
            background: "#fff",
            border: " 1px solid #E95652",
            boxShadow: "0 2px 4px 0 rgba(121,121,121,0.10)",
            borderRadius: "4px"
        }
    },
    form: {
        background: '#293557',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        // justifyContent: 'center'

    },
    box: {
        // background: '#293557',
        "& > *": {
            margin: '10px 20px 14px 0px',
            width: "280px",
            '@media (max-width: 1100px)': {
                margin: '10px 20px 14px 0px',
                width: "250px",
            },
        },

    },
    message: {
        "& > *": {
            margin: '15px 20px 14px 0px',
            width: "580px",
            '@media (max-width: 1100px)': {
                width: "520px",
            },
            '@media (max-width: 960px)': {
                width: '250px',
            },

        }
    },
    button: {
        background: '#293557',
        border: "1px solid",
        borderColor: 'rgba(255, 255, 255, 0.50)',
        fontSize: "20px",
        color: "rgba(255, 255, 255, 0.50)",
        width: '110px',
        height: '40px',
        borderRadius: '4px',
        outline: "none",
        cursor: 'no-drop',
        marginTop: "40px"
    },
    activeButton: {
        background: '#E95652',
        border: "1px solid",
        borderColor: 'E95652',
        fontSize: "20px",
        color: "rgba(255, 255, 255, 0.50)",
        width: '110px',
        height: '40px',
        borderRadius: '4px',
        outline: "none",
        cursor: "pointer",
        marginTop: "40px"
    }





}