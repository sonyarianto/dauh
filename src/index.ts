#! /usr/bin/env node

import color from "picocolors";
import { appName, appVersion } from "./config";
import { cli } from "cleye";
import { detect } from "./app";

async function main() {
  const _ = cli({
    name: appName,
    version: appVersion,
  });

  console.log(`${color.bgBlue(color.white(` ${appName} `))}`);
  console.log(`\nTools that are installed on your system:`);

  detect();
}

main();
