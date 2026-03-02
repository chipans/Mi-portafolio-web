# 🚀 Portafolio — Jorge Chipana
### Construido con Node.js + Express + HTML + CSS + JavaScript

---

## 📁 ESTRUCTURA DEL PROYECTO

```
jorge-portfolio/
│
├── app.js                  ← Servidor principal Express
├── package.json            ← Dependencias del proyecto
├── .env                    ← Variables de entorno (NO subir a GitHub)
├── .gitignore              ← Archivos ignorados por Git
│
├── routes/
│   └── index.js            ← Rutas del servidor (páginas + API)
│
├── config/
│   └── (futuras configuraciones)
│
└── public/                 ← Archivos que ve el navegador
    ├── index.html          ← Tu portafolio completo
    └── images/
        └── foto.jpg        ← Tu foto (debes agregarla)
```

---

## ⚙️ INSTALACIÓN PASO A PASO

### PASO 1 — Instalar Node.js
Si no tienes Node.js instalado:
- Descarga desde: https://nodejs.org
- Elige la versión **LTS** (recomendada)
- Instala normalmente, acepta todo

Verifica la instalación abriendo una terminal y ejecutando:
```bash
node --version    # debe mostrar v18.x o superior
npm --version     # debe mostrar 9.x o superior
```

---

### PASO 2 — Descargar el proyecto
Descarga y descomprime la carpeta `jorge-portfolio` en tu computadora.

Ejemplo: colócala en tu escritorio o en `Documentos/`.

---

### PASO 3 — Abrir la terminal en la carpeta del proyecto

**En Windows:**
- Abre la carpeta `jorge-portfolio`
- Mantén `Shift` y haz clic derecho en un espacio vacío
- Selecciona "Abrir ventana de PowerShell aquí" o "Abrir en Terminal"

**En Mac/Linux:**
- Abre la Terminal
- Escribe: `cd ruta/a/jorge-portfolio`

---

### PASO 4 — Instalar dependencias
```bash
npm install
```
Esto descarga Express y los demás paquetes. Verás aparecer la carpeta `node_modules/`.

---

### PASO 5 — Configurar tus datos en .env
Abre el archivo `.env` y actualiza:
```
PORT=3000
NODE_ENV=development
GITHUB_URL=https://github.com/TU-USUARIO-REAL
WHATSAPP_NUMBER=59171234567
EMAIL=jorge@tumail.com
```

---

### PASO 6 — Actualizar tus links en el HTML
Abre `public/index.html` y busca (Ctrl+F) estas líneas para cambiarlas:

| Busca | Reemplaza con |
|-------|--------------|
| `https://github.com/` | Tu URL de GitHub real |
| `https://wa.me/591` | `https://wa.me/591TUNUMERO` |
| `jorge@email.com` | Tu correo real |
| `github.com/jorgechipana` | Tu usuario de GitHub |

---

### PASO 7 — Agregar tu foto
1. Ten una foto tuya en formato `.jpg` o `.png`
2. Renómbrala a `foto.jpg`
3. Cópiala dentro de la carpeta `public/images/`
4. En `public/index.html`, busca los dos lugares donde dice `<div class="splash-avatar">JC</div>` y `<div class="hero-avatar">JC</div>`
5. Reemplázalos por:

```html
<!-- Para splash-avatar -->
<div class="splash-avatar">
  <img src="images/foto.jpg" alt="Jorge Chipana"
       style="width:100%;height:100%;object-fit:cover;border-radius:50%">
</div>

<!-- Para hero-avatar -->
<div class="hero-avatar">
  <img src="images/foto.jpg" alt="Jorge Chipana"
       style="width:100%;height:100%;object-fit:cover;border-radius:50%">
</div>
```

---

### PASO 8 — ¡Levantar el servidor!
```bash
npm start
```

Deberías ver esto en la terminal:
```
╔══════════════════════════════════════╗
║   🚀  PORTAFOLIO DE JORGE CHIPANA   ║
╚══════════════════════════════════════╝

  ➜  Local:   http://localhost:3000
  ➜  Entorno: desarrollo
```

Abre tu navegador y entra a: **http://localhost:3000** 🎉

---

## 🔄 MODO DESARROLLO (recarga automática)
Si instalas nodemon (ya incluido en devDependencies):
```bash
npm run dev
```
Con esto, cada vez que guardes cambios en el código, el servidor se reinicia solo.

---

## 🌐 PUBLICAR EN INTERNET (Deploy gratuito)

### Opción A — Render.com (recomendado, GRATIS)
1. Sube tu proyecto a GitHub
2. Ve a https://render.com y crea cuenta
3. Clic en "New Web Service"
4. Conecta tu repositorio de GitHub
5. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Clic en "Deploy" ✅
7. En 2-3 minutos tendrás tu URL pública: `https://jorge-chipana.onrender.com`

### Opción B — Railway.app (también GRATIS)
1. Ve a https://railway.app
2. Conecta con GitHub
3. Selecciona tu repositorio
4. Railway detecta Node.js automáticamente
5. ¡Deploy listo!

### Opción C — Vercel (GRATIS)
1. Instala Vercel CLI: `npm install -g vercel`
2. Dentro de la carpeta del proyecto: `vercel`
3. Sigue las instrucciones
4. Tu URL: `https://jorge-chipana.vercel.app`

---

## 🛠️ COMANDOS ÚTILES

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias |
| `npm start` | Inicia el servidor |
| `npm run dev` | Inicia con recarga automática |
| `Ctrl + C` | Detiene el servidor |

---

## ❓ PROBLEMAS FRECUENTES

**Error: "Cannot find module 'express'"**
→ Ejecuta `npm install` de nuevo

**Error: "Port 3000 is already in use"**
→ Cambia el puerto en `.env`: `PORT=3001`

**El navegador no abre la página**
→ Asegúrate de haber ejecutado `npm start` y entra a `http://localhost:3000`

---

## 📦 DEPENDENCIAS USADAS

| Paquete | Para qué sirve |
|---------|----------------|
| `express` | Servidor web y manejo de rutas |
| `helmet` | Seguridad HTTP (cabeceras seguras) |
| `compression` | Comprime respuestas (carga más rápida) |
| `dotenv` | Lee variables de entorno desde .env |
| `nodemon` | Recarga automática en desarrollo |

---

*Portafolio creado por Jorge Chipana · Bolivia 🇧🇴*
