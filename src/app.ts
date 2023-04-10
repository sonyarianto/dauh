import Table from "cli-table";
import { cliPromises } from "./config";

export function detect() {
  const table = new Table({
    head: ["Name", "Version", "CLI"],
    style: {
      compact: true,
      head: ["cyan"],
    },
  });

  interface Version {
    name: string;
    version: string;
    cli: string;
  }

  Promise.allSettled(cliPromises).then((results) => {
    const detections = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => ({
        name: (result as PromiseFulfilledResult<Version>).value.name,
        version: (result as PromiseFulfilledResult<Version>).value.version,
        cli: (result as PromiseFulfilledResult<Version>).value.cli,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    detections.forEach((row) => {
      table.push([
        row.name as string,
        row.version as string,
        row.cli as string,
      ]);
    });

    console.log(table.toString());
  });
}
