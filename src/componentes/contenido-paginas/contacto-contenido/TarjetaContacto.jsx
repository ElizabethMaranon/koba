import React from "react"
import "./TarjetaContacto.scss"

export default function TarjetaContacto({ icono: Icono, titulo, texto, tipo = "default" }) {
  return (
    <div className={`tarjeta-contacto tarjeta-${tipo}`}>
      <Icono className="icono-contacto" />
      <div className="info-contacto">
        <span className="titulo-contacto">{titulo}</span>
        <span className="texto-contacto">{texto}</span>
      </div>
    </div>
  )
}
