import React from "react";
import Tab from "../tab/Tab";

export default function Menu() {
  return (
    <div className="tabs">
      <Tab text="Populares" target="populares" />
      <Tab text="Lançamentos" target="lancamentos" />
      <Tab text="Busca" target="busca" />
      <Tab text="Sobre" target="sobre" />
    </div>
  );
}
