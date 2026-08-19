# Rosé Pine themes for Node-RED

This is a small editor theme plugin for [Node-RED](https://nodered.org/).
It brings the Rosé Pine palette into the parts of the editor you look at all
the time: the workspace, Explorer, palette, sidebars, Debug Messages panel,
forms, buttons, nodes, and the Monaco code editor.

The package includes all three official Rosé Pine variants:

| Theme | Node-RED setting | Feel |
| --- | --- | --- |
| Rosé Pine | `rose-pine` | the original deep-night palette |
| Rosé Pine Moon | `rose-pine-moon` | a slightly blue, softer dark palette |
| Rosé Pine Dawn | `rose-pine-dawn` | the warm, light palette |

## Install

From the Node-RED user directory on Windows, install the package with npm:

```powershell
Set-Location "$env:USERPROFILE\.node-red"
npm install @mykeyy/node-red-theme-rose-pine
```

Then add one of the theme names to `settings.js`:

```js
editorTheme: {
    theme: "rose-pine"
}
```

Restart Node-RED after changing the theme. To use Moon or Dawn, change the
value to `rose-pine-moon` or `rose-pine-dawn`.

## What this package does

- styles the Node-RED editor without changing your flows
- keeps the palette categories visually distinct
- improves contrast for Explorer labels, sidebars, node labels, and debug text
- provides matching Monaco editor colours for each variant
- leaves your broker, credentials, flow data, and runtime settings alone

This repository intentionally does not include PowerShell installers, imported
flow files, broker configuration, credentials, or machine-specific setup. It
is a theme package first, so installing it cannot silently replace a Node-RED
workspace.

## Windows, Node-RED, and Mosquitto

Node-RED itself runs on Node.js. Bun is still fine for your other JavaScript
projects, but npm is the documented and most predictable way to install a
Node-RED plugin in the `.node-red` user directory.

Mosquitto is a separate MQTT broker. If you are building an MQTT setup on
Windows, install and configure Mosquitto independently, then point your
Node-RED MQTT nodes at the broker you chose. This theme does not start a
broker, open ports, or change MQTT security settings.

The repository has a short set of manual Windows notes in
[`docs/windows-mosquitto.md`](docs/windows-mosquitto.md). They are deliberately
copyable commands and explanations rather than a downloaded script.

## Development

The package is kept at the repository root so the GitHub project and the npm
package describe the same thing.

To inspect the exact files that would be published:

```powershell
npm pack --dry-run
```

To test a local checkout in Node-RED:

```powershell
Set-Location "$env:USERPROFILE\.node-red"
npm install "C:\path\to\node-red-rose-pine-setup"
```

After installing, restart Node-RED and select the desired theme name in
`settings.js`. The plugin registers these three theme IDs:

```text
rose-pine
rose-pine-moon
rose-pine-dawn
```

## Credits

The colour roles follow the Rosé Pine palette. See the official
[Rosé Pine palette](https://rosepinetheme.com/palette/) and
[Node-RED theme plugin documentation](https://nodered.org/docs/api/ui/themes/)
for the upstream palette and plugin format.

## License

MIT. See [`LICENSE`](LICENSE).
