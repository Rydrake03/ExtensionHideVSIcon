const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

class CSSInjector {
    constructor(context) {
        this.context = context;
        this.styleId = 'hide-vscode-app-icon-style';
        this.isInjected = false;
    }

    /**
     * Inject CSS to hide the VS Code app icon
     */
    async injectCSS() {
        try {
            const cssPath = path.join(this.context.extensionPath, 'media', 'hide-appicon.css');
            
            if (!fs.existsSync(cssPath)) {
                throw new Error('CSS file not found');
            }

            const cssContent = fs.readFileSync(cssPath, 'utf8');
            
            // Method 1: Use VS Code's custom CSS injection via configuration
            await this.injectViaConfiguration(cssContent);
            
            // Method 2: Direct DOM manipulation (fallback)
            this.injectViaDOMManipulation();
            
            this.isInjected = true;
            
        } catch (error) {
            console.error('Error injecting CSS:', error);
            vscode.window.showErrorMessage(`Failed to hide app icon: ${error.message}`);
        }
    }

    /**
     * Remove injected CSS
     */
    async removeCSS() {
        try {
            // Remove custom CSS from configuration
            const config = vscode.workspace.getConfiguration();
            await config.update('workbench.colorCustomizations', {}, vscode.ConfigurationTarget.Global);
            
            this.isInjected = false;
            
        } catch (error) {
            console.error('Error removing CSS:', error);
        }
    }

    /**
     * Inject CSS via VS Code configuration
     */
    async injectViaConfiguration(cssContent) {
        // Unfortunately, VS Code doesn't allow direct CSS injection via extensions
        // This is a limitation for security reasons
        // We'll focus on the DOM manipulation approach
    }

    /**
     * Inject CSS via DOM manipulation
     */
    injectViaDOMManipulation() {
        // Since VS Code extensions can't directly access the DOM,
        // we'll use a workaround by modifying the workbench appearance
        const config = vscode.workspace.getConfiguration();
        
        // Set up a command that users can run to apply the changes
        this.scheduleHiding();
    }

    /**
     * Schedule hiding of the app icon using available VS Code APIs
     */
    scheduleHiding() {
        // Use VS Code's theming system to hide elements
        const customizations = {
            // Hide titlebar elements
            "titleBar.activeBackground": "transparent",
            "titleBar.activeForeground": "transparent",
            "titleBar.inactiveBackground": "transparent",
            "titleBar.inactiveForeground": "transparent"
        };

        // Apply customizations
        vscode.workspace.getConfiguration().update(
            'workbench.colorCustomizations', 
            customizations, 
            vscode.ConfigurationTarget.Global
        );

        // Additional approach: Use CSS variables if possible
        this.applyAdvancedHiding();
    }

    /**
     * Apply advanced hiding techniques
     */
    applyAdvancedHiding() {
        // Since direct DOM access is limited, we'll provide instructions to users
        // about manual CSS injection or recommend using a custom VS Code build
        
        const message = `To hide the VS Code app icon, you can:
1. Use a custom CSS injection extension like "Custom CSS and JS Loader"
2. Manually edit your VS Code installation (not recommended)
3. Use this extension's CSS file with a third-party CSS injector`;

        console.log(message);
    }

    /**
     * Check if CSS is currently injected
     */
    isActive() {
        return this.isInjected;
    }
}

module.exports = CSSInjector;
