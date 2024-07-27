# Example for @angular-architects/module-federation-esbuild

Currently just a remote.

## Trying it out

```
npm i 
npx ng build
```

## Current Issues

- It does not find a remoteEntry.js
- Federation uses top-level awaits and Angular can only deal with them in the currently experimental Zone-less mode.