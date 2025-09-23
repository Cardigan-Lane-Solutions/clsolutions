# Cardigan Lane Solutions - Company Website

A modern, responsive single-page React application built for Cardigan Lane Solutions, showcasing innovative technology solutions with a sleek, professional design.

## 🚀 Features

- **Modern Design**: Sleek, tech company aesthetic with glassmorphism effects
- **Responsive**: Optimized for desktop, tablet, and mobile devices  
- **Accessible**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized loading and smooth animations
- **Type Safe**: Built with TypeScript for better development experience

## 🛠 Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Components** - Reusable, modular component architecture

## 🎨 Brand Configuration

The brand system is centralized in `src/config/brand.config.ts` for easy customization:

```typescript
// Easy brand customization - just update this file!
export const brandConfig = {
  company: {
    name: "Cardigan Lane Solutions",
    tagline: "Innovative Technology Solutions",
  },
  colors: { /* customizable color palettes */ },
  // ...
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
