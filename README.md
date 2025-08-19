# Hide VS Code Icon

A VS Code extension that hides the VS Code application icon from the top-left corner of the title bar.

## Features

- **Automatically hides** the VS Code icon on startup
- **Directly modifies** VS Code CSS files for permanent results
- **Simple commands** to hide, show, or toggle icon visibility
- **Compatible** with different themes and VS Code versions

## How it works

The extension modifies VS Code's CSS files to hide the application icon from the title bar, providing a cleaner interface.

## Installation

1. Clone or download this repository
2. Open VS Code
3. Go to Extensions (Ctrl+Shift+X)
4. Click the three dots (...) and select "Install from VSIX..."
5. Select the extension's `.vsix` file

## Available Commands

- `Hide VS Code Icon` - Hides the icon
- `Show VS Code Icon` - Restores the icon

To use the commands:
1. Press `Ctrl+Shift+P` to open the Command Palette
2. Type one of the commands above

## Configuration

You can also control the icon visibility through VS Code settings:

1. Open Settings (Ctrl+,)
2. Search for "Hide VS Code Icon"
3. Toggle the "Enabled" checkbox
4. **Restart VS Code completely** to see the changes

## Important Notes

⚠️ **This extension modifies VS Code system files**

- You need to restart VS Code completely to see changes
- Changes might be overwritten during VS Code updates
- Administrator permissions might be required on some systems

## Project Structure

```
├── extension.js          # Main extension logic
├── package.json          # Extension configuration
├── media/
│   └── hide-appicon.css  # CSS rules to hide the icon
└── README.md             # This file
```

## Development

To contribute or modify the extension:

1. Clone the repository
2. Install dependencies: `npm install`
3. Open in VS Code
4. Press `F5` to launch a new VS Code window with the extension loaded

## Troubleshooting

### The icon is not hidden
- Restart VS Code completely
- Verify that the extension is activated
- Check write permissions in VS Code installation folder

### Permission errors
- Start VS Code as administrator (Windows) or with sudo (Linux/macOS)
- Verify that VS Code installation folder is writable

### Icon reappears after update
- This is normal: VS Code updates overwrite CSS files
- Reactivate the extension after each update

## License

MIT License - See LICENSE file for details.
