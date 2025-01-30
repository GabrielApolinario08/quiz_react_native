import Routes from "@/src/routes";
import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar hidden={true}></StatusBar>
      <Routes/>
    </>
  );
}
