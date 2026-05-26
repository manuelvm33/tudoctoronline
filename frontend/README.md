# 💻 Tu Doctor Online - Frontend Application

Este directorio contiene el cliente web interactivo de **Tu Doctor Online**, una Single Page Application (SPA) moderna desarrollada con **React.js** y maquetada sobre la plantilla administrativa **AdminLTE v3.2**.

---

## 📌 Propósito y Responsabilidades
El cliente React proporciona una interfaz rica e intuitiva para dos tipos principales de usuarios: pacientes que desean agendar citas y personal administrativo que necesita controlar el flujo del centro médico:
- **Dashboard Centralizado**: Visualización fluida de métricas y acceso rápido a módulos mediante una barra lateral interactiva.
- **Formularios de Registro e Ingreso**: Control seguro de login e inscripciones de pacientes con validaciones en cliente.
- **Interfaces de Gestión de Tablas**: Listado interactivo y acciones CRUD (Crear, Editar, Eliminar) para Pacientes, Especialistas y Citas Médicas.

---

## 🛠️ Stack Tecnológico Frontend
- **React.js (`v18.2.0`)**: Librería declarativa para interfaces SPA reactivas.
- **React Router DOM (`v6.4.3`)**: Gestión moderna de enrutamiento basado en componentes y layouts.
- **AdminLTE (`v3.2`)**: Panel de administración premium basado en Bootstrap 4 y jQuery, optimizado para dashboards responsivos.
- **SweetAlert (`^2.1.2`)**: Modal popup engine para enriquecer la experiencia de confirmación y alertas de red.

---

## 🛣️ Enrutamiento y Estructura de Navegación

El archivo principal de enrutamiento `src/App.js` organiza la navegación interna en rutas públicas y privadas de la siguiente forma:

| Ruta | Componente | Propósito |
| :--- | :--- | :--- |
| `/` | `Login.js` | Acceso seguro del usuario. |
| `/crear-paciente` | `CreatePatient.js` | Registro autónomo de nuevos pacientes. |
| `/home` | `Home.js` | Dashboard principal de control. |
| `/home/listar-pacientes` | `Patient.js` | CRUD interactivo de pacientes. |
| `/home/listar-especialistas`| `Specialist.js` | CRUD interactivo de especialistas. |
| `/home/listar-citas` | `MedicalAppo.js` | Agendamiento y cancelación de citas. |

---

## 🧱 Estructura de Componentes UI

El proyecto utiliza un sistema modular para mantener las vistas limpias y reutilizables:
- **`components/Navbar.js`**: Barra superior que contiene alertas, perfiles de usuario y accesos rápidos.
- **`components/menu.js` (Sidebar)**: Panel lateral dinámico con enlaces interactivos construidos bajo la estructura CSS de AdminLTE.
- **`components/Footer.js`**: Pie de página estático corporativo.
- **`components/Header.js`**: Generador de migas de pan (*Breadcrumbs*) y títulos dinámicos de sección.

---

## ⚙️ Conexión con el Servidor API

El cliente se comunica de manera asíncrona con el backend mediante peticiones HTTP. La URL base de la API está configurada en `src/config.js` para facilitar el cambio rápido entre entornos (ej: *development* local y *production* en la nube):

```javascript
// src/config.js
export const API_BASE_URL = 'http://localhost:4000';
```

---

## 🚀 Instalación y Desarrollo Local

1. Navega al directorio del proyecto:
   ```bash
   cd frontend/tu-doctor-online
   ```
2. Instala todos los paquetes y módulos requeridos:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo en local:
   ```bash
   npm start
   ```
   La aplicación se servirá en `http://localhost:3000` con recarga automática (*Hot Reload*) activada.
