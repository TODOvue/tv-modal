<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Modal (TvModal)
A flexible, customizable Vue 3 modal component with multiple variants (success, error, warning, info), animations, theme support, and accessibility features. Works seamlessly in Single Page Apps and Server-Side Rendered (SSR) environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-modal.svg)](https://www.npmjs.com/package/@todovue/tv-modal)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-modal.svg)](https://www.npmjs.com/package/@todovue/tv-modal)
![License](https://img.shields.io/github/license/TODOvue/tv-modal)

> Demo: https://tv-modal.netlify.app/

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Configuration Object](#configuration-object)
- [Theme Support](#theme-support)
- [Usage Examples](#usage-examples)
- [Animations](#animations)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Roadmap](#roadmap)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---
## Features
- Multiple visual variants: success, error, warning, info
- Configurable title, description, and action buttons
- Built-in animations (scale-up, scale-down, rotate shake on overlay click)
- Theme support: auto-detect dark/light mode or manual override
- Uses Vue Teleport for proper modal rendering
- Keyboard navigation (ESC to close)
- Focus management and restoration
- Accessible (ARIA attributes, role="dialog")
- Works in SPA and SSR (Nuxt 3) contexts
- Integrates with @todovue/tv-button for action buttons
- Tree-shake friendly (Vue marked external in library build)

---
## Installation
Using npm:
```bash
npm install @todovue/tv-modal
```
Using yarn:
```bash
yarn add @todovue/tv-modal
```
Using pnpm:
```bash
pnpm add @todovue/tv-modal
```

---
## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import TvModal from '@todovue/tv-modal'

createApp(App)
  .use(TvModal) // enables <TvModal /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()

const modalConfig = {
  title: "Confirm Action",
  description: "Are you sure you want to proceed?",
  confirmButtonText: "Yes",
  cancelButtonText: "No",
  icon: "warning"
}

const openModal = () => {
  modal.value.openModal()
}

const handleAccepted = () => {
  console.log('User confirmed')
}

const handleCanceled = () => {
  console.log('User canceled')
}
</script>

<template>
  <button @click="openModal">Open Modal</button>
  
  <TvModal
    :config-modal="modalConfig"
    @accepted="handleAccepted"
    @canceled="handleCanceled"
    ref="modal"
  />
</template>
```

---
## Nuxt 3 / SSR Usage
Create a plugin file: `plugins/tv-modal.client.ts`:
```ts
import { defineNuxtPlugin } from '#app'
import TvModal from '@todovue/tv-modal'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvModal)
})
```
Use anywhere in your Nuxt app:
```vue
<template>
  <button @click="modal.openModal()">Show Modal</button>
  
  <TvModal
    :config-modal="config"
    @accepted="handleAccept"
    ref="modal"
  />
</template>

<script setup>
import { ref } from 'vue'

const modal = ref()
const config = {
  title: "Success!",
  description: "Operation completed",
  confirmButtonText: "OK",
  icon: "success"
}

const handleAccept = () => {
  // Handle acceptance
}
</script>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvModal } from '@todovue/tv-modal'
</script>
```

---
## Component Registration Options
| Approach                                                        | When to use                                    |
|-----------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvModal)`                                   | Many usages across app / design system install |
| Local named import `{ TvModal }`                                | Isolated / code-split contexts                 |
| Direct default import `import TvModal from '@todovue/tv-modal'` | Single usage or manual registration            |

---
## Props
| Prop        | Type   | Default | Description                                                                   |
|-------------|--------|---------|-------------------------------------------------------------------------------|
| configModal | Object | —       | **Required.** Configuration object for modal content and buttons (see below). |
| theme       | String | ''      | Theme override: `''` (auto-detect), `'dark-mode'`, or `'light-mode'`.         |

---
## Events
| Event name | Payload | Description                                      |
|------------|---------|--------------------------------------------------|
| `accepted` | —       | Emitted when user clicks the confirm button.     |
| `canceled` | —       | Emitted when user clicks cancel or presses ESC.  |

Usage:
```vue
<TvModal
  :config-modal="config"
  @accepted="onAccept"
  @canceled="onCancel"
  ref="modal"
/>
```

---
## Configuration Object
The `configModal` prop accepts an object with the following properties:

| Property          | Type   | Required | Description                                                     |
|-------------------|--------|----------|-----------------------------------------------------------------|
| title             | String | No*      | Modal title text.                                               |
| description       | String | No*      | Modal description/body text.                                    |
| confirmButtonText | String | No       | Text for the confirm button. If omitted, button won't show.     |
| cancelButtonText  | String | No       | Text for the cancel button. If omitted, button won't show.      |
| icon              | String | No       | Icon variant: `'success'`, `'error'`, `'warning'`, or `'info'`. |

\* At least one of `title` or `description` is required (validated by prop validator).

Example:
```js
const modalConfig = {
  title: "Delete Item",
  description: "This action cannot be undone. Are you sure?",
  confirmButtonText: "Delete",
  cancelButtonText: "Cancel",
  icon: "warning"
}
```

---
## Theme Support
TvModal automatically detects the theme from your application:
- Checks `document.body` for `.dark-mode` or `.light-mode` classes
- Checks `#app` element for theme classes
- Falls back to searching for any `.dark-mode` or `.light-mode` element
- Observes DOM changes to update theme dynamically

Manual override:
```vue
<TvModal :config-modal="config" theme="dark-mode" ref="modal" />
```

---
## Usage Examples

### Success Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Success!",
  description: "Your operation was completed successfully",
  confirmButtonText: "Great!",
  icon: "success"
}
</script>

