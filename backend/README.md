# 🖥️ Tu Doctor Online - Backend Service

Este módulo contiene la lógica del servidor de **Tu Doctor Online**, una API RESTful construida con **Node.js**, **Express.js** y **Mongoose** para interactuar con una base de datos NoSQL de MongoDB.

---

## 📌 Propósito y Responsabilidades
El backend expone una API REST para gestionar la persistencia y la lógica del negocio médica:
- **Gestión de Entidades**: Operaciones CRUD completas para pacientes, especialistas, categorías y citas.
- **Seguridad CORS**: Whitelisting dinámico para proteger la exposición de endpoints a clientes no autorizados.
- **Acceso a Datos**: ODM de Mongoose con validación de esquemas y mapeo de tipos primitivos (ej. `ObjectId`).

---

## 🛠️ Tecnologías y Dependencias Core
- **Express.js (`^4.18.2`)**: Framework enrutador de HTTP.
- **Mongoose (`^6.7.2`)**: ODM para modelado y conexión a MongoDB.
- **dotenv (`^16.0.3`)**: Configuración segura basada en variables de entorno.
- **cors (`^2.8.5`)**: Habilitación del intercambio de recursos de origen cruzado de manera restrictiva.
- **Nodemon (`^2.0.20`)**: Recarga en caliente para un entorno de desarrollo eficiente.

---

## 🗃️ Arquitectura y Modelado de Datos

Los esquemas de Mongoose definen la integridad y las relaciones entre documentos en la base de datos de MongoDB:

### 1. Paciente (`patient.js`)
```javascript
{
  patient_id: Number,
  patient_name: String,
  patient_lastName: String,
  patient_email: String,
  patient_password: String
}
```

### 2. Especialista (`specialist.js`)
*Relación de referencia hacia una o múltiples categorías de especialista por su ObjectId.*
```javascript
{
  specialist_id: Number,
  specialist_name: String,
  specialist_lastName: String,
  specialist_email: String,
  specialist_category: [mongoose.Types.ObjectId]
}
```

### 3. Categoría de Especialista (`specialist_category.js`)
```javascript
{
  category_id: Number,
  category_name: String
}
```

### 4. Cita Médica (`medical_appointment.js`)
*Relación referencial directa de muchos a muchos que asocia una fecha, un paciente y un especialista.*
```javascript
{
  medical_appointment_id: Number,
  medical_appointment_fechahora: Date,
  patient_id: [mongoose.Types.ObjectId],
  specialist_id: [mongoose.Types.ObjectId]
}
```

---

## 📡 Documentación de API (Endpoints)

Todos los endpoints devuelven y aceptan payloads en formato **JSON**.

### Pacientes (`/patient`)
- **GET `/patient`**: Obtiene el listado completo de pacientes.
- **GET `/patient/:_id`**: Obtiene los detalles de un paciente usando el `_id` autogenerado de MongoDB.
- **POST `/patient`**: Registra un nuevo paciente.
  - *Payload*: `{ "patient_id": 101, "patient_name": "Juan", "patient_lastName": "Pérez", "patient_email": "juan@mail.com", "patient_password": "hashed_password" }`
- **PUT `/patient/:_id`**: Actualiza los datos de un paciente.
- **DELETE `/patient/:_id`**: Elimina a un paciente permanentemente de la base de datos.

### Especialistas (`/specialist`)
- **GET `/specialist`**: Obtiene todos los especialistas registrados.
- **GET `/specialist/:_id`**: Obtiene detalles de un especialista por ID de base de datos.
- **POST `/specialist`**: Registra un especialista y asocia su categoría.
- **PUT `/specialist/:_id`**: Modifica información técnica y de contacto del especialista.
- **DELETE `/specialist/:_id`**: Remueve al especialista del catálogo.

### Categorías de Especialista (`/category`)
- **GET `/category`**: Lista todas las especialidades disponibles.
- **POST `/category`**: Crea una nueva categoría médica (ej: *Neurología*).
- **PUT `/category/:_id`**: Modifica el nombre o ID de una categoría.
- **DELETE `/category/:_id`**: Elimina una categoría.

### Citas Médicas (`/medicalappointment`)
- **GET `/medicalappointment`**: Recupera todas las citas programadas.
- **POST `/medicalappointment`**: Crea un agendamiento vinculando IDs de Mongoose.
  - *Payload*: `{ "medical_appointment_id": 5001, "medical_appointment_fechahora": "2026-06-15T09:00:00.000Z", "patient_id": ["637a85..."], "specialist_id": ["637a86..."] }`
- **PUT `/medicalappointment/:_id`**: Modifica los detalles de la cita.
- **DELETE `/medicalappointment/:_id`**: Cancela una cita médica.

---

## ⚙️ Configuración y Arranque Local

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Crea un archivo de entorno `var.env` en la raíz de la carpeta `backend` con las siguientes llaves:
   ```env
   PORT=4000
   URI_MONGODB=tu_uri_de_conexion_a_mongodb_atlas
   ```
3. Ejecuta el servidor en modo desarrollo:
   ```bash
   npm start
   ```

---

## 💡 Observación Arquitectónica Importante (Code Quality Audit)
> [!WARNING]
> **Bug de actualización detectado**: En todos los controladores (`patientController.js`, `specialistController.js`, etc.), el método `update` recupera el objeto original de la base de datos y luego ejecuta `findByIdAndUpdate` pasando ese objeto original en lugar de pasar el objeto de la petición (`req.body`). Para solucionar esto de manera productiva, se recomienda pasar `req.body` con la opción `{ new: true }`.
