import React, { useState } from "react";

export default function Musical() {
  const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"],
        address: "chicago theater",
      },
      SanFrancisco: {
        dates: ["5/2"],
        address: "sf theater",
      },
    },
  });
}
