import React from "react";
import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal, } from "./styled";
import { CloseButton as Close, SuscribeImage } from "../../../../assets";
export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}

const ContainerModal = ({ modal, setModal }: { modal: INoticiasNormalizadas | null, setModal: (n: INoticiasNormalizadas | null) => void }) => {
    return (

        <>
            {modal ? (
                modal.esPremium ? (
                    <ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => setModal(null)}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                            <CotenedorTexto>
                                <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                                <DescripcionModal>
                                    Suscríbete a nuestro newsletter y recibe noticias de
                                    nuestros personajes favoritos.
                                </DescripcionModal>
                                <BotonSuscribir
                                    onClick={() =>
                                        setTimeout(() => {
                                            alert("Suscripto!");
                                            setModal(null);
                                        }, 1000)
                                    }
                                >
                                    Suscríbete
                                </BotonSuscribir>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                ) : (
                    <ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => setModal(null)}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={modal.imagen} alt="news-image" />
                            <CotenedorTexto>
                                <TituloModal>{modal.titulo}</TituloModal>
                                <DescripcionModal>{modal.descripcion}</DescripcionModal>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                )
            ) : null}

        </>)
}


export default ContainerModal;
