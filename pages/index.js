import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import MyMap from "../components/MyMap";


export default function App() {
  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_API_MAP_KEY}>
      <MyMap />
    </Wrapper>
  );
}

