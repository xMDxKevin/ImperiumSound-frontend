import React from "react";
import {
  Circle,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circle6,
  CircleF,
  ContainerFondo,
  ContainerPrincipal,
} from "./style";

const Fondo = () => {
  return (
    <ContainerPrincipal>
      <ContainerFondo>
        <Circle />
        <CircleF />
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
        <Circle6 />
      </ContainerFondo>
    </ContainerPrincipal>
  );
};

export default Fondo;
