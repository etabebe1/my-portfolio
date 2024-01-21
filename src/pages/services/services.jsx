import Transition from "../../components/Transition";
import ParticleContainer from "../../components/ParticlesContainer";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";


// export function services() {
//   return (
//   );
// }

import React from 'react'

export default function services() {
  return (
    <Transition>
      {/* particles */}
      <ParticleContainer />

      <div className="absolute bottom-0 right-0">
        <Circles />
      </div>
      <div></div>
      <div className="absolute bottom-0 left-0  bg-green-500 w-24 h-40">
        <Bulb/>
      </div>

    </Transition>
)
}
