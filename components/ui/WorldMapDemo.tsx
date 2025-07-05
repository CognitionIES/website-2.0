"use client";
import WorldMap from "./world-map";

function WorldMapDemo() {
  return (
    <div className="  ">
      <div className="max-w-7xl mx-auto text-center">
        <WorldMap
          dots={[
            {
              start: {
                lat: 8.3072,
                lng: 70.1812,
              }, // vadodara
              end: {
                lat: 41.8781,
                lng: -87.6298,
              }, // Los Angeles
            },
          ]}
        />
      </div>
    </div>
  );
}
export default WorldMapDemo;
