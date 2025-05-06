## Descripción

Crearás un entorno de desarrollo que cumpla con ciertas necesidades. Quieres poder comenzar a escribir código sin necesidad de instalar recursos localmente en tu máquina.

GitHub Codespaces es un entorno de desarrollo en la nube que nos ayudará a trabajar sin necesidad de instalar nada localmente en tu máquina, todo se hará en la nube. Aquí puedes ver más sobre lo que es un [GitHub Codespace](https://docs.github.com/es/codespaces/overview).

La aplicación utiliza una variable de entorno llamada **MONGODB_URI** con el valor **mongodb://localhost** para conectarse a la base de datos MongoDB. 

1. Por tanto, **en primer lugar** agrega este elemento en los **Settings** de tu repositorio, en la sección de **Codespaces**, como un **secreto** cifrado.

2. A continuación, **crea un Codespace** a partir del repositorio que se encuentra **en tu cuenta de GitHub** (Importante: El Codespace debe ser creado desde TU repositorio en TU cuenta).

Una vez dentro de tu Codespace, **configúralo** de acuerdo a las siguientes indicaciones:

### Pasos para configurar tu Codespace:

1. Accede a la **Paleta de Comandos** presionando **F1** o haciendo clic en el menú ☰ y seleccionando **View** → **Command Palette**.

2. Comienza a escribir **dev container** en la Paleta de Comandos.

3. Selecciona **Codespaces: Add Development Container Configuration Files...**.

4. Selecciona **Create a new configuration...**.

5. Selecciona **Show all definitions...**.

6. Desplázate hacia abajo y selecciona **Node.js & Mongo DB**.

7. Selecciona **22-bookworm** para la versión de Node.js.

8. En la siguiente pantalla, selecciona **Azure CLI** de las características adicionales y luego selecciona **OK**.

    - **NOTA:** Puedes escribir el nombre de la característica que deseas para filtrar la lista.

9. Selecciona **Keep defaults**.

    - Esto creará los archivos de definición del nuevo contenedor en la carpeta `.devcontainer`.

10. Abre la **Paleta de Comandos** nuevamente.

11. Escribe **rebuild** y selecciona **Codespaces: Rebuild container**.

12. Selecciona **Rebuild Container** en el cuadro de diálogo. Ahora tu contenedor se reconstruirá. No importa si eliges **Rebuild** o **Full Rebuild**, cualquiera de las dos opciones te permitirá reiniciar tu codespace con las herramientas necesarias para compilar tu aplicación.

    - **IMPORTANTE:** La reconstrucción del contenedor puede tardar varios minutos. No te preocupes si se recarga la página, aparecerá nuevamente después de unos instantes.

Una vez creado el Codespace y configurados los recursos, podrás ejecutar la aplicación con los siguientes comandos:

Primero:

```bash
npm install
```

Una vez instalados los paquetes, procede a ejecutar la aplicación:

```bash
npm run dev
```

En la pestaña **Ports** te aparecerá una dirección URL desde la cual puedes acceder a tu aplicación (clic derecho y elige la opción Abrir en Navegador).

> NOTA: Si te aparece un **error 502**, en la pestaña _Ports_ haz clic derecho en el puerto 3000, elige _Stop Forwarding Port_, luego regresa a la _Terminal_, presiona `Ctrl C` para cancelar y ejecuta de nuevo el comando `npm run dev`. Debería funcionar en esta segunda ocasión.

## Éxito

- Has creado y configurado un entorno de desarrollo en la nube con los siguientes recursos instalados:
  - Azure CLI
  - NodeJS
  - MongoDB
- Has creado un secreto encriptado para MONGODB_URI
- Eres capaz de iniciar y ver la aplicación en el entorno de desarrollo basado en la nube.
- **No** se instalaron recursos en tu máquina.

## Recursos de Aprendizaje

- [GitHub Codespaces](https://docs.github.com/es/codespaces/overview)
- [Introducción a los contenedores dev](https://docs.github.com/es/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)
- [Configuración de un proyecto de Node.js para GitHub Codespaces](https://docs.github.com/es/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-nodejs-project-for-codespaces)
- [Adición de características a un archivo devcontainer.json](https://docs.github.com/es/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/adding-features-to-a-devcontainer-file)
- [Reenviar puertos en tu codespace](https://docs.github.com/es/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)
- [Administración de secretos específicos de la cuenta para GitHub Codespaces](https://docs.github.com/es/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)
- [Desarrollar en un codespace](https://docs.github.com/es/codespaces/developing-in-a-codespace/developing-in-a-codespace)
- [Precompilación de los codespaces](https://docs.github.com/es/codespaces/prebuilding-your-codespaces)

## Tips

- **Ctl-\`** mostrará la ventana de la terminal en Codespaces.
- **Cmd-Shift-P** (Mac) o **Ctl-Shift-P** (PC) abrirá la paleta de comandos.

