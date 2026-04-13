# Prince Kumar
kumarprince.7999@gmail.com | +91-9310631276 | linkedin.com/in/prince-kumar-39b444279 | github.com/Princekumar7999

## Achievements
- NTSE: Scored 148/200 in Stage-1, demonstrating strong aptitude in mathematics, science, and reasoning
- Hackathons & Open Source: Top 7 at Metadome.ai Emerging Tech Hackathon; 5+ merged PRs at AOSSIE; participated in multiple national hackathons
- Academic Excellence: District Topper (97.6%) in Class 10th; featured in Dainik Bhaskar and other newspapers

## Skills & Volunteering
### Technical Skills
- OOP, HTML5/CSS3, JavaScript, React.js
- Node.js, Express.js, MERN Stack, REST APIs
- Pandas, NumPy, TensorFlow, PyTorch
- Matplotlib, NLP, OpenCV, AI Engineering
- Docker, Linux, Shell Scripting
- MySQL, MongoDB, Data Engineering

### Volunteering & Leadership
- Nirmaan Organization
- APOGEE Campus Ambassador (BITS Pilani)
- BunchPot, Buildspace
- Cultural Club (Core Member)

## Experience
**Software Engineer - Urbanloop** (May 2025 - June 2025)
- Built a React Native (Expo) mobile app with OTP authentication and Redux-based state management
- Integrated real-time backend services, improving user engagement and responsiveness
- Optimized performance and implemented QR scanning and dynamic rewards system

**AI Developer - Pathik.ai** (December 2024 - February 2025)
- Developed an AI system to optimize Google Ads bidding strategies using historical data
- Trained a RAG-based model on diverse ad datasets for improved targeting
- Built using Flask, Python, and Google Auth; worked with Mistral, Llama 3.1, and Claude Sonnet

**Full Stack Developer - IntelliSurge Technologies** (March 2025 - July 2025)
- Developed scalable full-stack applications for AI-driven and data analytics solutions
- Built and integrated REST APIs, automated workflows, and optimized backend systems
- Contributed to AI/ML and big data solutions to enhance business intelligence capabilities

## Projects
**Autonomous DevOps Agent** (GitHub)
*CI/CD debugging and self-healing tool*
- Built a full-stack DevOps agent for autonomous CI/CD issue detection, fixing, and verification using FastAPI
- Designed a multi-agent workflow with Docker sandboxing, Git branch isolation, and live pipeline status streaming
- Implemented rule-based and LLM-driven debugging (Gemini, Pylint, Pytest) for syntax, lint, import, and logic errors

**Blood Report Test Analyzer** (GitHub)
*Health Insights*
- Automated blood test analysis using PDF extraction and AI models
- Built a multi-agent system for generating personalized health insights
- Developed UI using Streamlit with PyPDF2 and OpenAI GPT integration

**Chat App** (GitHub)
*Real-time messaging system*
- Built a real-time chat application improving communication and collaboration
- Increased engagement by 15% through optimized Firebase integration
- Technologies: JavaScript, Firebase

## Education
- **Birla Institute of Technology and Science, Pilani** (2027) - CGPA: 7.5
- **Scaler School of Technology** (2027) - CGR: 6.2


# Project Github Repository: blood_report_test

📜 Description
The Blood Report Test Analyzer is a sophisticated system designed to analyze blood test reports using cutting-edge technologies. It combines PDF extraction, generative AI, and a multi-agent system to provide detailed health insights and personalized recommendations. The tool is ideal for users seeking quick and accurate health analyses based on their blood test results.

🚀 Features
PDF Extraction: Parses and extracts data from blood test reports in PDF format.
Generative AI Health Insights: Leverages AI to interpret test results and generate insights.
Multi-Agent System: Combines agents for:
Blood test analysis.
Researching relevant health articles.
Providing personalized health recommendations.
User-Friendly Interface: Easy-to-use and intuitive design for seamless interaction.
🛠️ Technologies Used
Frontend: Streamlit
Backend: Python
Libraries: PyPDF2, openai, pandas, etc.
AI Models: OpenAI GPT API (or other generative AI models)
Multi-Agent Framework: Custom-built or an existing agent framework.


# Project Github Repository: chat_app

404: Not Found

# Project Github Repository: ci-cd-detecting-agent

# Autonomous DevOps Agent (RIFT 2026 Hackathon)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/frontend-React-blue)
![Python](https://img.shields.io/badge/backend-FastAPI-green)

An autonomous AI agent that detects, fixes, and verifies code issues in CI/CD pipelines. 
---


---

## 🏗 Architecture

The system follows a multi-agent architecture with a React frontend and Python/FastAPI backend using LangGraph.

```mermaid
graph TD
    User[User via React Dashboard] -->|Repo URL + Team Info| API[FastAPI Backend]
    API -->|Trigger| Agent[DevOps Agent Graph]
    
    subgraph "Agent Workflow (Sandboxed)"
        Clone[Clone Repo] --> Analysis[Analyze Code (Lint/Test)]
        Analysis -->|Failures Detected| Fixer[AI Fixer Agent]
        Fixer -->|Generate Fix| Applier[Apply Fix & Commit]
        Applier -->|Push Branch| Remote[GitHub Repo]
        Applier -->|Re-run| Analysis
    end
    
    Agent -->|Stream Status| Dashboard[React Dashboard]
```

## ✨ Features

- **Autonomous Healing**: Detects Syntax, Linting, Import, and Logic errors.
- **Sandboxed Execution**: Runs tests in a safe Docker environment.
- **Real-time Dashboard**: Visualizes the fix process, score, and timeline.
- **Smart Branching**: Creates branches in the required format `TEAM_NAME_LEADER_NAME_AI_Fix`.
- **Deterministic & AI Fixes**: Uses both rule-based and LLM-based fixing strategies.

## 🛠 Tech Stack

- **Frontend**: React (Vite), TailwindCSS, Lucide Icons
- **Backend**: Python (FastAPI), LangGraph, LangChain, Google Gemini (LLM)
- **Tools**: Docker, GitPython, Pylint, Pytest

## 📦 Installation & Setup

### Prerequisites
- Python 3.9+
- Node.js 18+
- Docker (Running)
- Google Cloud API Key (for LLM)

### Backend Setup
1.  Navigate to `backend`:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3.  Set Environment Variables:
    ```bash
    export GOOGLE_API_KEY="your_api_key_here"
    ```
4.  Run the server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup
1.  Navigate to `frontend`:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## 🐛 Supported Bug Types

The agent can currently detect and fix:
1.  **SYNTAX**: Missing colons, indentation errors.
2.  **LINTING**: Unused imports, missing docstrings.
3.  **IMPORT**: `ModuleNotFoundError` or `ImportError`.
4.  **LOGIC**: Test failures (via pytest output analysis).
5.  **TYPE_ERROR**: Basic type mismatches (if caught by linter).

## ⚠️ Known Limitations

-   **Docker Dependency**: The host machine must have Docker running for sandboxed test execution.
-   **LLM Rate Limits**: Heavy usage may hit Gemini API rate limits (retry logic is implemented).
-   **Complex Logic**: Deep architectural bugs may require human intervention.


