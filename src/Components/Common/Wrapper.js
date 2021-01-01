import React from "react";
import { Box } from "@material-ui/core";
// import styled from "@emotion/styled";

export default function Wrapper(props) {
    return (
        <Box
            position="relative"
            maxWidth={{ xs: "100%", md: "1360px" }}
            mx="auto"
            px={{ xs: '24px', sm: "100px", md: '200px' }}
            {...props}
        >
            {props.children}
        </Box>
    );
}

// const Wrapper = styled(Box)`
//   // @media screen and (max-width: 1024px) {
//   //   padding-left: 16px;
//   //   padding-right: 16px;
//   // }
// `;
