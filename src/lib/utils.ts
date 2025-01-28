import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface StyleCategory {
name: string;
properties: string[];
}

interface StyleMap {
[key: string]: string | number | StyleMap;
}

/**
* Merge Tailwind CSS classes with clsx and tailwind-merge
*/
export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs))
}

/**
* Get value from nested object using path string
* @example get(object, 'path.to.value')
*/
export function get<T extends Record<string, unknown>>(obj: T, path: string): unknown | undefined {
return path.split('.').reduce<Record<string, unknown> | undefined>((acc, part) => {
    if (acc && typeof acc === 'object') {
    return acc[part] as Record<string, unknown> | undefined
    }
    return undefined
}, obj)
}

/**
* Check if value is defined (not null or undefined)
*/
export function isDefined<T>(value: T | null | undefined): value is T {
return value !== null && value !== undefined
}

/**
* Type guard for checking if value is a string
*/
export function isString(value: unknown): value is string {
return typeof value === 'string'
}

/**
* Type guard for checking if value is a number
*/
export function isNumber(value: unknown): value is number {
return typeof value === 'number'
}

/**
* Format CSS pixels from number or string
* @example px(8) => '8px'
*/
export function px(value: string | number): string {
if (isNumber(value)) {
    return `${value}px`
}
if (isString(value) && /^[0-9]+$/.test(value)) {
    return `${value}px`
}
return value
}

/**
* Create range array of numbers
* @example range(3) => [0, 1, 2]
*/
export function range(n: number): number[] {
return Array.from({ length: n }, (_, i) => i)
}

/**
* Debounce function calls
*/
export function debounce<T extends (...args: unknown[]) => unknown>(
func: T,
wait: number
): (...args: Parameters<T>) => void {
let timeout: NodeJS.Timeout

return function executedFunction(...args: Parameters<T>) {
    const later = () => {
    clearTimeout(timeout)
    func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
}
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function generateTailwindClass(property: string, value: string): string {
  // Implementation here
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function formatExport(styles: StyleMap): string {
  // Implementation here
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getCategoryStyles(category: StyleCategory): StyleMap {
  // Implementation here
  return {};
}

export const defaultExcludeProperties: string[] = [
  'initial',
  'inherit',
  'unset',
  'none',
  'normal'
];

export const defaultStyleCategories: StyleCategory[] = [
  {
    name: 'Layout',
    properties: ['display', 'position', 'width', 'height', 'margin', 'padding']
  },
  {
    name: 'Typography',
    properties: ['font-family', 'font-size', 'font-weight', 'line-height']
  },
  {
    name: 'Colors',
    properties: ['color', 'background-color', 'border-color']
  }
];