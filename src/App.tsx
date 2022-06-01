import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./components/Map";

import "./App.scss";

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default App;
