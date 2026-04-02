# Start Text Animation Library

Una pequeña biblioteca JavaScript para crear animaciones de escritura de texto tipo "máquina de escribir" en el DOM.

## Características

- Efecto de máquina de escribir personalizable
- Ciclado automático entre múltiples textos
- Retrasos configurables entre caracteres y textos
- Sin dependencias externas
- Ligero y fácil de usar

## Instalación

Simplemente incluye el archivo `script.js` en tu proyecto HTML:

```html
<script src="path/to/script.js"></script>
```

Asegúrate de tener un elemento con el id `demo` en tu HTML donde se mostrará la animación:

```html
<div id="demo"></div>
```

## Uso

### Configuración básica

La biblioteca se inicia automáticamente al cargar el script. Por defecto, mostrará los siguientes textos en ciclo:

- "Hi"
- "I am a Web Developer"
- "I am a Designer"
- "I create awesome websites"
- "I am a Freelancer"

### Personalización

Para personalizar los textos que se muestran, modifica el array `dataText` dentro de la función `StartTextAnimation` en `script.js`:

```javascript
function StartTextAnimation(i) {
  var dataText = [
    'Tu primer texto',
    'Tu segundo texto',
    'Tu tercer texto',
    // Añade o modifica textos según necesites
  ]
  // ... resto del código
}
```

## API

### Funciones principales

#### `typeWriter(text, i, fnCallback)`

Función interna que crea el efecto de máquina de escribir.

**Parámetros:**

- `text` (string): El texto que se va a escribir
- `i` (number): Índice actual del carácter (uso interno)
- `fnCallback` (function): Función de callback que se ejecuta cuando termina de escribir el texto

**Ejemplo de uso interno:**

```javascript
typeWriter('Hola Mundo', 0, function () {
  console.println('¡Texto completado!')
})
```

#### `StartTextAnimation(i)`

Función que gestiona el ciclo de múltiples textos con efecto de máquina de escribir.

**Parámetros:**

- `i` (number): Índice del texto actual en el array (uso interno)

**Cómo funciona:**

1. Escribe el texto actual usando `typeWriter`
2. Cuando termina, espera 700ms
3. Pasa al siguiente texto en el array
4. Cuando llega al final, espera 20 segundos y vuelve al inicio

## Personalización avanzada

### Cambiar velocidad de escritura

Modifica el valor de `setTimeout` en la función `typeWriter` (currently 100ms):

```javascript
setTimeout(function () {
  typeWriter(text, i + 1, fnCallback)
}, 100) // Cambia este valor para ajustar la velocidad (en milisegundos)
```

### Cambiar retraso entre textos

Modifica el valor de `setTimeout` en la condición de reinicio (currently 20000ms):

```javascript
if (typeof dataText[i] == 'undefined') {
  setTimeout(function () {
    StartTextAnimation(0)
  }, 20000) // Cambia este valor para ajustar el retraso entre ciclos (en milisegundos)
}
```

### Cambiar retraso al completar cada texto

Modifica el valor de `setTimeout` en la condición de callback (currently 700ms):

```javascript
} else if (typeof fnCallback == 'function') {
  setTimeout(fnCallback, 700) // Cambia este valor para ajustar el retraso después de completar cada texto (en milisegundos)
}
```

## Compatibilidad

Esta biblioteca funciona en todos los navegadores modernos que soportan:

- `querySelector`
- `setTimeout`
- `substring`

No requiere transpilación ni polyfills para navegadores estándar.

## Ejemplo completo

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Demo de Start Text Animation</title>
  </head>
  <body>
    <h1>Bienvenido a mi sitio</h1>
    <div
      id="demo"
      style="font-size: 24px; font-family: monospace; color: #333;"></div>

    <script src="script.js"></script>
  </body>
</html>
```

JavaScript (script.js):

```javascript
// El código de la biblioteca va aquí
// (como se proporciona en el archivo script.js)
```

## Licencia

MIT - Siéntete libre de usar, modificar y distribuir esta biblioteca como desees.

## Soporte

Para reportar problemas o sugerir mejoras, por favor crea un issue en el repositorio del proyecto.
