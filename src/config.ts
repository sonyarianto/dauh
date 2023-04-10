import { name, version } from "../package.json";
import * as detector from "./detector";

export const appName = name;
export const appVersion = version;

export const cliPromises = [
  detector.getCliVersion({
    name: "PHP",
    command: "php -v",
    regex: /^PHP\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Docker",
    command: "docker -v",
    regex: /^Docker\s+version\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Docker Compose",
    command: "docker-compose -v",
    regex: /v(\d+\.\d+\.\d+)/,
  }),
  detector.getCliVersion({
    name: "npm",
    command: "npm -v",
    regex: /^(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Git",
    command: "git --version",
    regex: /^git\s+version\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Go",
    command: "go version",
    regex: /go(\d+\.\d+)/,
  }),
  detector.getCliVersion({
    name: "Java",
    command: "java --version",
    regex: /(\d+\.\d+\.\d+)/,
  }),
  detector.getCliVersion({
    name: "Yarn",
    command: "yarn --version",
    regex: /^(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Composer",
    command: "composer --version",
    regex: /^Composer\s+version\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Rust (rustup)",
    command: "rustup --version",
    regex: /^rustup\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Deno",
    command: "deno --version",
    regex: /^deno\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Bun",
    command: "bun --version",
    regex: /^(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Rust (cargo)",
    command: "cargo --version",
    regex: /^cargo\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Rust (rustc)",
    command: "rustc --version",
    regex: /^rustc\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Python",
    command: "python --version",
    regex: /^Python\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "gcc",
    command: "gcc --version",
    regex: /(\d+\.\d+\.\d+)(?=[^\d]*$)/m,
  }),
  detector.getCliVersion({
    name: "Ruby",
    command: "ruby --version",
    regex: /^ruby\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Node.js",
    command: "node -v",
    regex: /^v(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Visual Studio Code",
    command: "code --version",
    regex: /^(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "pnpm",
    command: "pnpm --version",
    regex: /^(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "PowerShell Core",
    command: "pwsh --version",
    regex: /^PowerShell\s+(\d+\.\d+\.\d+)/m,
  }),
  detector.getCliVersion({
    name: "Python (pip)",
    command: "pip --version",
    regex: /^pip\s+(\d+\.\d+\.\d+)/m,
  }),
];
