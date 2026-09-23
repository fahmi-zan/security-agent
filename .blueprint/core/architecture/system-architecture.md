---
id: arch-system
title: System Architecture
owner: system-architect
status: active
version: 1.0.0
depends_on: []
generates: [implementation]
reviewers: [validation-engine]
last_updated: 2026-09-24
tags: [architecture, core]
---

# System Architecture

## Overview
Security Secure System AI Agent is a standalone security engineering AI agent for discovery, threat modeling, SAST, dependency analysis, secrets scanning, AI reasoning, remediation, and verification.

## C4 Context Diagram

```mermaid
C4Context
  title System Context
  Person(user, "Security/Software Engineer", "Runs the agent")
  System(agent, "Security AI Agent", "Analyzes codebase, models threats, verifies security")
  System_Ext(llm, "LLM API", "Provides security reasoning")
  System_Ext(target, "Target Application", "Source code and environment being audited")
  
  Rel(user, agent, "Executes via CLI")
  Rel(agent, target, "Discovers, scans, and tests")
  Rel(agent, llm, "Requests reasoning and remediation")
```

## C4 Container Diagram

```mermaid
C4Container
  title Container Diagram
  Container(cli, "CLI Interface", "Commander.js", "Handles user commands")
  Container(discovery, "Discovery Engine", "TypeScript", "Identifies stack and assets")
  Container(scanners, "Scanner Engine", "Execa", "Runs Semgrep, Gitleaks, etc.")
  Container(ai, "Security Engine", "LLM", "Reasons over findings and evidence")
  Container(remediation, "Remediation Engine", "TypeScript", "Generates fixes")
  
  Rel(cli, discovery, "Initiates audit")
  Rel(discovery, scanners, "Dispatches scanners based on stack")
  Rel(scanners, ai, "Feeds evidence")
  Rel(ai, remediation, "Proposes fixes")
```
