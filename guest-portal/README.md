# 🌴 Portal de Bienvenida Multidioma para Huéspedes (Baia Kabo)

Una guía digital moderna, elegante y de carga instantánea creada en **Astro + Tailwind CSS** con soporte bilingüe nativo (**Español 🇨🇴 e Inglés 🇺🇸**).

Está pensada para que tus huéspedes la abran desde su celular escaneando un código QR en el apartamento o abriendo el link que les envías por WhatsApp / Airbnb al confirmar su reserva.

---

## 🚀 Cómo iniciar el Portal de Huéspedes en tu computador

Abre tu terminal en la carpeta `guest-portal` y ejecuta:

```bash
cd guest-portal
npm run dev
```

Luego abre tu navegador en:
👉 `http://localhost:4322`

Para ver la versión en inglés:
👉 `http://localhost:4322/en/`

---

## 🛠️ Cómo personalizar los datos de tu apartamento

Todos los textos, claves y contactos están centralizados en un solo archivo:
📄 `src/data/translations.ts`

Allí puedes editar:
1. **Red y Clave de WiFi:**
   - Cambia `BaiaKabo_Guest_5G` y `CaribeKristal2026` por la red y contraseña real de tu router.
2. **Número de WhatsApp del Anfitrión:**
   - En la sección `emergency`, coloca tu número de WhatsApp con código de país (ej. `+57 300 123 4567`) para que los huéspedes te contacten con 1 clic.
3. **Recomendaciones de Restaurantes y Supermercados:**
   - Agrega o quita lugares favoritos en Cartagena.

---

## 📱 Ventajas para la Operación de tu Apartamento

- **Botón de 1 Clic para Copiar WiFi:** Olvídate de deletrear contraseñas complicadas.
- **Normas de Copropiedad Amigables:** El huésped entiende las reglas de no colgar ropa en balcones, no hacer ruido y cuidar los ascensores sin sentirse regañado.
- **Alerta Preventiva de Menores:** Explica de forma clara los requisitos de registro civil y notaría para que no los devuelvan en portería.
- **Multidioma Instantáneo:** Con un solo toque, el turista extranjero pasa de español a inglés.
