import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import picocolors from "picocolors";
const { bgCyan, black, blue, bold, cyan, green, red, yellow } = picocolors;
import { install } from "./installer.js";
import { gitInit } from "./git.js";
import { copyCore, copyFeature, copySharedFeature, copyApp } from "./copier.js";
import {
  mergeTurboJson,
  mergeEnvExample,
  createEnvProduction,
} from "./merger.js";
import {
  loadAllManifests,
  resolveDependencies,
  collectDependencies,
  collectEnvVars,
} from "./resolver.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, "..", "templates");

interface GenerateOptions {
  name: string;
  preset?: string;
  apps?: string;
  features?: string;
  git?: boolean;
  install?: boolean;
}

async function logStep(message: string): Promise<void> {
  console.log(`\n${bgCyan(black(" STEP "))} ${cyan(message)}`);
}

async function logSuccess(message: string): Promise<void> {
  console.log(`\n${bgCyan(black(" DONE "))} ${green(message)}`);
}

async function logInfo(message: string): Promise<void> {
  console.log(`\n${blue(" INFO ")} ${message}`);
}

async function printBanner(): Promise<void> {
  console.log(`
${bold(blue("╔══════════════════════════════════════════════════════════╗"))}
${bold(blue("║"))}  ${bold(cyan("Apsara DevKit"))} - Modular Project Generator          ${bold(blue("║"))}
${bold(blue("║"))}  ${cyan("Create customizable web applications with ease")}   ${bold(blue("║"))}
${bold(blue("╚══════════════════════════════════════════════════════════╝"))}
  `);
}

function getWebPackageJson(
  dependencies: string[],
  devDependencies: string[],
): object {
  return {
    name: "web",
    version: "0.1.0",
    private: true,
    scripts: {
      build: "next build",
      dev: "next dev -p 1111",
      lint: "next lint",
      start: "next start",
      typecheck: "tsc --noEmit",
    },
    dependencies: {
      "@workspace/ui": "file:../../packages/ui",
      "@hookform/resolvers": "^3.10.0",
      "@radix-ui/react-accordion": "^1.2.2",
      "@radix-ui/react-alert-dialog": "^1.1.4",
      "@radix-ui/react-aspect-ratio": "^1.1.1",
      "@radix-ui/react-avatar": "^1.1.2",
      "@radix-ui/react-checkbox": "^1.1.3",
      "@radix-ui/react-collapsible": "^1.1.2",
      "@radix-ui/react-context-menu": "^2.2.4",
      "@radix-ui/react-dialog": "^1.1.4",
      "@radix-ui/react-dropdown-menu": "^2.1.4",
      "@radix-ui/react-hover-card": "^1.1.4",
      "@radix-ui/react-label": "^2.1.1",
      "@radix-ui/react-menubar": "^1.1.4",
      "@radix-ui/react-navigation-menu": "^1.2.3",
      "@radix-ui/react-popover": "^1.1.4",
      "@radix-ui/react-progress": "^1.1.1",
      "@radix-ui/react-radio-group": "^1.2.2",
      "@radix-ui/react-scroll-area": "^1.2.2",
      "@radix-ui/react-select": "^2.1.4",
      "@radix-ui/react-separator": "^1.1.1",
      "@radix-ui/react-slider": "^1.2.2",
      "@radix-ui/react-slot": "^1.1.1",
      "@radix-ui/react-switch": "^1.1.2",
      "@radix-ui/react-tabs": "^1.1.2",
      "@radix-ui/react-toast": "^1.2.4",
      "@radix-ui/react-toggle": "^1.1.1",
      "@radix-ui/react-toggle-group": "^1.1.1",
      "@radix-ui/react-tooltip": "^1.1.6",
      "@tanstack/react-query": "^5.90.14",
      "@tanstack/react-query-devtools": "^5.91.2",
      "@vercel/analytics": "^1.3.1",
      autoprefixer: "^10.4.20",
      "better-auth": "^1.4.9",
      "better-call": "^1.1.7",
      "class-variance-authority": "^0.7.1",
      clsx: "^2.1.1",
      cmdk: "^1.0.4",
      "date-fns": "^4.1.0",
      "embla-carousel-react": "^8.5.1",
      "input-otp": "^1.4.1",
      "lucide-react": "^0.454.0",
      next: "^16.0.10",
      "next-themes": "^0.4.6",
      react: "^19.2.0",
      "react-day-picker": "^9.8.0",
      "react-dom": "^19.2.0",
      "react-hook-form": "^7.60.0",
      "react-resizable-panels": "^2.1.7",
      "react-syntax-highlighter": "^16.1.0",
      recharts: "^2.15.4",
      sonner: "^1.7.4",
      "tailwind-merge": "^3.3.1",
      "tailwindcss-animate": "^1.0.7",
      vaul: "^1.1.2",
      zod: "^4.0.0",
      ...Object.fromEntries(dependencies.map((d) => [d, "latest"])),
    },
    devDependencies: {
      "@tailwindcss/postcss": "^4.1.9",
      "@types/node": "^22",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      postcss: "^8.5",
      tailwindcss: "^4.1.9",
      "tw-animate-css": "^1.3.3",
      typescript: "^5",
      ...Object.fromEntries(devDependencies.map((d) => [d, "latest"])),
    },
  };
}

