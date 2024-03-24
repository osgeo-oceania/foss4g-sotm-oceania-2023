import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Protocol } from "pmtiles";
import { useEffect } from "react";
import Map from "react-map-gl/maplibre";

export const MapComponent = (props: {
  width: number | string;
  height: number | string;
}) => {
  useEffect(() => {
    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    return () => {
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  return (
    <Map
      style={{ width: props.width, height: props.height }}
      initialViewState={{
        longitude: 147.3365,
        latitude: -42.8832,
        zoom: 11,
      }}
      mapStyle="https://api.protomaps.com/styles/v2/light.json?key=51cf1275231eb004"
    ></Map>
  );
};
