import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #0f061e;
`;

export const ContainerFondo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.788) 1%, rgba(15, 6, 30, 0.801) 70%);
`;

export const CircleF = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #402484 1%, #402484 70%);
`;

export const Circle1 = styled(Circle)`
  width: 1200px;
  height: 1200px;
  top: -90%;
  left: -70%;
`;

export const Circle2 = styled(Circle)`
  width: 1200px;
  height: 1200px;
  top: -140%;
  left: 30%;
`;

export const Circle3 = styled(Circle)`
  width: 20px;
  height: 20px;
  top: 50%;
  left: 1%;
`;

export const Circle4 = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 90%;
  left: -5%;
`;

export const Circle5 = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 70%;
  left: 97%;
`;

export const Circle6 = styled(Circle)`
  width: 20px;
  height: 20px;
  top: 30%;
  left: 90%;
`;
