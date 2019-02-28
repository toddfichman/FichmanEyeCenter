import React from 'react';

import Map from './Map';


export default function Maps() {
  return (
    <React.Fragment>
      <div className="map-header">Locations</div>
      
      <Map 
        street={"178 Hartford Rd,"}
        town={"Manchester, Connecticut 06040"}
        phone={"1-877-FICHMAN"}
        lat={41.764561}
        lng={-72.528892}
        name={"Manchester"}
        title={"Manchester"}
        mapSearch={"Fichman Eye Center Manchester"}
      />
      <Map 
        street={"1144 E Main St,"}
        town={"Torrington, CT 06790"}
        phone={"1-860-489-8999"}
        lat={41.814979}
        lng={-73.095530}
        name={"Torrrington"}
        title={"Torrington"}
        mapSearch={"Fichman Eye Center Torrington"}
      />
      <Map 
        street={"1232 Corbin Ave,"}
        town={"New Britain, CT 06053"}
        phone={"1-860-357-2349"}
        lat={41.667610}
        lng={-72.806965}
        name={"New Britain"}
        title={"New Britain"}
        mapSearch={"Fichman Eye Center New Britain"}
      />
      <Map 
        street={"1500 Albany Ave,"}
        town={"Hartford, CT 06112"}
        phone={"1-860-560-9563"}
        lat={41.784525}
        lng={-72.702196}
        name={"Hartford"}
        title={"Hartford"}
        mapSearch={"Fichman Eye Center Hartford Albany Ave"}
      />
    </React.Fragment>
  )
}
