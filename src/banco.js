// Manifiesto del banco. Lo lee la app (vista Banco) y actualizar.js.
// estado: "cargado" (ya está en data.js) | "pendiente" (PDF en /pdfs, falta convertir) | "falta" (no se encontró fuente)
// carpeta: subcarpeta dentro de /pdfs. Los PDF de cada examen empiezan con su periodo (p).
const BANCO={
  actualizado:"2026-11-15",
  examenes:[
    {p:"2027-I",  d:"Dom 18 oct 2026 · Áreas B y C",     estado:"cargado",   preg:91, fig:0, carpeta:"2027-I (oct 2026)"},
    {p:"2026-II", d:"Dom 8 mar 2026 · Áreas B y C",      estado:"cargado",   preg:92, fig:0, carpeta:"2026-II (mar 2026)"},
    {p:"2026-I",  d:"Dom 5 oct 2025 · Áreas B y C",      estado:"cargado",   preg:90, fig:0, carpeta:"2026-I (oct 2025)"},
    {p:"2025-II", d:"Dom 2 mar 2025 · Áreas B y C",      estado:"cargado",   preg:92, fig:0, carpeta:"2025-II (mar 2025)"},
    {p:"2025-I",  d:"Dom 6 oct 2024 · Áreas B y C",      estado:"cargado",   preg:90, fig:0, carpeta:"2025-I (oct 2024)"},
    {p:"2024-II", d:"Dom 10 mar 2024 · Áreas B y C",     estado:"cargado",   preg:99, fig:0, carpeta:"2024-II (mar 2024)"},
    {p:"2024-I",  d:"Dom 3 dic 2023 · Áreas B y C",      estado:"cargado",   preg:100, fig:0, carpeta:"2024-I (dic 2023)"},
    {p:"2023-II", d:"Dom 26 mar 2023 · Ingenierías (C)", estado:"cargado",   preg:100, fig:0, carpeta:"2023-II (mar-abr 2023)"},
    {p:"2023-I",  d:"Dom 16 oct 2022 · Áreas B y C",     estado:"cargado",   preg:100, fig:0, carpeta:"2023-I (oct-dic 2022)"},
    {p:"2022",    d:"Mar–abr 2022 · el de Área C (sáb 12 mar) no tiene fuente", estado:"falta", carpeta:"2022 (mar-abr 2022)"},
    {p:"2021",    d:"Set 2021 · área por revisar",       estado:"pendiente", carpeta:"2021 (set 2021)"},
    {p:"2020-I",  d:"Dom 15 set 2019 · Área C",          estado:"pendiente", carpeta:"2019-2020"},
    {p:"2019-II", d:"Domingo · Áreas C y E",             estado:"pendiente", carpeta:"2019-2020"},
    {p:"2019-I",  d:"Domingo · Áreas C y E",             estado:"pendiente", carpeta:"2019-2020"}
  ],
  material:[
    {tipo:"CEPRE",    n:"Boletines y solucionarios PRE 2021–2025-II (Drive)", estado:"pendiente"},
    {tipo:"CEPRE",    n:"Exámenes CEPRE y claves (Drive)",                    estado:"pendiente"},
    {tipo:"Banco",    n:"Banco de preguntas ADM 2008–2018-II (Drive)",        estado:"pendiente"},
    {tipo:"Examen",   n:"Área C 2022-II, Lumbreras (Drive)",                  estado:"pendiente"},
    {tipo:"Temario",  n:"Temario CEPRE UNMSM (resumen)",                      estado:"cargado"}
  ]
};
