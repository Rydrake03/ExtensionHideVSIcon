# Change Log

Tutte le modifiche significative a questo progetto saranno documentate in questo file.

## [1.0.0] - 2025-08-19

### Aggiunto
- ✨ **Funzionalità principale**: Nasconde l'icona di VS Code in alto a sinistra
- 🔧 **Metodo diretto**: Modifica i file CSS di VS Code per un risultato permanente
- 🎯 **Comandi specifici**: 
  - `Nascondi Icona VS Code` - Nasconde l'icona
  - `Mostra Icona VS Code` - Ripristina l'icona
  - `Alterna Icona VS Code` - Alterna la visibilità
- 🔄 **Attivazione automatica**: L'icona viene nascosta automaticamente all'avvio
- 🛡️ **Metodo di fallback**: Usa webview quando non è possibile modificare i file di sistema
- 📱 **Compatibilità multi-piattaforma**: Supporta Windows, macOS e Linux
- 🎨 **Supporto temi**: Compatibile con tutti i temi di VS Code
- 📦 **Installazione semplice**: Pacchetto VSIX pronto per l'installazione

### Tecnico
- Eventi di attivazione ottimizzati (`onStartupFinished` invece di `*`)
- CSS specifico per diverse versioni e configurazioni di VS Code
- Gestione errori robusta con messaggi informativi
- Ricerca automatica del percorso di installazione di VS Code

## [Unreleased]

### In programma
- Opzioni di configurazione utente
- Interfaccia grafica per gestire le impostazioni
- Backup automatico dei file CSS originali
- Ripristino automatico dopo aggiornamenti di VS Code