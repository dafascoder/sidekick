import fs from "fs";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { faker } from "@faker-js/faker";


// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const statuses = [
  { value: "available", label: "Available", icon: "AvailableIcon" },
  { value: "in_use", label: "In Use", icon: "InUseIcon" },
  { value: "maintenance", label: "Maintenance", icon: "MaintenanceIcon" },
  { value: "done", label: "Done", icon: "CheckCircledIcon" },
  { value: "canceled", label: "Canceled", icon: "CrossCircledIcon" },
];

const labels = [
  { value: "laptop", label: "Laptop" },
  { value: "desktop", label: "Desktop" },
  { value: "server", label: "Server" },
  { value: "network", label: "Network" },
];

let idCounter = 1;

const hardware = Array.from({ length: 100 }, () => ({
  id: idCounter++,
  title: faker.commerce.productName(),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  assignee: faker.person.fullName(),
  oktaUser: faker.internet.email(),
  kandjiUser: faker.internet.email(),
  kolideUser: faker.internet.email(),
}));

// Convert BigInt values to strings before serialization
const hardwareWithStringIds = hardware.map(item => ({
  ...item,
  id: item.id.toString(),
}));


fs.writeFileSync(
  path.join(__dirname, "hardware.json"),
  JSON.stringify(hardwareWithStringIds, null, 2)
);

console.log("✅ hardware data generated.");