function getBackendPackageJson(
  dependencies: string[],
  devDependencies: string[],
): object {
  return {
    name: "backend",
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "bun run src/index.ts",
      build: "tsc",
      start: "bun run src/index.ts",
      lint: "eslint . --ext .ts",
    },
    dependencies: {
      hono: "^4.0.0",
      "@libsql/client": "^0.6.0",
      drizzle: "^1.0.0",
      "drizzle-orm": "^1.0.0",
      zod: "^4.0.0",
      "better-auth": "^1.4.9",
      ...Object.fromEntries(dependencies.map((d) => [d, "latest"])),
    },
    devDependencies: {
      "bun-types": "^1.0.0",
      typescript: "^5",
      "drizzle-kit": "^0.20.0",
      "@types/node": "^22",
      ...Object.fromEntries(devDependencies.map((d) => [d, "latest"])),
    },
  };
}

function getUiPackageJson(): object {
  return {
    name: "@apsara/ui",
    version: "0.1.0",
    private: false,
    main: "src/index.ts",
    types: "src/index.ts",
    exports: {
      ".": {
        import: "./src/index.ts",
        require: "./src/index.ts",
      },
      "./styles/globals.css": "./src/styles/globals.css",
    },
    scripts: {
      build: "echo 'UI built'",
      lint: "eslint . --ext .ts,.tsx",
    },
    dependencies: {
      react: "^19.2.0",
      "react-dom": "^19.2.0",
      "@radix-ui/react-slot": "^1.1.1",
      "class-variance-authority": "^0.7.1",
      clsx: "^2.1.1",
      "tailwind-merge": "^3.3.1",
    },
    devDependencies: {
      "@types/node": "^22",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      typescript: "^5",
    },
    publishConfig: {
      access: "public",
    },
  };
}

