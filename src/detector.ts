import { exec } from "child_process";

interface Cli {
  name: string;
  command: string;
  regex: RegExp;
}

export function getCliVersion(cli: Cli) {
  return new Promise((resolve, reject) => {
    exec(cli.command, (error, stdout, stderr) => {
      if (error) {
        // The CLI command does not exist
        reject(new Error(`${cli.name} CLI does not exist`));
        return;
      }

      // Extract the CLI version from the command output
      const match = stdout.match(cli.regex);
      if (match) {
        // The CLI version was found
        const version = match[1];
        resolve({ version, cli: cli.command, name: cli.name });
      } else {
        // The CLI command exists but the version could not be retrieved
        reject(new Error(`Unable to retrieve ${cli.name} CLI version`));
      }
    });
  });
}

export function getNodeJsVersion() {
  const version = process.version.startsWith("v")
    ? process.version.slice(1)
    : process.version;
  const cli = "node -v";

  return { version, cli };
}
