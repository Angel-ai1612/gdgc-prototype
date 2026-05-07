# SpoProof — Sports Media Verification

SpoProof is an AI-powered forensic platform designed to verify the authenticity of sports media. In an era of viral deepfakes and doctored clips, SpoProof provides the tools to confirm sources, detect tampering, and protect digital sports content.

## 🚀 Features

- **Instant Authenticity Verification**: Upload sports media (images, videos, screenshots) and receive a comprehensive trust score based on pixel patterns, compression artifacts, and metadata integrity.
- **Deepfake & Tamper Detection**: Forensic-grade precision in identifying doctored images, deepfake videos, and spliced frames.
- **Ownership Protection**: Issue verifiable certificates and track asset distribution to defend against unauthorized usage.
- **Real-time Alerts**: Get notified when suspicious sports content starts trending across social platforms.
- **Global Source Cross-referencing**: Cross-reference media against global databases and verified source archives to confirm origin and context accuracy.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & JavaScript (JSX)
- **Styling**: Standard CSS with a focus on modern, responsive design.

## 📂 Project Structure

```text
.
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and SVG assets
│   ├── components/      # Reusable UI components (e.g., AppLayout)
│   ├── pages/           # Application pages (Dashboard, Verify, Results, etc.)
│   ├── App.jsx          # Main application component and routing configuration
│   ├── main.jsx         # React entry point
│   ├── main.ts          # TypeScript entry point
│   ├── counter.ts       # TypeScript utility
│   ├── index.css        # Global styles and variables
│   └── style.css        # Additional styles
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd spo-proof
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Create a production-ready build:
```bash
npm run build
```

## 📖 Usage

1. **Dashboard**: View an overview of your verification activity and recent alerts.
2. **Verify**: Upload a file or paste a URL to start the forensic analysis.
3. **Results**: Review detailed reports on media integrity and tamper risk.
4. **Certificates**: Access and download verification certificates for your authenticated media.

---

Built with ❤️ for the sports community.
