# Informe de Revisión Estática — Laboratorio 02

## Datos del estudiante

| Campo           | Valor                 |
| --------------- | --------------------- |
| Estudiante      | Miguel Palomino       |
| Fecha           | 2026                  |
| Módulo revisado | src/lab02/products.js |
| URL SonarCloud  | (pegar aquí tu link)  |

---

## Herramientas utilizadas

* ESLint (reglas: eqeqeq, no-var, no-unused-vars, prefer-const)
* SonarCloud (análisis automático)
* Checklist manual de calidad

---

## Resumen de hallazgos

| #  | Herramienta | Archivo     | Línea   | Descripción                 | Severidad | Estado    |
| -- | ----------- | ----------- | ------- | --------------------------- | --------- | --------- |
| 01 | ESLint      | products.js | 14      | Uso de == en vez de ===     | Alta      | Corregido |
| 02 | ESLint      | products.js | 4,12,22 | Uso de var                  | Media     | Corregido |
| 03 | ESLint      | products.js | -       | Variable no usada           | Baja      | Corregido |
| 04 | Manual      | products.js | -       | Precio negativo             | Alta      | Corregido |
| 05 | Manual      | products.js | -       | Precio null o undefined     | Alta      | Corregido |
| 06 | Manual      | products.js | -       | Falta validación en función | Alta      | Corregido |
| 07 | SonarCloud  | products.js | -       | Falta documentación         | Baja      | Corregido |

---



---

## Propuestas de mejora

1. Validar precios negativos o nulos
2. Usar const/let en vez de var
3. Usar === en comparaciones
4. Agregar documentación JSDoc
5. Crear pruebas unitarias (.test.js)

---

## Conclusión

ESLint permitió detectar errores de sintaxis y malas prácticas como uso de var o ==.
SonarCloud ayudó a identificar problemas más generales como documentación y calidad del código.
Ambas herramientas son complementarias para asegurar software de calidad.
