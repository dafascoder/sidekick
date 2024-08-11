import fs from "fs";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { faker } from "@faker-js/faker";
import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"


// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]


export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

const hardware = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  status: faker.helpers.arrayElement(statuses),
  label: faker.helpers.arrayElement(labels),
  assignee: faker.person.fullName(),
  oktaUser: faker.internet.userName(),
  kandjiUser: faker.internet.userName(),
  kolideUser: faker.internet.userName(),
}));

fs.writeFileSync(
  path.join(__dirname, "hardware.json"),
  JSON.stringify(hardware, null, 2)
);

console.log("✅ hardware data generated.");
