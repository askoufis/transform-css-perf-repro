# VE Vite Node Compiler Bottleneck

This reproduction uses the `vite-plugin-next` version of the VE vite plugin.
This version uses the experimental `vite-node` compiler and is still a work-in-progress.

## Reproduction

The `vite-node` compiler seems to compiler the same file multiple times.
In this reproduction there are 4 different button components, each of which reference a style that is created from the same sprinkles definition.
The sprinkles definition has been intentionally bloated to exaggerate the issue.

1. `pnpm install`
1. `pnpm run dev`

Notice that the initial load takes a decent amount of time, approx. 5s.

Uncomment all the `Button` components in `src/App.tsx` and restart the dev server to see the initial page load slow down to >10s.

Swapping to the `runtime-sprinkles` branch, we can see that using sprinkles at runtime within the component definition results in no bottleneck.
The sprinkles file is only compiled once.

## Expectation

Ideally the sprinkle file should only be compiled once by `vite-node`, however it seems to re-process it once for each component.
