import { promises as fs } from 'fs';
import path from 'path';

function getErrorMessage(error: unknown): string {
if (error instanceof Error) {
    return error.message;
}
if (typeof error === 'string') {
    return error;
}
return 'An unknown error occurred';
}
const COMPONENTS_DIR = path.join(process.cwd(), 'src', 'components', 'generated');

interface ComponentMetadata {
name: string;
description?: string;
createdAt: string;
updatedAt: string;
tags?: string[];
}

interface SaveComponentOptions {
name: string;
content: string;
description?: string;
tags?: string[];
subDirectory?: string;
}

export class ComponentStorageError extends Error {
constructor(message: string) {
    super(message);
    this.name = 'ComponentStorageError';
}
}

export async function validateComponentPath(componentPath: string): Promise<boolean> {
const normalizedPath = path.normalize(componentPath);
const relativePath = path.relative(COMPONENTS_DIR, normalizedPath);

if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    throw new ComponentStorageError('Invalid component path: Must be within the generated components directory');
}

return true;
}

export async function ensureDirectoryExists(dirPath: string): Promise<void> {
try {
    await fs.access(dirPath);
} catch {
    try {
    await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
    throw new ComponentStorageError(`Failed to create directory ${dirPath}: ${getErrorMessage(error)}`);
    }
}
}

export async function saveComponent({
name,
content,
description,
tags = [],
subDirectory = '',
}: SaveComponentOptions): Promise<string> {
if (!name) {
    throw new ComponentStorageError('Component name is required');
}

const sanitizedName = name.replace(/[^a-zA-Z0-9-]/g, '-');
const targetDir = path.join(COMPONENTS_DIR, subDirectory);
const componentPath = path.join(targetDir, `${sanitizedName}.tsx`);
const metadataPath = path.join(targetDir, `${sanitizedName}.meta.json`);

await validateComponentPath(componentPath);
await ensureDirectoryExists(targetDir);

const metadata: ComponentMetadata = {
    name,
    description,
    tags,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
};

try {
    await fs.writeFile(componentPath, content, 'utf8');
    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
    return componentPath;
} catch (error) {
    throw new ComponentStorageError(`Failed to save component ${name}: ${getErrorMessage(error)}`);
}
}

export async function listComponents(subDirectory: string = ''): Promise<string[]> {
const targetDir = path.join(COMPONENTS_DIR, subDirectory);

try {
    await ensureDirectoryExists(targetDir);
    const files = await fs.readdir(targetDir);
    return files.filter(file => file.endsWith('.tsx'));
} catch (error) {
    throw new ComponentStorageError(`Failed to list components: ${getErrorMessage(error)}`);
}
}

export async function loadComponent(name: string, subDirectory: string = ''): Promise<{
content: string;
metadata: ComponentMetadata;
}> {
const sanitizedName = name.replace(/[^a-zA-Z0-9-]/g, '-');
const targetDir = path.join(COMPONENTS_DIR, subDirectory);
const componentPath = path.join(targetDir, `${sanitizedName}.tsx`);
const metadataPath = path.join(targetDir, `${sanitizedName}.meta.json`);

try {
    const content = await fs.readFile(componentPath, 'utf8');
    const metadataContent = await fs.readFile(metadataPath, 'utf8');
    const metadata = JSON.parse(metadataContent);
    
    return { content, metadata };
} catch (error) {
    throw new ComponentStorageError(`Failed to load component ${name}: ${getErrorMessage(error)}`);
}
}

