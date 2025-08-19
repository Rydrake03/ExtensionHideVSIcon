# Hide VS Code Icon

<p align="center">
  <img src="images/logo.png" alt="Hide VS Code Icon Logo" width="128" height="128">
</p>

A VS Code extension that hides the VS Code application icon from the top-left corner of the title bar.

## Features

- **Automatically hides** the VS Code icon on startup
- **Directly modifies** VS Code CSS files for permanent results
- **Simple commands** to hide, show, or toggle icon visibility
- **Compatible** with different themes and VS Code versions

## How it works

The extension modifies VS Code's CSS files to hide the application icon from the title bar, providing a cleaner interface.

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
