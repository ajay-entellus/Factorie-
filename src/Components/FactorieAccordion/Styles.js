export default {
    Accordion: {
        boxShadow: "none",
        // minWidth: "900px",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    expanded: {},
    AccordionSummary: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        "&$expanded": {
        }
    },
    content: {
        "&$expanded": {
            margin: "12px 0"
        }
    },
    expanded: {},
    AccordionDetails: {
        padding: "16px",
        backgroundColor: "#FACD48",
        display: "flex",
        flexDirection: "column",
        padding: "30px 20px"
    },
    selected: {
        width: "8px",
        height: "30px",
        border: "1px soild #FACD48",
        backgroundColor: "#FACD48",
        marginRight: '25px'
    },
    notSelected: {
        width: "8px",
        height: "30px",
        marginRight: '25px'
    },
    dot: {
        paddingRight: '10px',
        width: "12px",
        height: "12px"
    }
}