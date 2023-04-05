import React from "react";
import { TarjetaNoticia, ImagenTarjetaNoticia, FechaTarjetaNoticia, DescripcionTarjetaNoticia, TituloTarjetaNoticia, BotonLectura } from "./styled";
export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}

const TarjetaNoticias = ({ noticias, setModal }: { noticias: INoticiasNormalizadas[], setModal: (n: INoticiasNormalizadas) => void }) => {
    return (
        <>
            {noticias.map((n) => (
                <TarjetaNoticia>
                    <ImagenTarjetaNoticia src={n.imagen} />
                    <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
                    <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
                    <DescripcionTarjetaNoticia>
                        {n.descripcionCorta}
                    </DescripcionTarjetaNoticia>
                    <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
                </TarjetaNoticia>
            ))
            }
        </>)
}

export default TarjetaNoticias;