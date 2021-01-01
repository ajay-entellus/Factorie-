export default {
    Header: {
        position: "fixed",
        top: "0",
        height: "100px",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        paddingLeft: "40px",
        paddingRight: "40px",
        alingItems: "center",
        zIndex: "1000",
        '@media (max-width: 1000px)': {
            position: "fixed",
            top: "0",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "80px",
        },
        '@media (max-width: 720px)': {
            position: "fixed",
            top: "0",
            paddingLeft: "20px",
            height: "80px",
        },
    },
    Logo: {
        margin: "auto 0px"
    },
    Nav: {
        display: "grid",
        gridTemplateColumns: "repeat(5, auto)",
        alignItems: "center",
        justifyItems: "center",
        // color: "#fff",
        fontSize: "20px",
        // fontWeight: "500",
        transition: "0.5s",
        textDecoration: "none",
        paddingRight: "40px",
        '@media (max-width: 768px)': {
            // paddingRight: "20px",
            gridTemplateColumns: "none",
            justifyContent: "flex-end"
        },

    },
    a: {
        '@media (max-width: 768px)': {
            display: 'none'
        },
    },
    drawerPaper: {
        width: '100%',
        backgroundColor: '#293557',
    },
    menuItems: {
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
        color: "white",
        fontSize: "20px"
    },
    hamburger: {
        display: 'none',
        '@media (max-width: 768px)': {
            display: "block"
        }
    }
}






