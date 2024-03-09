import { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from "@react-google-maps/api";
import CardQuick from "../CardQuick/CardQuick";

const MarkClustererExampleMap = () => {
  const [markers, setMarkers] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ",
  });

  useEffect(() => {
    const mapApiUrl = `https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`;
    const abortController = new AbortController();

    fetch(mapApiUrl, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        setMarkers(data.photos);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={{ lat: 25.0391667, lng: 121.525 }}
          zoom={3}
        >
          <MarkerClusterer enableRetinaIcons averageCenter gridSize={60}>
            {(clusterer) =>
              markers.map((marker) => (
                <Marker
                  position={{ lat: marker.latitude, lng: marker.longitude }}
                  key={marker.photo_id}
                  clusterer={clusterer}
                />
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      )}
    </>
  );
};
const MarkerClustererExample = () => (
  <CardQuick noWrapper>
    <MarkClustererExampleMap />
  </CardQuick>
);

export default MarkerClustererExample;
