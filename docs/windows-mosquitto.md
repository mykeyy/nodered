# Windows notes: Node-RED and Mosquitto

This page is a manual reference for a local Windows setup. It is separate from
the Rosé Pine theme package: the theme changes the editor UI, while Node-RED
and Mosquitto are the tools that run your flow and MQTT broker.

## 1. Install Node.js and Node-RED

Install the current Node.js LTS release from [nodejs.org](https://nodejs.org/),
then follow the official [Node-RED Windows guide](https://nodered.org/docs/getting-started/windows).

Check the installation in PowerShell:

```powershell
node --version
npm --version
node-red --version
```

Start Node-RED with the normal command:

```powershell
node-red
```

Open <http://127.0.0.1:1880/> in your browser. If port `1880` is already in
use, stop the other Node-RED process before starting a second editor.

## 2. Install the Rosé Pine theme

Install it into the Node-RED user directory:

```powershell
Set-Location "$env:USERPROFILE\.node-red"
npm install @mykeyy/node-red-theme-rose-pine
```

In `settings.js`, set the theme you want:

```js
editorTheme: {
    theme: "rose-pine"
}
```

Use `rose-pine-moon` for the blue-dark variant or `rose-pine-dawn` for the
light variant. Restart Node-RED after changing the setting.

## 3. Install Mosquitto separately

Download Mosquitto from the [official Mosquitto download page](https://mosquitto.org/download/).
Use the Windows installer and keep the broker local while testing.

The usual local MQTT endpoint is:

```text
mqtt://127.0.0.1:1883
```

In Node-RED, add an MQTT broker configuration node with host `127.0.0.1` and
port `1883`, then connect an MQTT input or output node to your flow. The theme
does not create this broker configuration and does not enable anonymous access.

Check whether the two common local ports are listening:

```powershell
Get-NetTCPConnection -LocalPort 1880,1883 -State Listen -ErrorAction SilentlyContinue
```

If PowerShell reports that a port is in use, identify the owning process before
stopping anything:

```powershell
Get-NetTCPConnection -LocalPort 1880,1883 -State Listen |
    Select-Object LocalAddress,LocalPort,OwningProcess
```

Only stop a process you recognize. Do not expose an unauthenticated broker to
the public internet; use authentication, authorization, and a deliberate
listener configuration for anything beyond local testing.

## Why there is no installer script here

This repository is intentionally a reusable theme package. It does not run
PowerShell, download Node.js, import flows, edit `settings.js`, or start
Mosquitto on someone else's computer. Keeping those actions manual makes the
scope visible and avoids overwriting an existing Node-RED setup.
