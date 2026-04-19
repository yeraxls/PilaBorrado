# Undo Form Project

## Descripción

Este proyecto muestra un sistema de **Deshacer / Rehacer (Ctrl+Z / Ctrl+Y)** para formularios web usando JavaScript puro.

El objetivo principal es disponer de una solución reutilizable para cualquier proyecto ASP.NET, MVC, Razor Pages o páginas HTML estándar.

---

## Archivo importante del proyecto

### `undo-form.js`

Este es el archivo principal del proyecto.

Contiene toda la lógica de:

* Historial de cambios
* Pila de acciones Undo / Redo
* Uso de closures para restaurar valores anteriores
* Compatibilidad con distintos tipos de campos:

  * input text
  * number
  * textarea
  * select
  * checkbox
  * radio
* Atajos de teclado:

  * Ctrl + Z
  * Ctrl + Y
  * Ctrl + Shift + Z

> Si quieres reutilizar este proyecto en otra aplicación, este es el archivo que debes copiar e importar.

---

## Archivo `index` / Vista HTML

La página `index` (o la vista HTML incluida en el proyecto) es **solo un ejemplo visual** de formulario para probar el funcionamiento.

Incluye campos como:

* Nombre
* Apellido
* Edad

Su función es demostrar cómo conectar el archivo `undo-form.js` con un formulario real.

---

## Uso básico

Incluye el script en tu página:

```html
<script src="js/undo-form.js"></script>
<script>
  activarUndoFormulario();
</script>
```

---

## Cómo funciona

Cada cambio en un campo genera una acción que se guarda en memoria.

Cuando el usuario pulsa **Ctrl+Z**, se recupera la última acción y se restaura el valor anterior.

Cuando pulsa **Ctrl+Y**, se rehace el cambio.

La lógica se basa en:

* Stack (pilas)
* Closures
* Eventos del DOM

---

## Pensado para ampliar

Este proyecto puede evolucionar fácilmente con:

* Historial limitado
* Undo por formulario independiente
* Exclusión de campos
* Integración con React / Vue / Angular
* Persistencia temporal
* Eventos personalizados

---

## Resumen

Si revisas este proyecto, céntrate en:

### ✅ `undo-form.js`

El resto del HTML es únicamente una demo para pruebas.
