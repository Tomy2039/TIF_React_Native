# TIF_React_Native

Una aplicación móvil creada con **React Native** y **Expo** para gestionar notas basadas en fotografías. Permite crear, leer, actualizar y eliminar notas, guardando toda la información en el almacenamiento local del dispositivo.

---

## 📌 Funcionalidades

### Crear Nota (Create)

* Ingresar título y descripción.
* Tomar foto con la cámara o seleccionar desde la galería.
* Guardar nota con fecha de creación y modificación.
* Redirigir automáticamente a la lista principal.

### Leer Notas (Read)

* Lista todas las notas guardadas.
* Cada nota muestra una miniatura de la imagen y el título.
* Al tocar una nota, se abre la vista de detalle con toda la información.

### Actualizar Nota (Update)

* Editar título y descripción de la nota existente.
* Reemplazar imagen si se desea.
* Guardar cambios y actualizar la lista de notas.

### Eliminar Nota (Delete)

* Botón claro para eliminar nota en la vista de detalle.
* Confirmación antes de eliminar.
* Elimina la nota del almacenamiento local y regresa a la lista principal.

---

## ⚙️ Tecnologías y Dependencias

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Expo Router](https://expo.github.io/router/docs)
* [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
* [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
* [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## 📁 Estructura del Proyecto

```
app/
 ├─ _layout.js          # Layout principal con Stack Navigator
 ├─ index.js            # Lista de notas (Read)
 ├─ create.js           # Crear nota (Create)
 ├─ note/
 │    └─ [id].js        # Detalle y eliminar nota (Read + Delete)
 └─ edit/
      └─ [id].js        # Editar nota (Update)
context/
 └─ NotesContext.js     # Context para manejo de notas y AsyncStorage
```

---

## 🚀 Instalación y Ejecución

1. Clonar repositorio:

```bash
git clone https://github.com/Tomy2039/TIF_React_Native
cd notas-foto
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar la app:

```bash
npx expo start
```


