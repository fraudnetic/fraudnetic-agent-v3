# 🛡️ @fraudnetic/agent-v3

`@fraudnetic/agent-v3` is a lightweight JavaScript SDK that collects browser fingerprint data and returns a secure token used for fraud protection. This token can be attached to every HTTP request to help backend systems detect and prevent bots, abuse, and fraudulent behavior.

> ✅ This SDK is part of the **Fraudnetic Software Suite** — an advanced toolkit for fraud detection, behavioral analysis, and secure session tracking.

---

## 📦 Installation

Install with npm or yarn:

```bash
npm install @fraudnetic/agent-v3
# or
yarn add @fraudnetic/agent-v3
```

---

## 🚀 Quick Start

Initialize Fraudnetic when your app loads. It returns a secure token you can attach to outgoing HTTP requests.

```ts
import fraudnetic from '@fraudnetic/agent-v3';

fraudnetic.init().then((token) => {
  console.log('Fraudnetic initialized');
  console.log('Fraud Token:', token);

  // Example usage with Fetch
  fetch('/api/secure', {
    method: 'POST',
    headers: {
      'X-Fraud-Token': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: 'hello' })
  });
});
```

---

## ⚙️ API

### `init(isDevelopment?, withVersion?, options?)`

Backward-compatible entry point. Collects the fingerprint, writes the compact payload to the `fn-kml-de-green` cookie and returns it as a base64 token.

- `isDevelopment` (default `false`) — print debug output and an on-page overlay.
- `withVersion` (default `false`) — return `{ version, encoded, visitorId, confidence }` instead of the token string.
- `options` — see the table below.

```ts
// Recommended: send the full payload to your server with a one-time nonce issued by the server.
const { encoded, visitorId, confidence } = await fraudnetic.init(false, true, {
  endpoint: '/api/fraudnetic/collect',
  nonce: window.FN_NONCE,
  userID: currentUser.id,
});
```

| Option | Default | Meaning |
| --- | --- | --- |
| `endpoint` | — | URL that receives the full payload (JSON POST) |
| `nonce` | — | One-time value from your server, sent back for replay protection |
| `userID` / `isLogin` | — | Links the device to your account |
| `credentials` | `same-origin` | Fetch credentials mode for `endpoint` |
| `storeCookie` | `true` | Write the compact payload to cookie and web storage |
| `detectCdp` | `true` | Chrome DevTools Protocol automation check |

### `collect(options?)`

Returns everything at once: `{ version, visitorId, confidence, encoded, payload, full, sent }`. Safe to call several times per page — signals are collected only once.

```ts
const result = await fraudnetic.collect({ storeCookie: false });
```

### What's new in 1.0.0

- `visitorId` — stable 128-bit device ID, plus `confidence` (0–1).
- Bot detection (`isBot`, `botScore`, `botFlags`) and tampering detection (`liesScore`, `liesFlags`, `suspicious`).
- `incognito`, `timezone`, `deviceModel`, `architecture`, `adBlock`.
- All fields of the previous payload are kept with the same names and types. Because broken signals were fixed, legacy hashes (`browserFingerprint`, `canvasFingerprint`, …) change once after upgrading.

> The SDK runs in the browser only. With server-side rendering (Next.js, Nuxt, Angular Universal), import it on the client side, e.g. `const { default: fraudnetic } = await import('@fraudnetic/agent-v3');` inside `useEffect` / `onMounted`.

---

## 🔧 Integration Examples

### Angular

```ts
import { Component, OnInit } from '@angular/core';
import fraudnetic from '@fraudnetic/agent-v3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    fraudnetic.init().then((token) => {
      console.log('Fraud Token:', token);
      // Attach to HTTP headers in your services
    });
  }
}
```

### React

```tsx
import React, { useEffect } from 'react';
import fraudnetic from '@fraudnetic/agent-v3';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    fraudnetic.init().then((token) => {
      axios.defaults.headers.common['X-Fraud-Token'] = token;
    });
  }, []);

  return <div>React + Fraudnetic</div>;
}
```

### Vue 3

```ts
import { createApp } from 'vue';
import fraudnetic from '@fraudnetic/agent-v3';
import App from './App.vue';
import axios from 'axios';

fraudnetic.init().then((token) => {
  axios.defaults.headers.common['X-Fraud-Token'] = token;
  createApp(App).mount('#app');
});
```

### Plain JavaScript

```html
<script type="module">
  import fraudnetic from '@fraudnetic/agent-v3';

  fraudnetic.init().then((token) => {
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'X-Fraud-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ example: 'data' })
    });
  });
</script>
```

---

## 📌 Notes

- Use any custom header name, like `X-Client-Token`, `X-Secure-ID`, or randomized strings.
- Backend must be configured to read the header and validate the token.

---

## 📬 Support

For advanced usage, integration help, or backend verification logic, please contact the Fraudnetic team or your service provider.

---

## 📃 License

Fraudnetic Agent SDK License Agreement
Version 1.0 – © [2025] Fraudnetic Technologies

This software is the proprietary property of Fraudnetic Technologies and is licensed, not sold.

Permission is hereby granted to use the `@fraudnetic/agent-v3` SDK strictly within:
1. The official Fraudnetic SaaS platform, or
2. Platforms, products, or systems operated by officially licensed partners with written authorization from Fraudnetic Technologies.

Redistribution, sublicensing, modification, reverse engineering, or use of this software outside the above scope is strictly prohibited without express written permission.

This SDK is provided "as is", without warranty of any kind, express or implied.

By installing, copying, or using this software, you agree to be bound by the terms above. Unauthorized use may result in legal action.

For licensing inquiries, please contact:
📩 legal@fraudnetic.com

