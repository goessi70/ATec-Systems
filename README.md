# ATec Systems

High-End Website für ATec Systems, Spezialist für professionelle Sicherheitsinstallationen wie Alarmanlagen, Brandschutz und Videoüberwachung mit Ajax Systems.

## Features

- **Modernes Design:** Responsive UI mit Tailwind CSS.
- **Mehrsprachigkeit:** Unterstützung für Deutsch (DE) und Englisch (EN).
- **Gemini Assistant:** Integrierter KI-Assistent zur Beantwortung von Kundenanfragen.
- **Dark Mode:** Unterstützung für helles und dunkles Farbschema.

## Technologien

- **Frontend:** React 19, TypeScript, Vite.
- **Styling:** Tailwind CSS, Lucide Icons (Font Awesome).
- **KI:** Google Gemini API (@google/genai).
- **Routing:** React Router DOM.

## Installation

1. Repository klonen:
   ```bash
   git clone <repository-url>
   cd atec-systems
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. Umgebungsvariablen konfigurieren:
   Erstellen Sie eine `.env` Datei basierend auf der `.env.example` und fügen Sie Ihren Gemini API Key hinzu:
   ```env
   GEMINI_API_KEY=Ihr_API_Key_Hier
   ```

4. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

5. Build für Produktion:
   ```bash
   npm run build
   ```

## Deployment (GitHub Pages & Custom Domain)

Dieses Projekt ist für das Hosting auf **GitHub Pages** mit der Domain **atec-systems.ch** vorkonfiguriert.

### 1. GitHub Einstellungen
- Gehen Sie in Ihrem Repository zu **Settings > Pages**.
- Wählen Sie unter "Build and deployment" > "Source" die Option **GitHub Actions**.
- Vite wird automatisch über eine GitHub Action gebaut und veröffentlicht (dafür muss ggf. ein Workflow-File erstellt werden, oder Sie nutzen den automatischen Export von AI Studio).

### 2. Custom Domain Konfiguration
Die Datei `public/CNAME` ist bereits mit `atec-systems.ch` erstellt.

### 3. DNS Einstellungen (bei Ihrem Registrar)
Damit die Domain auf GitHub verweist, müssen Sie folgende Records bei Ihrem Domain-Anbieter setzen:

**A-Records (GitHub IP-Adressen):**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME-Record (für www):**
- `www` -> `<ihr-username>.github.io`

## Lizenz

Dieses Projekt ist für ATec Systems erstellt worden. Alle Rechte vorbehalten.
