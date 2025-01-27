# Project Structure Guide

## Directory Organization

```
src/
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── design-system/ # design system components
│   └── generated/     # v0.dev generated components
├── lib/               # utilities and integrations
└── styles/            # global styles
```

## Directory Purposes

### Components

#### `components/ui/`
- Houses shadcn/ui components
- Maintain original component names and structure
- Don't modify these components directly; extend them in design-system instead

#### `components/design-system/`
- Custom components built on top of shadcn/ui
- Implements your application's specific design language
- Examples: Button variants, custom form elements, layout components

#### `components/generated/`
- Contains components generated through v0.dev
- Each component should be in its own file
- Naming format: `ComponentName.tsx`
- Include original prompt as a comment

### Lib

#### `lib/v0.ts`
- v0.dev API integration
- Component generation utilities
- Type definitions for API responses

#### `lib/utils.ts`
- Shared utility functions
- Helper methods
- Common types and interfaces

### Styles

#### `styles/globals.css`
- Global CSS rules
- Tailwind imports
- CSS variables

## Adding New Components

### Generated Components
1. Use the component generator UI
2. Components are automatically saved to `components/generated/`
3. Update component name and props as needed
4. Document any manual modifications

### Design System Components
1. Create new file in `components/design-system/`
2. Use Pascal Case for component names: `ButtonPrimary.tsx`
3. Export component as named export
4. Include prop types and documentation

## Best Practices

### Component Organization
- One component per file
- Use index.ts files for barrel exports
- Keep components focused and single-purpose
- Break down complex components into smaller pieces

### TypeScript
- Always use TypeScript for new components
- Define prop interfaces/types in the component file
- Export types that are used across components

### Styling
- Use Tailwind CSS for styling
- Follow design system tokens and variables
- Avoid inline styles
- Use class-variance-authority for component variants

### Documentation
- Document complex components with JSDoc comments
- Include usage examples
- Document props and their purposes
- Add comments for non-obvious code

## Component Conventions

### File Structure
```typescript
import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface ComponentProps {
// props definition
}

export const Component: FC<ComponentProps> = ({ ...props }) => {
return (
    // component JSX
)
}
```

### Naming
- Components: PascalCase
- Files: PascalCase.tsx
- Hooks: use camelCase with 'use' prefix
- Utilities: camelCase

## Import/Export Guidelines
- Use named exports for components
- Group related components in feature folders
- Use barrel exports for commonly used components
- Keep import paths clean using aliases

## Updates and Maintenance
- Document breaking changes
- Update this README as patterns evolve
- Follow the established patterns for consistency
- Create new sections as needed for new patterns

