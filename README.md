# Web Instrelec — Preview local

Instrucciones rápidas para previsualizar el sitio estático desde Windows PowerShell.

Requisitos mínimos
- Python 3 (opcional, suele venir instalado en muchas máquinas).
- Node.js + npm (opcional, sólo si usas `http-server` con `npx`).
- Alternativa: extensión "Live Server" en VS Code.

1) Usando Python 3 (rápido y sin instalar nada extra)

Abre PowerShell en la raíz del proyecto (donde está `index.html`) y ejecuta:

```powershell
# si Python está instalado como 'python'
python -m http.server 8000

# o en algunos sistemas: 'py -3' en lugar de 'python'
py -3 -m http.server 8000
```

Luego abre en el navegador:

http://localhost:8000

2) Usando npx http-server (si tienes Node.js instalado)

```powershell
npx http-server -p 8000 .
```

Abre en el navegador:

http://localhost:8000

3) Usando la extensión Live Server (VS Code)
- Instala la extensión "Live Server" (Ritwick Dey).
- Abre la carpeta del proyecto en VS Code.
- Haz clic derecho en `index.html` → "Open with Live Server".

Consejos y resolución de problemas
- Asegúrate de ejecutar el comando desde la carpeta que contiene `index.html`.
- Si el puerto 8000 ya está en uso, cámbialo (por ejemplo `python -m http.server 8080` o `-p 3000` en http-server).
- Si el navegador no carga, revisa el firewall de Windows que no bloquee conexiones locales.
- Para detener el servidor, vuelve a la terminal y presiona Ctrl+C.

Contacto
Si quieres que añada un script `package.json` con un atajo `npm run start` o que incluya instrucciones específicas para ejecución remota, dímelo y lo añado aquí.