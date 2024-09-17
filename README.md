# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Prerequisites

- Mac OS
- IntelliJ IDEA, WebStorm or Visual Studio Code

## Installation
Install `HomeBrew`

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install `NVM` and `Node`

```shell
brew install nvm
nvm install node 22 (or >22)
nvm use 22
```

Install `pnpm`
```shell
corepack enable pnpm
corepack use pnpm@latest
```

## Run and Build

```shell
pnpm dev  # Run/Start
pnpm lint
pnpm build
```
