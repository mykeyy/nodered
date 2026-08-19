const editorOptions = {
    fontFamily: "Cascadia Code, Fira Code, Consolas, 'Courier New', monospace",
    fontLigatures: true,
    minimap: { enabled: false }
};

function registerTheme(RED, name, css, colors, rules, base) {
    RED.plugins.registerPlugin(name, {
        type: "node-red-theme",
        css,
        monacoOptions: {
            ...editorOptions,
            theme: {
                base,
                inherit: true,
                colors,
                rules
            }
        }
    });
}

module.exports = function(RED) {
    registerTheme(
        RED,
        "rose-pine",
        "style.css",
        {
            "editor.background": "#191724",
            "editor.foreground": "#e0def4",
            "editorCursor.foreground": "#ebbcba",
            "editor.lineHighlightBackground": "#1f1d2e",
            "editor.selectionBackground": "#403d52",
            "editor.inactiveSelectionBackground": "#26233a",
            "editorIndentGuide.background": "#26233a",
            "editorIndentGuide.activeBackground": "#6e6a86"
        },
        [
            { token: "comment", foreground: "6e6a86", fontStyle: "italic" },
            { token: "string", foreground: "f6c177" },
            { token: "number", foreground: "ebbcba" },
            { token: "keyword", foreground: "c4a7e7" },
            { token: "type", foreground: "9ccfd8" },
            { token: "function", foreground: "eb6f92" }
        ],
        "vs-dark"
    );

    registerTheme(
        RED,
        "rose-pine-moon",
        ["style.css", "style-moon.css"],
        {
            "editor.background": "#232136",
            "editor.foreground": "#e0def4",
            "editorCursor.foreground": "#ea9a97",
            "editor.lineHighlightBackground": "#2a273f",
            "editor.selectionBackground": "#44415a",
            "editor.inactiveSelectionBackground": "#393552",
            "editorIndentGuide.background": "#393552",
            "editorIndentGuide.activeBackground": "#6e6a86"
        },
        [
            { token: "comment", foreground: "6e6a86", fontStyle: "italic" },
            { token: "string", foreground: "f6c177" },
            { token: "number", foreground: "ea9a97" },
            { token: "keyword", foreground: "c4a7e7" },
            { token: "type", foreground: "9ccfd8" },
            { token: "function", foreground: "eb6f92" }
        ],
        "vs-dark"
    );

    registerTheme(
        RED,
        "rose-pine-dawn",
        ["style.css", "style-dawn.css"],
        {
            "editor.background": "#faf4ed",
            "editor.foreground": "#575279",
            "editorCursor.foreground": "#d7827e",
            "editor.lineHighlightBackground": "#fffaf3",
            "editor.selectionBackground": "#dfdad9",
            "editor.inactiveSelectionBackground": "#f2e9de",
            "editorIndentGuide.background": "#dfdad9",
            "editorIndentGuide.activeBackground": "#9893a5"
        },
        [
            { token: "comment", foreground: "9893a5", fontStyle: "italic" },
            { token: "string", foreground: "ea9d34" },
            { token: "number", foreground: "d7827e" },
            { token: "keyword", foreground: "907aa9" },
            { token: "type", foreground: "56949f" },
            { token: "function", foreground: "b4637a" }
        ],
        "vs"
    );
};
