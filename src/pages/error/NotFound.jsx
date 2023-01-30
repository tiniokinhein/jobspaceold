import React from 'react';
import {Box, Container} from "@mui/material";
import NotFoundBackground from "../../assets/backgrounds/Not_Found.svg"

const NotFound = () => {
    return (
        <Container maxWidth="xl">
            <Box minHeight="60vh" maxHeight="75vh" alignItems="center" justifyContent="center" display="flex">
                <img src={NotFoundBackground} width="20%" alt="not found"/>
            </Box>
        </Container>
    )
}

export default NotFound;