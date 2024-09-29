# E-commerce Horizons - React.js

El proyecto trata de una tienda online desarrollada con **React.js**, que utiliza **Firebase** como base de datos. La aplicación implementa múltiples librerías, como `react-router-dom` para la navegación, `react-hook-form` para la gestión de formularios, y `sweetalert2` para mostrar alertas amigables.

## Tecnologías Usadas

- **JavaScript**
- **React.js**
- **Firebase**
- **React Router DOM**
- **React Hook Form**
- **SweetAlert2**

## Características

- **Catálogo de Productos**: Al ingresar al sitio, se renderizan dinámicamente los productos obtenidos desde Firebase. El catálogo permite filtrar productos por categorías a través de un menú de navegación.
  
- **Vista Detallada de Productos**: Cada producto cuenta con una vista de detalles donde se muestra su información completa. Desde allí, se puede agregar al carrito la cantidad deseada mediante un contador dinámico.

- **Carrito de Compras**: Los usuarios pueden ver los productos agregados al carrito, modificar cantidades, eliminar productos individuales o vaciar el carrito por completo.

- **Formulario de Compra**: Para finalizar la compra, se muestra un formulario para completar los datos del comprador. Una vez enviado, se genera la orden de compra, la cual se envía a la base de datos, y por último se vacía el carrito y redirige al home nuevamente.

## Deploy

La aplicación está deployada en [Netlify](https://ecommerce-react-horizons.netlify.app/)

