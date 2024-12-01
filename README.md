# 📁 Overview to https://hunterstevenshaw.info/

  

## 🖥️ **Website Redevelopment**

  

This repository contains the source code for the re-development of [hunterstevenshaw.info](https://hunterstevenshaw.info/); my portfolio, built using the old _create-react-app_ which as been long outdated and deprecated with tons of compiling errors _and/or_ NodeJS packages. The new tech stack is designed for simplicity, performance, and ease of content management for future development and maintenance.

  

## 🛠️ **Tech Stack Overview** 
[![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)

  

### **Frontend**

-  **ReactJS**: For building a dynamic, responsive, and component-based UI.

-  **Tailwind CSS**: For styling with utility-first CSS classes, maintaining a consistent and clean design directly in JSX.

  

### **Backend and Content Management**

-  **Google Firebase Database**: Storing images, email addresses, and other critical data as structured records. 
  

## ❓ **Why This Tech Stack?**


### **1. ReactJS & Tailwind CSS**

- Ensures modular and reusable code components for easy future updates.

- Tailwind CSS integrates seamlessly into React components, reducing the need for external CSS files and ensuring a unified design.

- No more routing/linking errors for stylesheets; simply a code all-in-one solution for maintaining and updating codebase.


### **2. Firebase Database**

- Efficiently stores and serves images and other content via URLs to reduce server overhead.

- Ensures fast and reliable data retrieval without the need for traditional file hosting.

  

### **4. Simplified CSR Workflow**

- Combines Client-Side Rendering (CSR) with Firebase for a fast and lightweight website. 

- Avoids the complexity of Server-Side Rendering (SSR), keeping costs and management overhead low, suitable for my portfolio.

- Avoids high upkeep/costs for Server-Side Rending (SSR), which is over-kill for a portfolio.

 

# 📁 Overview to Project Setup

  

### **Prerequisites**

- Node.js and npm installed.

- Create a React App _with_ Vite.

- Using this article, [freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-a-react-app-in-2024/#:~:text=Create%20React%20App%20has%20been,new%20React%20project%20in%202024.).

- Firebase CLI installed.

### React + Vite
  
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### 🐛 **Issues/Bugs**

Even following the exact setup, I could not figure it out, the CSS and Tailwind was imported but _not_ applied to the file. In other words, the problem was within the _**vite.config.js**_ and not the _**tailwind.config.js**_.

This is what get's generated with React + Vite within the _vite.config.js_ file. >>>

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

Here is what I found and now it works. >>>

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
```
The solution was found on Stackoverflow from this post [here](https://stackoverflow.com/questions/74987006/tailwindcss-not-working-with-vite-react).
