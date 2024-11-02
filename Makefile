setup:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
	. $(HOME)/.nvm/nvm.sh && nvm install --lts && nvm use --lts

	corepack enable pnpm && corepack use pnpm@^9.12.0
