setup:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
	. $(HOME)/.nvm/nvm.sh && nvm install node 22 && nvm use 22

	corepack enable pnpm && corepack use pnpm
