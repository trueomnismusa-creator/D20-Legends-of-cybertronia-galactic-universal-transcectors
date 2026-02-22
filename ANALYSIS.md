# D20 Legends of Cybertronia - Repository Analysis

## Project Overview
**Name:** Cybertronian Technical Manual  
**Description:** A comprehensive RPG companion and technical database for Transformers, featuring a retro FPS terminal aesthetic.  
**Type:** React + TypeScript + Vite application with Google Gemini AI integration  
**Live URL:** https://ai.studio/apps/e1931edd-02fb-4edd-afcb-382afac83ae3

---

## Repository Structure

### Configuration Files
- **metadata.json** - Project metadata and framework permissions
- **package.json** - NPM dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **vite.config.ts** - Vite bundler configuration
- **.env.example** - Environment variable template
- **.gitignore** - Git ignore rules
- **index.html** - HTML entry point
- **README.md** - Setup and deployment instructions

### Source Code
- **src/** - Source directory (TypeScript/React components)
  - **src/main.tsx** - Main application entry point

---

## Tech Stack

### Frontend
- **React** ^19.0.0 - UI framework
- **TypeScript** ~5.8.2 - Type safety
- **Vite** ^6.2.0 - Build tool
- **Tailwind CSS** ^4.1.14 - Utility-first styling
- **Lucide React** ^0.546.0 - Icon library
- **Motion** ^12.23.24 - Animation library

### Backend
- **Express** ^4.21.2 - Web server framework
- **Better SQLite3** ^12.4.1 - Lightweight database
- **Node.js** - Runtime environment

### AI Integration
- **Google Gemini API** (@google/genai ^1.29.0) - LLM capabilities
- **dotenv** ^17.2.3 - Environment variable management

### Development Tools
- **tsx** ^4.21.0 - TypeScript execution
- **Autoprefixer** ^10.4.21 - CSS vendor prefixing
- **TypeScript ESLint** - Type checking

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove dist folder |
| `npm run lint` | Run TypeScript type checking |

---

## Setup Instructions

### Prerequisites
- Node.js installed

### Local Development
1. Install dependencies: `npm install`
2. Set `GEMINI_API_KEY` in `.env.local` with your Gemini API key
3. Run development server: `npm run dev`
4. Access at `http://localhost:3000`

### Production Deployment
1. Build: `npm run build`
2. Output: `dist/` folder
3. Deploy to hosting platform

---

## Game System Integration

### Rules Foundation
- **1d20 + Modifiers** vs Target Numbers (10 + NPC modifiers)
- **Action Points** for rolls and class abilities
- **Wealth System** replacing traditional currency
- **Non-Lethal Damage** mechanics (-4 to hit)
- **Massive Damage** threshold system

### Character Classes
- **Base Classes**: Strong, Fast, Tough, Smart, Dedicated, Charismatic Heroes
- **Advanced Classes**: Techie (T-Cog specialist), Soldier (combat focused)

### Transformer Mechanics
- **Transformation System**: 1 move action, T-Cog checks if damaged
- **Alt-Mode**: High speed, limited dexterity
- **Robot-Mode**: Optimal for combat
- **Flyer Mechanics**: -3 AC penalty in alt-mode, +15ft aerial mobility
- **Suppression Action**: 20ft range pin mechanic

### Lore Elements
- **Origins**: Primus (Order) vs Unicron (Chaos)
- **Conflict**: Civil war over equality ideals
- **Human Interaction**: Suspicion, resentment, some sympathizers

---

## Data & Storage
- **SQLite Database**: Local lightweight database for game data
- **API Key Management**: Secure Gemini API integration via environment variables

---

## Project Status
- Framework: React + Vite (fully configured)
- Build Status: Ready for development
- Database: SQLite initialized
- AI Features: Google Gemini integration available
- Source Code: TypeScript support configured

---

## Next Steps for Development
1. Populate `src/main.tsx` with React components
2. Implement game system calculator/simulator
3. Build character sheet generator
4. Create NPC/monster database interface
5. Integrate Gemini AI for dynamic content generation
6. Add SQLite schema for game data persistence

---

*Analysis generated: 2026-02-22*