export async function generate(options: GenerateOptions): Promise<void> {
  await printBanner();

  const targetDir = path.resolve(process.cwd(), options.name);

  if (await fs.pathExists(targetDir)) {
    console.log(
      `\n${red(" ERROR ")} Directory "${options.name}" already exists!`,
    );
    process.exit(1);
  }

  await logStep("Loading feature manifests...");
  const allManifests = await loadAllManifests();

  let apps = options.apps?.split(",").map((a) => a.trim()) || [
    "web",
    "backend",
  ];
  let features = options.features?.split(",").map((f) => f.trim()) || [];

  if (options.preset && !features.length) {
    const presetFeatures: Record<string, string[]> = {
      minimal: ["auth", "dashboard", "user-profile"],
      standard: ["auth", "dashboard", "user-profile", "access-control", "blog"],
    };
    features = presetFeatures[options.preset] || [];
  }

  await logStep("Resolving dependencies...");
  features = resolveDependencies(features, allManifests);
  apps = apps.filter((app) => {
    const requiredApps = new Set(
      features.flatMap((f) => {
        const manifest = allManifests.find((m) => m.id === f);
        return manifest?.apps || [];
      }),
    );
    return requiredApps.has(app);
  });

  const dependencies = collectDependencies(features, allManifests);
  const envVars = collectEnvVars(features, allManifests);

  await logStep("Creating project structure...");
  await fs.ensureDir(targetDir);
  await fs.ensureDir(path.join(targetDir, "apps"));
  await fs.ensureDir(path.join(targetDir, "packages"));

  await logStep("Copying core files...");
  await copyCore(targetDir);

  for (const app of apps) {
    await logInfo(`Setting up ${app} app...`);
    await copyApp(app as "web" | "backend" | "ai", targetDir);
  }

  await logStep("Writing configuration files...");

  if (apps.includes("web")) {
    await fs.writeFile(
      path.join(targetDir, "apps", "web", "package.json"),
      JSON.stringify(
        getWebPackageJson(dependencies.web, dependencies.webDev),
        null,
        2,
      ),
    );
  }

  if (apps.includes("backend")) {
    await fs.writeFile(
      path.join(targetDir, "apps", "backend", "package.json"),
      JSON.stringify(
        getBackendPackageJson(dependencies.backend, dependencies.backendDev),
        null,
        2,
      ),
    );
  }

  await fs.writeFile(
    path.join(targetDir, "packages", "ui", "package.json"),
    JSON.stringify(getUiPackageJson(), null, 2),
  );

  await fs.ensureDir(path.join(targetDir, "packages", "shared", "types"));
  await fs.writeFile(
    path.join(targetDir, "packages", "shared", "types", "index.ts"),
    `// Shared types directory
export {};
`,
  );

  await mergeTurboJson(targetDir, apps);
  await mergeEnvExample(targetDir, envVars);
  await createEnvProduction(targetDir);

  await fs.writeFile(
    path.join(targetDir, "package.json"),
    JSON.stringify(
      {
        name: options.name,
        version: "0.1.0",
        private: true,
        scripts: {
          build: "turbo run build",
          dev: "turbo run dev --filter=!backend",
          "dev:all": "turbo run dev",
          lint: "turbo run lint",
          typecheck: "turbo run typecheck",
        },
        devDependencies: {
          prettier: "^3.7.4",
          tailwindcss: "^4.1.11",
          turbo: "^2.7.3",
          typescript: "^5.7.3",
          "@types/node": "^22.0.0",
        },
        packageManager: "pnpm@10.4.1",
        engines: {
          node: ">=22",
        },
      },
      null,
      2,
    ),
  );

  await fs.writeFile(
    path.join(targetDir, "pnpm-workspace.yaml"),
    `packages:
  - apps/*
  - packages/*
`,
  );

  await fs.writeFile(
    path.join(targetDir, ".npmrc"),
    `engine-strict=true
auto-install-peers=true
`,
  );

  await fs.writeFile(
    path.join(targetDir, ".env.example"),
    `# Required
DATABASE_URL=file:./sqlite.db
BETTER_AUTH_SECRET=your_auth_secret_here

# Optional - Google OAuth
# GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=

# App
NEXT_PUBLIC_APP_URL=http://localhost:1111
`,
  );

  await fs.writeFile(
    path.join(targetDir, "README.md"),
    `# ${options.name}

Generated with Apsara DevKit.

## Features

${features.map((f) => `- ${f}`).join("\n")}

## Quick Start

\`\`\`bash
# Install dependencies
pnpm install

# Start development server (web only)
pnpm dev

# Start all apps including backend
pnpm dev:all
\`\`\`

> **Important:** Use \`pnpm\` as the package manager.

## Apps

| App | Port | Description |
|-----|------|-------------|
| web | 1111 | Next.js frontend |
| backend | 2222 | Hono API server |

## Commands

| Command | Description |
|---------|-------------|
| \`pnpm dev\` | Start web app on port 1111 |
| \`pnpm dev:all\` | Start all apps |
| \`pnpm build\` | Build all apps |
| \`pnpm lint\` | Lint all apps |
| \`pnpm typecheck\` | Type check all apps |

## Environment Variables

Copy \`.env.example\` to \`.env\` and configure:

\`\`\`bash
cp .env.example .env
\`\`\`

## Learn More

See [Apsara DevKit](https://github.com/your-org/apsara-devkit) for documentation.
`,
  );

  await fs.writeFile(
    path.join(targetDir, ".gitignore"),
    `node_modules/
.pnp
.pnp.js
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.next/
out/
build/
dist/
*.log
npm-debug.log*
.DS_Store
*.pem
.vercel
.turbo
coverage/
.nyc_output/
`,
  );

  if (options.git !== false) {
    await gitInit(targetDir);
  }

  if (options.install !== false) {
    await install(targetDir);
  }

  await logSuccess(`Project "${options.name}" created successfully!`);
  console.log(`
${bold("Next steps:")}

  ${cyan("cd")} ${options.name}
  ${cyan("pnpm")} dev

${bold("Project structure:")}

  ${options.name}/
  ├── apps/
  │   ${apps.join("/\n  │   ")}/
  ├── packages/
  │   └── ui/
  └── ...
`);
}
