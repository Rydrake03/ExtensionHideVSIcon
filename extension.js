const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

let isExtensionActive = false;

/**
 * Activates the extension
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
    console.log('HideVsIcon extension is now active!');
    isExtensionActive = true;
    
    // Register commands
    const hideCommand = vscode.commands.registerCommand('hidevsicon.hide', () => {
        hideVSCodeIcon();
    });
    
    const showCommand = vscode.commands.registerCommand('hidevsicon.show', () => {
        showVSCodeIcon();
    });

    // Listener for configuration changes
    const configListener = vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('hideVSCodeIcon.enabled')) {
            updateIconVisibility();
        }
    });
    
    context.subscriptions.push(hideCommand, showCommand, configListener);
    
    // Apply initial state
    setTimeout(() => {
        if (isExtensionActive) {
            updateIconVisibility();
        }
    }, 1000);
}

/**
 * Hides the VS Code icon by setting the configuration
 */
function hideVSCodeIcon() {
    const config = vscode.workspace.getConfiguration('hideVSCodeIcon');
    config.update('enabled', true, vscode.ConfigurationTarget.Global).then(() => {
        vscode.window.showInformationMessage(
            'VS Code icon hidden! Close VS Code completely and reopen it to see the changes.',
            'OK'
        );
    });
}

/**
 * Shows the VS Code icon by setting the configuration
 */
function showVSCodeIcon() {
    const config = vscode.workspace.getConfiguration('hideVSCodeIcon');
    config.update('enabled', false, vscode.ConfigurationTarget.Global).then(() => {
        vscode.window.showInformationMessage(
            'VS Code icon restored! Close VS Code completely and reopen it to see the changes.',
            'OK'
        );
    });
}

/**
 * Updates icon visibility based on settings
 */
function updateIconVisibility() {
    const config = vscode.workspace.getConfiguration('hideVSCodeIcon');
    const shouldHide = config.get('enabled', false);
    
    try {
        if (shouldHide) {
            injectHideCSS();
        } else {
            removeHideCSS();
        }
    } catch (error) {
        console.error('Error updating icon visibility:', error);
    }
}

/**
 * Injects CSS to hide the icon based on configuration
 */
function injectHideCSS() {
    try {
        const vscodePath = getVSCodeInstallPath();
        if (!vscodePath) {
            console.log('VS Code path not found');
            return false;
        }
        
        const cssPath = path.join(vscodePath, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.css');
        
        if (!fs.existsSync(cssPath)) {
            console.log(`CSS file not found: ${cssPath}`);
            return false;
        }
        
        let cssContent = fs.readFileSync(cssPath, 'utf8');
        
        // CSS rule to hide the icon
        const hideIconCSS = `
/* HideVsIcon Extension - DO NOT EDIT */
.monaco-workbench .part.titlebar .window-appicon,
.monaco-workbench .part.titlebar > .titlebar-container > .titlebar-left > .window-appicon,
.monaco-workbench .part.titlebar .titlebar-left .window-appicon,
.window-appicon:not(.codicon),
.titlebar-left .window-appicon,
.part.titlebar .window-appicon,
.monaco-workbench .window-appicon,
.titlebar-container .window-appicon,
div.window-appicon {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    width: 0px !important;
    height: 0px !important;
    margin: 0px !important;
    padding: 0px !important;
}
.monaco-workbench .part.titlebar .titlebar-left {
    padding-left: 8px !important;
}
/* HideVsIcon Extension - END */`;

        // Remove existing CSS
        const regex = /\/\* HideVsIcon Extension - DO NOT EDIT \*\/[\s\S]*?\/\* HideVsIcon Extension - END \*\//g;
        cssContent = cssContent.replace(regex, '');
        
        // Add new CSS
        cssContent += hideIconCSS;
        
        // Write file
        fs.writeFileSync(cssPath, cssContent, 'utf8');
        console.log('CSS to hide icon added');
        
        return true;
        
    } catch (error) {
        console.error('Error injecting CSS:', error);
        return false;
    }
}

/**
 * Removes the CSS that hides the icon
 */
function removeHideCSS() {
    try {
        const vscodePath = getVSCodeInstallPath();
        if (!vscodePath) {
            return true;
        }

        const cssPath = path.join(vscodePath, 'resources', 'app', 'out', 'vs', 'workbench', 'workbench.desktop.main.css');

        if (!fs.existsSync(cssPath)) {
            return true;
        }

        let cssContent = fs.readFileSync(cssPath, 'utf8');

        // Remove the extension's CSS block
        const regex = /\/\* HideVsIcon Extension - DO NOT EDIT \*\/[\s\S]*?\/\* HideVsIcon Extension - END \*\//g;
        const newContent = cssContent.replace(regex, '');

        if (newContent !== cssContent) {
            fs.writeFileSync(cssPath, newContent, 'utf8');
            console.log('CSS to hide icon removed');
        }

        return true;

    } catch (error) {
        console.error('Error removing CSS:', error);
        return false;
    }
}

/**
 * Finds the VS Code installation path
 */
function getVSCodeInstallPath() {
    const possiblePaths = [
        // Windows - most common paths
        path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Microsoft VS Code'),
        'C:\\Program Files\\Microsoft VS Code',
        'C:\\Program Files (x86)\\Microsoft VS Code',
        path.join(process.env.USERPROFILE || '', 'AppData', 'Local', 'Programs', 'Microsoft VS Code'),
        
        // macOS
        '/Applications/Visual Studio Code.app/Contents',
        
        // Linux
        '/usr/share/code',
        '/opt/visual-studio-code',
        '/snap/code/current'
    ];
    
    for (const possiblePath of possiblePaths) {
        if (possiblePath && fs.existsSync(possiblePath)) {
            const resourcesPath = path.join(possiblePath, 'resources');
            if (fs.existsSync(resourcesPath)) {
                console.log(`Found VS Code path: ${possiblePath}`);
                return possiblePath;
            }
        }
    }
    
    console.log('VS Code installation path not found');
    return null;
}

/**
 * Deactivates the extension
 */
function deactivate() {
    isExtensionActive = false;
    console.log('HideVsIcon extension deactivated');
}

module.exports = {
    activate,
    deactivate
};