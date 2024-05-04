import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import MyMap from "../components/MyMap";


export default function App() {
  return (
    <Wrapper apiKey={process.env.API_MAP_KEY}>
      <MyMap />
    </Wrapper>
  );
}

