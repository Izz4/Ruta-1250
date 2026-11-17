# Ruta 1250 · código fuente

Este repo es el **único lugar del código**. Cualquier PC o sesión de Claude trabaja desde aquí, así nada se desincroniza.

## Qué hay
| Archivo | Qué es |
|---|---|
| `template.html` | La app (diseño, motor, fichas, biblioteca). Los datos entran en la marca `/*DATA*/` |
| `data.js` | Preguntas de admisión (`DATA`) |
| `banco.js` | Manifiesto del banco (`BANCO`) |
| `escudo.js` | Emblema (`ESCUDO`) |
| `figuras.js` | Rutas de las figuras (`FIG` → `fig/…webp`) |
| `temas.js` | Temas por curso (`TEMAS`) |
| `deco/banco-deco.js` | Banco Puro DECO de letras (`DECO`) |
| `construir.js` | Arma `../index.html` y renueva `../sw.js` |

## Cómo se actualiza la app
1. Editar los archivos de `src/` (nunca `index.html` a mano).
2. `node src/construir.js` → escribe `index.html` y cambia `VERSION` y la lista de figuras en `sw.js`.
3. Commit y push a `main`. GitHub Pages publica en 1-2 minutos y la app instalada se actualiza sola.
4. Figuras nuevas: van en `fig/` con el nombre que use `figuras.js`.

## Progreso del estudiante
No está en el repo: vive en cada navegador (`localStorage`, clave `ruta1250-v1`) y se sincroniza entre dispositivos con el gist privado (Progreso → Sincronización en la app).
