# hide-v# Hide VS Code Icon

Un'estensione per VS Code che nasconde l'icona dell'applicazione VS Code in alto a sinistra nella barra del titolo.

## Funzionalità

- **Nasconde automaticamente** l'icona di VS Code all'avvio
- **Modifica direttamente** i file CSS di VS Code per un risultato permanente
- **Comandi semplici** per nascondere, mostrare o alternare la visibilità dell'icona
- **Compatibile** con diversi temi e versioni di VS Code

## Come funziona

L'estensione utilizza due metodi per nascondere l'icona:

1. **Metodo principale**: Modifica direttamente il file CSS principale di VS Code (`workbench.desktop.main.css`)
2. **Metodo di fallback**: Usa webview per iniettare CSS quando non è possibile modificare i file di sistema

## Installazione

1. Clona o scarica questa repository
2. Apri VS Code
3. Vai in Extensions (Ctrl+Shift+X)
4. Clicca sui tre puntini (...) e seleziona "Install from VSIX..."
5. Seleziona il file `.vsix` dell'estensione

## Comandi disponibili

- `Nascondi Icona VS Code` - Nasconde l'icona
- `Mostra Icona VS Code` - Ripristina l'icona  
- `Alterna Icona VS Code` - Alterna la visibilità

Per usare i comandi:
1. Premi `Ctrl+Shift+P` per aprire la Command Palette
2. Digita uno dei comandi sopra

## Note importanti

⚠️ **Questa estensione modifica i file di sistema di VS Code**

- Potrebbe essere necessario riavviare VS Code per vedere le modifiche
- Le modifiche potrebbero essere sovrascritte durante gli aggiornamenti di VS Code
- Su alcuni sistemi potrebbero essere richiesti permessi di amministratore

## Struttura del progetto

```
├── extension.js          # Logica principale dell'estensione
├── package.json          # Configurazione dell'estensione
├── media/
│   └── hide-appicon.css  # Regole CSS per nascondere l'icona
└── README.md             # Questo file
```

## Sviluppo

Per contribuire o modificare l'estensione:

1. Clona la repository
2. Installa le dipendenze: `npm install`
3. Apri in VS Code
4. Premi `F5` per avviare una nuova finestra di VS Code con l'estensione caricata

## Risoluzione problemi

### L'icona non viene nascosta
- Riavvia VS Code completamente
- Verifica che l'estensione sia attivata
- Controlla i permessi di scrittura nella cartella di installazione di VS Code

### Errori di permessi
- Avvia VS Code come amministratore (Windows) o con sudo (Linux/macOS)
- Verifica che la cartella di installazione di VS Code sia scrivibile

### L'icona riappare dopo un aggiornamento
- Questo è normale: gli aggiornamenti di VS Code sovrascrivono i file CSS
- Riattiva l'estensione dopo ogni aggiornamento

## Licenza

MIT License - Vedi LICENSE file per dettagli.
