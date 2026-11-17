// Ruta 1250 · temas por curso
// Cada tema agrupa las etiquetas "t" de las preguntas de data.js.
// Si una pregunta nueva trae una etiqueta que no está aquí, cae en "Otros temas" y actualizar.js lo avisa.
// Una etiqueta que termina en * agrupa todas las que empiezan igual (ej. "Inglés*").
const TEMAS={
 hv:[
  ["Inglés",["Inglés*"]],
  ["Inferencia y extrapolación",["Inferencia", "Extrapolación", "Inferencias", "Inferencia contextual", "Inferencia textual", "Comprensión de lectura, extrapolación textual", "Comprensión lectora: inferencia", "Comprensión de lectura: la inferencia", "Comprensión de lecturas – extrapolación"]],
  ["Compatibilidad e incompatibilidad",["Compatibilidad", "Incompatibilidad", "Afirmaciones", "Comprensión de texto: incompatibilidad", "Comprensión de texto: compatibilidad", "Incompatibilidad textual", "Comprensión de lectura: incompatibilidad textual", "Comprensión de lectura crítica - valorativa"]],
  ["Idea principal, tema y propósito",["Idea principal", "Tema central (dos textos)", "Tema de la polémica", "Propósito del texto mixto", "Punto de convergencia", "Tema central", "Jerarquía textual", "Comprensión de lectura, jerarquía textual", "Comprensión de lectura", "Tesis y argumentos", "Idea principal, tema y propósito", "Comprensión lectora: punto de discrepancia", "Punto de convergencia (coherencia)", "Comprensión de lectura: jerarquía textual"]],
  ["Vocabulario en contexto",["Sentido contextual", "Antonimia contextual", "Oraciones incompletas", "Texto dialectal", "Sentido contextual en la comprensión lectora", "Pregunta de traducción", "Coherencia textual", "Comprensión de lectura: término en contexto"]]
 ],
 hlm:[
  ["Razonamiento espacial",["Conteo de figuras", "Vistas de un sólido", "Simetrías", "Cortes", "Razonamiento geométrico", "Trazos de figuras", "Recorridos eulerianos", "Rutas y trayectorias", "Seccionamientos y cortes", "Reflexiones y simetrías", "Trazo de figuras", "Inductivo geométrico", "Conteo de rutas y palabras", "Rotación de gráficos", "Rotación y traslación de figuras", "Ruedas, poleas y engranajes", "Traslación de figuras"]],
  ["Juegos lógicos y recreativos",["Juegos lógicos · dado", "Dominó", "Cuadrado mágico", "Elementos recreativos", "Arreglos numéricos", "Operadores matemáticos", "Distribuciones numéricas", "Juegos lógicos", "Suficiencia de datos", "Cuadro de categorías"]],
  ["Problemas operativos",["Trasvases", "Pesadas", "Traslados", "Cronometría", "Máximos y mínimos", "Certezas", "Frecuencia de sucesos", "Problemas operativos", "Calendarios", "Interpretación de la información simbolización y ecuaciones", "Interpretación de la información: simbolización y ecuaciones", "Cronometría (ángulos)", "Cinemática intuitiva", "Cronometría - campanadas", "Ecuaciones diofánticas", "Balanzas y pesadas", "Inductivo numérico", "Planteo de ecuaciones", "Conteo de cubos", "Visualización de figuras en el espacio", "Perímetros de figuras"]],
  ["Orden y deducción",["Ordenamiento circular", "Deducción", "Verdades y mentiras", "Situaciones deportivas", "Rumbos y puntos cardinales", "Orden de información (ordenamiento circular)", "Razonamiento deductivo", "Puntos cardinales", "Relación de parentesco", "Orden de información"]],
  ["Diagramas y gráficos",["Diagrama de flujo", "Interpretación de gráficos", "Interpretación de gráficos y tablas", "Interpretación de gráficos estadísticos"]]
 ],
 ari:[
  ["Números, divisibilidad y fracciones",["Números racionales", "Fracciones", "Numeración", "Divisores", "MCD y progresiones", "Máximo común divisor", "Sucesiones", "Cuatro operaciones", "Máximo común divisor – mínimo común múltiplo", "Números, divisibilidad y fracciones", "Potenciación", "Criterios de divisibilidad", "Divisibilidad", "Número racionales", "Conteo de números"]],
  ["Porcentajes y proporcionalidad",["Tanto por ciento", "Regla de tres compuesta", "Descuento", "Regla de mezcla", "Reparto proporcional", "Aplicación de magnitudes", "Razones y proporciones", "Aplicaciones comerciales del tanto por ciento"]],
  ["Estadística, conteo y probabilidad",["Estadística", "Análisis combinatorio", "Probabilidades"]],
  ["Lógica proposicional",["Lógica proposicional"]]
 ],
 geo:[
  ["Triángulos",["Triángulos notables", "Desigualdad triangular", "Ortocentro", "Relaciones métricas", "Triángulos congruentes", "Triángulos", "Semejanza de triángulos", "Congruencia de triángulos", "Aplicaciones de la congruencia", "Aplicación de la congruencia"]],
  ["Cuadriláteros y áreas",["Áreas en el trapecio", "Ángulo entre diagonales", "Áreas de regiones planas", "Área de regiones triangulares", "Cuadriláteros", "Área de regiones sombreadas", "Áreas de regiones cuadrangulares"]],
  ["Geometría del espacio",["Cono circular recto", "Tronco de cono", "Prismas", "Cono", "Cilindro", "Esfera", "Cilindro circular recto"]],
  ["Geometría analítica",["Elipse", "Plano cartesiano", "Ecuación de la elipse", "Ecuación de la recta"]],
  ["Circunferencia",["Relaciones métricas en la circunferencia", "Circunferencia"]]
 ],
 alg:[
  ["Funciones",["Funciones", "Funciones reales", "Función inversa", "Función cuadrática"]],
  ["Polinomios y ecuaciones",["Ecuaciones polinomiales", "Raíces de polinomios", "Binomio de Newton", "Polinomios", "Productos notables", "Ecuación lineal", "Ecuación bicuadrada", "Ecuaciones con valor absoluto", "Ecuaciones cuadráticas", "Sistema de ecuaciones lineales", "Producto notable", "Sistema de ecuaciones", "Cocientes notables", "Expresiones algebraicas"]],
  ["Logaritmos y exponenciales",["Logaritmos", "Función logarítmica", "Función exponencial"]],
  ["Inecuaciones y programación lineal",["Inecuaciones", "Programación lineal", "Inecuación fraccionaria", "Desigualdades", "Inecuaciones lineales"]],
  ["Números complejos",["Números complejos"]]
 ],
 tri:[
  ["Funciones trigonométricas",["Funciones trigonométricas", "Funciones trigonométricas inversas", "Rango de funciones", "Funciones trigonométricas directas"]],
  ["Ángulos y sector circular",["Sector circular", "Ángulo en posición normal", "Razones trigonométricas de ángulos agudos"]],
  ["Identidades y ángulos compuestos",["Ángulo doble", "Identidades trigonométricas fundamentales", "Identidades trigonométricas del ángulo doble", "Transformaciones trigonométricas", "Identidades trigonométricas del ángulo compuesto", "Identidades trigonométricas del ángulo mitad"]],
  ["Ecuaciones y resolución de triángulos",["Ecuaciones trigonométricas", "Ley de tangentes", "Resolución de triángulos oblicuángulos"]]
 ],
 len:[
  ["Acentuación y fonología",["Fonemas y grafemas", "Concurrencia vocálica", "Tilde enfática", "Tildación diacrítica", "Fonología", "Silabeo", "Tildación general", "La fonología", "Sílaba y reglas de silabeo", "Tilde diacrítica", "La sílaba", "La acentuación y tildación"]],
  ["Morfología",["Formación de palabras", "Morfología (derivación)", "Morfología", "El adjetivo: funciones", "Preposiciones", "Modo verbal", "El artículo", "El adverbio", "Verbo", "Accidentes gramaticales del verbo", "El adjetivo especificativo", "El verbo", "Concordancia nominal", "Morfología y formación de palabras", "Frase nominal", "Las conjunciones"]],
  ["Comunicación y lenguaje",["La comunicación", "Planos del lenguaje", "Contexto y situación", "Disciplinas lingüísticas", "Comunicación y lenguaje"]],
  ["Puntuación y mayúsculas",["Puntuación", "La coma", "Signos de puntuación: la coma", "Uso de mayúscula", "Mayúsculas", "Uso de las mayúsculas"]],
  ["Realidad lingüística del Perú",["Historia del castellano", "Lenguas amerindias"]],
  ["Sintaxis, semántica y texto",["Complemento predicativo", "Cohesión: anáfora", "Relaciones semánticas", "Clasificación de oraciones", "Semántica", "Tipos de oraciones (según la actitud del hablante)", "Oración compuesta coordinada", "Oración compuesta subordinada", "Semántica – sentidos de la palabra", "Semántica – relaciones de inclusión", "Clases de predicado", "Frase nominal: funciones", "Tipos de oración", "Semántica: relaciones semánticas", "Sintaxis: funciones sintácticas"]]
 ],
 lit:[
  ["Literatura peruana",["Indigenismo: Arguedas", "Ricardo Palma: la tradición", "Aves sin nido", "Conversación en La Catedral", "Vanguardismo: Vallejo", "Generación del 50: Ribeyro", "Generación del 50: narrativa urbana - julio ramón ribeyro", "Generación del 50", "Generación del 60: mario vargas llosa"]],
  ["Literatura hispanoamericana",["Borges: Ficciones", "Borges", "Nueva narrativa · Carpentier", "Nueva poesía hispanoamericana", "Poesía hispanoamericana siglo xx", "Nueva narrativa latinoamericana", "Realismo maravilloso", "Modernismo hispanoamericano"]],
  ["Literatura universal",["Renacimiento: Shakespeare", "Realismo ruso", "Romanticismo: Goethe", "Narrativa bárroca en la edad de oro española", "Teatro en la edad de oro español", "Vanguardismo europeo", "Simbolismo", "Literatura griega: tragedia", "Teatro en la edad de oro", "El teatro barroco", "Romanticismo"]],
  ["Teoría y géneros literarios",["Géneros literarios", "Literatura comparada", "Mio Cid y La ciudad y los perros", "Figuras literarias"]]
 ],
 psi:[
  ["Desarrollo humano",["Piaget", "Estilos de crianza", "Desarrollo cognitivo", "Desarrollo humano", "Autoestima, búsqueda de la identidad y proyecto de vida"]],
  ["Aprendizaje y memoria",["Aprendizaje observacional", "Memoria", "Aprendizaje", "Inteligencia", "Teorías del aprendizaje"]],
  ["La psicología como ciencia",["Escuelas psicológicas", "Método experimental"]],
  ["Salud y hábitos",["Organización del tiempo", "Vivencia saludable"]],
  ["Bases biológicas",["Bases biológicas", "Bases biológicas de la conducta humana", "Bases biológicas del comportamien-"]],
  ["Afectividad",["Afectividad", "Personalidad – psicoanálisis.", "Psicoanálisis", "Motivación"]],
  ["Psicología social",["Actitudes y prejuicio", "Socialización", "Bases socioculturales de la conducta"]]
 ],
 civ:[
  ["Sistema electoral y participación",["Sistema electoral", "Jurado Nacional de Elecciones", "Participación ciudadana", "Sistema electoral: onpe", "Derechos y deberes políticos", "La ciudadanía"]],
  ["Constitución y garantías",["Garantías constitucionales", "Regímenes de excepción", "Derechos fundamentales de la persona", "Constitución política"]],
  ["Estado y organismos autónomos",["Poder Legislativo", "Organismos autónomos", "Estado y organismos autónomos", "Poder legislativo y ejecutivo", "Estado peruano", "Estructura del estado: poder legislativo", "El estado peruano", "Poderes del estado"]],
  ["Convivencia, diversidad y paz",["Convivencia democrática", "Diversidad e inclusión", "Violencia y conflicto interno", "Solución de conflictos", "Mecanismo de solución de conflictos", "Diversidad cultural"]],
  ["Derechos humanos y sistema interamericano",["Sistema interamericano", "Derechos humanos"]]
 ],
 hpe:[
  ["Perú antiguo",["Arcaico Superior", "Formativo en la costa central", "Cultura recuay", "Cultura recuay - cultura mochica", "Teorías de poblamiento americano", "El tahuantinsuyo", "Culturas preincas"]],
  ["Virreinato y rebeliones",["Virreinato: tierras", "Juan Santos Atahualpa", "Túpac Amaru II", "Virreinato: instituciones", "Rebeliones indígenas del siglo xviii – juan santos atahualpa", "Virreinato", "Virreinato, organización política", "Virreinato del perú", "Reformas borbónicas"]],
  ["República",["República Aristocrática", "Reconstrucción Nacional", "Prado y Belaúnde", "República, prosperidad falaz", "Oncenio de leguía", "Reconstrucción nacional", "Gobierno revolucionario de las fuerzas armadas", "Gobierno de juan velasco alvardo", "Segundo belaundismo"]],
  ["Independencia",["Independencia"]],
  ["Historiografía",["Historiadores del siglo XX"]]
 ],
 hun:[
  ["Revolución Industrial",["Primera Revolución Industrial", "Revolución Industrial", "Segunda revolución industrial"]],
  ["Teoría de la historia y prehistoria",["Teoría de la historia", "Paleolítico Superior"]],
  ["Imperialismo y siglo XX",["Imperialismo", "Guerra Fría", "Descolonización", "La guerra fría", "Revolución rusa"]],
  ["Antigüedad y Edad Moderna",["La reforma protestante", "Roma", "Reforma protestante"]],
  ["Revoluciones liberales",["Revoluciones liberales", "Revolución francesa", "Liberalismo"]]
 ],
 gfa:[
  ["Ecorregiones y biodiversidad",["Ecorregiones", "Biodiversidad amazónica", "Reservas de biósfera", "Ecorregiones y biodiversidad", "Once ecorregiones", "Recursos naturales", "Recursos naturales - el suelo"]],
  ["Cartografía y fronteras",["Cartografía", "Fronteras", "Movimiento de traslación", "Líneas imaginarias"]],
  ["Mar, aguas y clima",["Hidrografía", "Mar peruano", "Fenómeno El Niño", "Presión atmosférica", "Manejo de cuencas", "Actividades primarias extractivas"]],
  ["Ambiente y desastres",["Gestión de riesgos", "Protocolo de Kioto", "Gestión de riesgo de desastre", "Problemas atmosféricos", "Climas del perú y desastres climáticos", "Recursos naturales y problemática", "Gestión de riesgos de desastres"]],
  ["Actividades económicas",["La minería", "Sector terciario"]],
  ["Geología y relieve",["Deriva continental", "Geodinámica externa", "Geodinámica interna", "Geomorfología peruana", "Relieve peruano"]]
 ],
 eco:[
  ["Mercado, oferta y demanda",["Oferta y demanda", "Modelos de mercado", "Monopolio", "Monopolio natural", "Fallas de mercado", "El mercado laboral", "Teoría de la demanda"]],
  ["Conceptos básicos y desarrollo",["Flujo circular", "Desarrollo económico", "Sector informal", "Economía como ciencia", "Costo de oportunidad", "Ciclo de vida del producto", "Conceptos básicos y desarrollo", "Economía informal", "División de la economía", "Emprendimiento empresarial"]],
  ["Macroeconomía",["Agregados económicos", "Deuda pública", "Ciclos económicos", "Ingresos", "Cuentas nacionales – desarrollo económico", "Consumo-ahorro", "El dinero", "Principios de economía : política económica", "La inflación"]],
  ["Comercio internacional y divisas",["Comercio internacional", "Mercado de divisas", "Balanza de pagos"]]
 ],
 fil:[
  ["Lógica y argumentación",["Tipos de razonamiento", "Lógica proposicional", "Tipos de argumentos", "Falacias", "Las falacias"]],
  ["Epistemología y ciencia",["Epistemología · Popper", "Método científico", "Positivismo", "Epistemología · Kuhn", "Ciencia y poder"]],
  ["Origen y sentido de la filosofía",["Del mito al logos", "Características de la filosofía", "Origen y sentido de la filosofía", "Introducción a la filosofía"]],
  ["Ética y estética",["Teorías éticas", "Estética", "Filosofía política"]],
  ["Filosofía latinoamericana",["Filosofía latinoamericana", "Filosofía en el perú", "Filosofía peruana"]],
  ["Historia de la filosofía",["Filosofía moderna", "Filosofía del siglo xix", "Filosofía contemporánea", "Filosofía antigua"]]
 ],
 fis:[
  ["Ondas y sonido",["Ondas sonoras", "Sonido", "Ondas mecanicas", "Péndulo simple", "Mas"]],
  ["Dinámica y gravitación",["Dinámica", "Estática con rozamiento", "Leyes de Kepler", "Choques", "Dinámica y gravitación", "Gravitación universal"]],
  ["Calor",["Calorimetría", "Calor específico", "Temperatura", "Dilatación"]],
  ["Fluidos",["Hidrostática", "Dinámica de fluidos"]],
  ["Trabajo y energía",["Conservación de la energía", "Energía mecánica", "Potencial eléctrico", "Conservación de la energía mecánica"]],
  ["Cinemática",["Movimiento parabólico", "MCUV", "Mcuv"]],
  ["Electricidad y magnetismo",["Electrodinámica", "Ley de Lenz", "Condensadores", "Ley de Faraday", "Electromagnetismo", "Circuitos eléctricos", "Inducción electromagnética"]],
  ["Física moderna",["Relatividad", "Física moderna"]],
  ["Óptica",["Espejos esféricos", "Óptica"]],
  ["Magnitudes y vectores",["Vectores", "Análisis dimensional"]],
  ["Cantidad de movimiento",["Choques agudos", "Cantidad de movimiento", "Impulso y cantidad de movimiento"]]
 ],
 qui:[
  ["Química orgánica",["Química orgánica", "Hidrocarburos", "Enlace y compuestos orgánicos", "Proteínas", "Funciones oxigenadas", "Isomería", "Química orgánica - funciones orgánicas oxigenadas", "Compuestos aromáticos", "Química orgánica-hidrocarburos", "Compuestos nitrogenados"]],
  ["Estequiometría",["Composición centesimal", "Estequiometría", "Estequiometría redox", "Ley de equivalentes", "Cálculos químicos", "Cálculos químicos - uqm", "Estequiometría - redox", "Unidades químicas de masa", "Estequiometría-soluciones"]],
  ["Soluciones, ácidos y equilibrio",["Soluciones", "Ácidos y bases", "Equilibrio químico", "Cinética química", "Soluciones (neutralización)", "Soluciones - unidades de concentración"]],
  ["Reacciones, redox y electroquímica",["Reacciones redox", "Electroquímica", "Metalurgia del hierro", "Reacciones químicas", "Reacciones químicas - redox"]],
  ["Átomo y tabla periódica",["Modelos atómicos", "Tabla periódica", "Tabla periódica - química nuclear"]],
  ["Nomenclatura inorgánica",["Química inorgánica"]],
  ["Gases",["Ley de Graham", "Estado gaseoso"]],
  ["Materia y cambios de estado",["Cambios de fase - temperatura"]],
  ["Química aplicada y ambiente",["Metalurgia - recursos naturales cobre."]]
 ],
 bio:[
  ["Anatomía y fisiología animal",["Sistema excretor animal", "Excreción en animales", "Sistema nervioso", "Sistema digestivo", "Tejido muscular", "Reproducción", "Sistema nervioso – pares craneales", "Sistema endocrino", "Reproducción humana", "Sistema respiratorio", "Digestión en animales", "Sistema excretor humano", "Aparato digestivo - digestión", "Fisiología respiratoria", "Sistema nervioso sensorial", "Coordinación", "Sistema excretor en animales", "Sistema circulatorio"]],
  ["Salud e inmunidad",["Salud y enfermedad", "Glóbulos blancos", "Sistema inmunitario"]],
  ["Ecología y recursos",["Ciclo del nitrógeno", "Ecología", "Recursos naturales", "Cardiovascular – ciclo cardiaco", "Ecologia - biorremediación", "Reino plantae – ecología (antibiosis)"]],
  ["Seres vivos y bioquímica",["Características de los seres vivos", "El agua", "Enzimas"]],
  ["Genética",["Citogenética", "Genética"]],
  ["Evolución",["Evolución"]],
  ["Fisiología vegetal",["Fotosíntesis", "Reproducción vegetal", "Reino plantae"]],
  ["Diversidad de seres vivos",["Zoología", "Taxonomía"]],
  ["Histología",["Histología animal – tejido adiposo", "Histología vegetal", "Histología animal", "Histología animal -tejido sanguíneo"]]
 ]
};


