<a href="https://paypal.me/sonyarianto" target="_blank">
 <img alt="Sponsor" src="https://img.shields.io/badge/donate-Paypal-fd8200.svg" />
</a>
<a href="https://github.com/sponsors/sonyarianto" target="_blank">
  <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/sonyarianto">
</a>
<a href="https://discord.gg/NKGyecYe" target="_blank">
  <img alt="Discord" src="https://img.shields.io/discord/1089563520988893306">
</a>
<a href="https://www.npmjs.com/package/dauh" target="_blank">
 <img alt="npm" src="https://img.shields.io/npm/dt/dauh">
</a>
<a href="https://www.npmjs.com/package/dauh" target="_blank">
 <img alt="npm" src="https://img.shields.io/npm/v/dauh">
</a>

# dauh

Detect well-known CLI on your computer. Is PHP exists? Is Node.js exists? and many more, along with its version. This tool is like a quick checkup of several well-known CLI.

## Installation

Install it globally

```bash
npm i -g dauh
```

now you can call it by typing `dauh` in your terminal.

## Screenshot

![Dauh](https://raw.githubusercontent.com/sonyarianto/dauh/main/dauh-0.1.0.jpg?202304102100)

## FAQs

- **How to update?** Just run `npm i -g dauh@latest` and your installation will be updated to the latest version.
- **How it works?** This tool basically just opinionated aggregator of  "get version" for each well-known cli, e.g. we detect availability of npm by triggering `npm -v`.
- **I want to add missing cli, can I?** Just open `src/config.ts` and add there. Test it by running `npx jiti ./src/index.ts` and pull request if you are confident.

## License

MIT

Copyright &copy; 2023 Sony Arianto Kurniawan <<sony@sony-ak.com>> and contributors.
