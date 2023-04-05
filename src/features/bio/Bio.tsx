import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer, ContenedorBotones, BioImagen, BioNombre, BioDescripcion, ButtonActive, ButtonInactive } from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const test: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      bioActiva.id === nombre ?
        <ButtonActive
          key={nombre as string}
          onClick={() => test(nombre as NombresSimpsons)}
        >
          {nombre}
        </ButtonActive>

        : <ButtonInactive key={nombre as string} onClick={() => test(nombre as NombresSimpsons)}> {nombre}</ButtonInactive>

    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
