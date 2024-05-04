#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";
import inquirer from "inquirer";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const USER = "Yash";

async function welcomeUser() {
  const rainbowGreetingText = chalkAnimation.glitch(`Hi, ${USER} \n`);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  rainbowGreetingText.stop();

  console.log(`
  ${chalk.bgBlue("Colonel is a node CLI app")}
  `);
}

await welcomeUser();