<template>
  <button @click="modal.openModal()">Show Success</button>
  <TvModal :config-modal="config" @accepted="() => {}" ref="modal" />
</template>
```

### Error Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Error occurred",
  description: "Something went wrong. Please try again later.",
  confirmButtonText: "OK",
  cancelButtonText: "Cancel",
  icon: "error"
}
</script>

<template>
  <button @click="modal.openModal()">Show Error</button>
  <TvModal
    :config-modal="config"
    @accepted="handleRetry"
    @canceled="handleCancel"
    ref="modal"
  />
</template>
```

### Warning Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Are you sure?",
  description: "If you delete it there is no step back",
  confirmButtonText: "Yes, delete it",
  cancelButtonText: "No, keep it",
  icon: "warning"
}
</script>

<template>
  <button @click="modal.openModal()">Delete Item</button>
  <TvModal
    :config-modal="config"
    @accepted="deleteItem"
    @canceled="() => {}"
    ref="modal"
  />
</template>
```

### Info Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Information",
  description: "Here is some important information you should know about.",
  confirmButtonText: "Got it",
  icon: "info"
}
</script>

<template>
  <button @click="modal.openModal()">Show Info</button>
  <TvModal :config-modal="config" @accepted="() => {}" ref="modal" />
</template>
```

---
## Animations
TvModal includes built-in animations:
- **Scale up**: When modal opens
- **Scale down**: When modal closes
- **Rotate shake**: When user clicks the overlay (attention grabber)

Animations are managed internally via the `useModal` composable and applied via CSS classes.

---
## Accessibility
- Uses Vue `<Teleport>` to render modal at the body level
- Proper ARIA attributes: `role="dialog"`, `aria-modal="true"`
- Dynamic `aria-labelledby` and `aria-describedby` based on title/description
- Keyboard support: ESC key to close/cancel
- Focus management:
  - Focuses modal on open
  - Restores focus to triggering element on close
- Action buttons use the accessible `@todovue/tv-button` component

---
## SSR Notes
- Safe for SSR (no direct `window`/`document` access during module evaluation)
- Uses `onMounted` for theme detection and DOM observers
- Teleport target is `body` (ensure it exists in SSR context)
- Theme detection gracefully handles `typeof document === 'undefined'`
- Works seamlessly with Nuxt 3

---
## Roadmap
| Item                                  | Status      |
|---------------------------------------|-------------|
| Additional animation options          | Planned     |
| Custom icon support (slot)            | Considering |
| Size variants (small, large)          | Considering |
| Programmatic API (without template)   | Considering |
| Custom button styling options         | Considering |
| Multi-step modal support              | Considering |

---
## Development
```bash
git clone https://github.com/TODOvue/tv-modal.git
cd tv-modal
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` and demo examples in `src/demo`.

---
## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---
### Dependencies
- **Runtime**: `@todovue/tv-button` (for action buttons)
- **Peer**: `vue@^3.0.0`

---
## License
MIT © TODOvue

---
### Attributions
Crafted for the TODOvue component ecosystem
