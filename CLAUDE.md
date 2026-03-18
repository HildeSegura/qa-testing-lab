# CLAUDE.md — AI Assistant Guide for qa-testing-lab

## Repository Overview

**qa-testing-lab** is a QA testing lab designed for AI demos and automated testing experiments. It serves as a sandbox environment for exploring AI-assisted development workflows, QA automation patterns, and demo scenarios.

- **Owner:** HildeSegura
- **Primary language:** TBD (repository is in early stage)
- **Purpose:** QA testing laboratory for AI demos

---

## Repository Structure

```
qa-testing-lab/
├── README.md        # Project overview
└── CLAUDE.md        # This file — AI assistant guide
```

> The repository is currently in its initial state. As code is added, this section should be updated to reflect the actual directory structure and purpose of each component.

---

## Development Workflow

### Branching Convention

- **Main branch:** `main` (protected)
- **Feature branches:** `claude/<description>-<id>` for AI-driven changes
- **All changes** must be developed on a feature branch and pushed before opening a PR

### Git Workflow

```bash
# Create a feature branch
git checkout -b claude/<short-description>-<session-id>

# Make changes, then commit
git add <files>
git commit -m "feat: describe what was done"

# Push the branch
git push -u origin claude/<short-description>-<session-id>
```

### Commit Message Convention

Use conventional commits format:

| Prefix | When to use |
|--------|-------------|
| `feat:` | New feature or capability |
| `fix:` | Bug fix |
| `test:` | Adding or updating tests |
| `docs:` | Documentation changes only |
| `chore:` | Maintenance, tooling, config |
| `refactor:` | Code restructuring without behavior change |

Examples:
```
feat: add login flow smoke tests
fix: correct assertion in checkout test
docs: update CLAUDE.md with test structure
```

---

## Key Conventions for AI Assistants

### General Principles

1. **Read before editing.** Always read a file before modifying it to understand context.
2. **Minimal changes.** Only change what is necessary for the task. Do not refactor surrounding code unless asked.
3. **No speculative additions.** Do not add error handling, comments, types, or utilities not explicitly requested.
4. **Avoid over-engineering.** Prefer the simplest working solution.

### File Management

- Do not create new files unless the task explicitly requires them.
- Prefer editing existing files over creating new ones.
- Never create documentation files (e.g., `*.md`) unless asked.

### Security

- Never introduce SQL injection, command injection, XSS, or other OWASP top-10 vulnerabilities.
- Do not hardcode credentials, secrets, or API keys in source files.
- Validate inputs only at system boundaries (user input, external APIs).

### Testing

- Place tests alongside or in a dedicated `tests/` directory (establish convention when first tests are added).
- Tests should be deterministic and not depend on external services unless explicitly integration tests.
- Name test files to mirror the module under test (e.g., `test_login.py` for `login.py`).

---

## AI Demo Context

This repository is intended to demonstrate AI-assisted QA workflows. When adding demos:

- Keep demo scripts self-contained and runnable independently.
- Document expected inputs, outputs, and any required setup in a comment block at the top of each demo file.
- Prefer lightweight dependencies to keep the environment portable.

---

## Getting Started (Template)

> Update this section once the project has a defined tech stack and setup steps.

```bash
# Clone the repository
git clone https://github.com/HildeSegura/qa-testing-lab.git
cd qa-testing-lab

# Install dependencies (update when applicable)
# e.g., pip install -r requirements.txt
#       npm install

# Run tests (update when applicable)
# e.g., pytest
#       npm test
```

---

## Updating This File

When the codebase evolves, keep CLAUDE.md current by updating:

- **Repository Structure** — whenever directories or major files are added
- **Getting Started** — when a tech stack or setup process is established
- **Testing** — when a test framework is chosen and conventions are set
- **Key Conventions** — if project-specific patterns emerge

This file is the primary reference for AI assistants working in this repository.
