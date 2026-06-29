# Projects Technical Specification & PRD (Product Requirement Document)

This document provides a detailed technical breakdown, architectural overview, and technology stack description for the four featured projects integrated into the AI/ML Engineering Portfolio.

---

## 1. Neural Vision — Image Recognition

### Overview
A production-grade, real-time image recognition system designed to classify images with high accuracy. It features a deep Convolutional Neural Network (CNN) backend and an interactive web inference dashboard that allows users to upload images and visualize classification confidence scores in real-time.

### Key Objectives
*   Deliver low-latency inference (<100ms) for real-time applications.
*   Achieve high accuracy (96%+) on the target image dataset.
*   Provide clear visual insights (bounding boxes, heatmaps, confidence charts) to the frontend user.

### Architecture & Data Flow
```
[User Interface (React)] ────(Image Upload)────> [FastAPI Backend]
       ▲                                                 │
       │                                            (CV Preprocess)
       │                                                 ▼
[Confidence Charts & Visuals] <───(Inference)─── [PyTorch model (CNN)]
```

### Technology Stack & Justification
*   **PyTorch**: Used for building, training, and optimizing the Deep Convolutional Neural Network (CNN). PyTorch was selected for its dynamic computation graph and extensive support for computer vision transfer learning (ResNet/EfficientNet backbones).
*   **OpenCV**: Handles image pre-processing tasks (resizing, normalization, color space conversions, and image augmentation) before sending inputs to the model.
*   **FastAPI**: A high-performance Python web framework used to expose the model inference endpoint. It leverages asynchronous capabilities to handle multiple upload requests concurrently with minimal overhead.
*   **React**: Powers the interactive web dashboard, rendering confidence bar graphs and upload states smoothly.

---

## 2. NLP Assistant — Conversational AI

### Overview
A Retrieval-Augmented Generation (RAG) conversational agent capable of answering complex domain-specific questions by reference-searching an external knowledge base. It avoids generative hallucinations by supplying relevant document context to a Large Language Model (LLM) during prompt execution.

### Key Objectives
*   Connect conversational agents to custom PDF/text document databases.
*   Perform semantic search queries rather than basic keyword matching.
*   Maintain conversational state (memory) across multi-turn user sessions.

### Architecture & Data Flow
```
[User Chat Prompt] ───> [LangChain Orchestrator] ───(Embed Query)───> [Pinecone DB]
                              │                                            │
                       (Fetch Context) <────────(Semantic Match)───────────┘
                              ▼
                  [Contextualized Prompt] ───> [Transformer LLM] ───> [Streaming UI]
```

### Technology Stack & Justification
*   **Hugging Face Transformers**: Provides access to advanced pretrained Large Language Models (LLMs) and embedding models (e.g., MiniLM, Llama-based tokens).
*   **LangChain**: Orchestrates the RAG flow. It manages vector retrieval steps, formats conversational prompts, and handles the chat history buffer.
*   **Pinecone**: A fully managed cloud vector database used to store and query high-dimensional document embeddings with sub-millisecond search latencies.
*   **Next.js**: Serves the frontend, implementing a streaming chat interface (Vercel AI SDK style) for a responsive typing output.

---

## 3. Insight — Data Science Platform

### Overview
An automated data analysis platform designed to take raw CSV/database uploads, perform automated cleaning (handling missing values, identifying outliers), and generate interactive analytics dashboards along with automated forecasting predictions.

### Key Objectives
*   Democratize data science by automating exploratory data analysis (EDA).
*   Provide robust forecasting capabilities (regression/time-series modeling) for business metrics.
*   Render large datasets efficiently without lagging the client browser.

### Architecture & Data Flow
```
[Raw File Upload] ───> [Pandas Pipeline] ───> [Auto-ML Engine]
                             │                       │
                       (Data Cleaning)       (Time-Series Model)
                             ▼                       ▼
                      [Plotly Charts] <─── [Streamlit Dashboard]
```

### Technology Stack & Justification
*   **Pandas & NumPy**: The foundational engines for data manipulation. They perform tabular cleaning operations, statistical evaluations, and column transforms.
*   **Plotly**: Renders highly interactive graphs (scatter, distribution, correlation matrices) that allow users to hover, zoom, and filter data dynamically.
*   **PostgreSQL**: Serves as the relational storage layer for logging analysis runs, saving dataset summaries, and caching processed metrics.
*   **Streamlit**: Utilized for rapid application prototyping, exposing data controls (sliders, file drop zones, download buttons) in a Python-driven web dashboard.

---

## 4. MLOps Pipeline — Model Deployment

### Overview
A production-grade CI/CD and deployment pipeline that automates the model training cycle, tracks experiment metrics, registers champion models, packages them into containers, and deploys them to cloud environments with automated monitoring.

### Key Objectives
*   Eliminate manual model deployment handoffs.
*   Track experiments (parameters, loss curves, dataset versions) for auditability.
*   Deploy models inside isolated containers to ensure environment consistency.

### Architecture & Data Flow
```
[Git Commit] ───> [GitHub Actions] ───> [Run Tests & Train Model] ───> [MLflow Registry]
                                                                              │
[Model Endpoint (AWS ECS)] <─── [Docker Container] <──────(Package)───────────┘
```

### Technology Stack & Justification
*   **Docker**: Packages the model, serving server (e.g., Uvicorn/FastAPI), dependencies, and system configuration into a portable container image.
*   **MLflow**: Used for experiment tracking and model registration. It logs model parameters, metrics (accuracy, F1-score), and acts as a versioned artifact registry.
*   **AWS (ECS / ECR)**: Elastic Container Registry (ECR) hosts the Docker images, and Elastic Container Service (ECS) scales the container running the model endpoint.
*   **GitHub Actions**: Automates the CI/CD pipeline, running unit tests on every commit, triggering retraining runs, and pushing images to AWS.
