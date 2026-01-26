import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, "..", "..", "templates");
const CORE_DIR = path.join(__dirname, "..", "..", "core");
const FEATURES_DIR = path.join(__dirname, "..", "..", "features");

export async function copyCore(targetDir: string): Promise<void> {
  const uiDir = path.join(CORE_DIR, "packages", "ui");
  const targetUiDir = path.join(targetDir, "packages", "ui");

  await fs.ensureDir(targetUiDir);
  await fs.copy(uiDir, targetUiDir, {
    filter: (src) => {
      const basename = path.basename(src);
      if (basename === "node_modules") return false;
      if (basename === "dist") return false;
      if (basename === ".git") return false;
      if (src.endsWith(".ts") || src.endsWith(".tsx")) return true;
      if (fs.statSync(src).isDirectory()) {
        return true;
      }
      return false;
    },
  });
}

export async function copyFeature(
  featureId: string,
  targetDir: string,
  app: "web" | "backend" | "ai",
): Promise<void> {
  const featureDir = path.join(FEATURES_DIR, featureId);
  const appDir = path.join(targetDir, "apps", app, "features", featureId);

  await fs.ensureDir(appDir);

  const appSubdir = path.join(featureDir, app);
  if (await fs.pathExists(appSubdir)) {
    await fs.copy(appSubdir, appDir);
  }
}

export async function copySharedFeature(
  featureId: string,
  targetDir: string,
): Promise<void> {
  const featureDir = path.join(FEATURES_DIR, featureId);
  const sharedDir = path.join(
    targetDir,
    "packages",
    "shared",
    "types",
    featureId,
  );

  await fs.ensureDir(sharedDir);

  const featureShared = path.join(featureDir, "shared");
  if (await fs.pathExists(featureShared)) {
    await fs.copy(featureShared, sharedDir);
  }
}

export async function copyApp(
  app: "web" | "backend" | "ai",
  targetDir: string,
): Promise<void> {
  const appTemplateDir = path.join(TEMPLATES_DIR, app);
  const targetAppDir = path.join(targetDir, "apps", app);

  await fs.ensureDir(targetAppDir);

  if (await fs.pathExists(appTemplateDir)) {
    await fs.copy(appTemplateDir, targetAppDir, {
      filter: (src) => {
        const basename = path.basename(src);
        if (basename === "node_modules") return false;
        if (basename === "dist") return false;
        if (basename === ".git") return false;
        if (basename === "package.json") return false;
        return true;
      },
    });
  }
}

export async function createFeatureIndex(
  featureId: string,
  targetDir: string,
  app: "web" | "backend",
): Promise<void> {
  const featureDir = path.join(FEATURES_DIR, featureId);
  const appDir = path.join(targetDir, "apps", app, "features", featureId);

  const webIndexPath = path.join(featureDir, "web", "index.ts");
  const backendIndexPath = path.join(featureDir, "backend", "index.ts");

  let content = "";

  if (app === "web" && (await fs.pathExists(webIndexPath))) {
    content = await fs.readFile(webIndexPath, "utf-8");
  } else if (app === "backend" && (await fs.pathExists(backendIndexPath))) {
    content = await fs.readFile(backendIndexPath, "utf-8");
  }

  if (content) {
    await fs.writeFile(path.join(appDir, "index.ts"), content);
  }
}
