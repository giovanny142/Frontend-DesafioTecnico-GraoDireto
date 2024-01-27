import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Login } from "../../Login/login";
import { FooterClient } from "../../Footers/footerClient";

export default function LoginScreen() {

    return (
        <>
            <Login/>
            <FooterClient />
        </>
    )
}