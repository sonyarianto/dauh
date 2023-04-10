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
        reject(new Error(`${cli.name} CLI does not exist`));
        return;
      }

      const match = stdout.match(cli.regex);
      if (match) {
        const version = match[1];
        resolve({ version, cli: cli.command, name: cli.name });
      } else {
        reject(new Error(`Unable to retrieve ${cli.name} CLI version`));
      }
    });
  });
}
