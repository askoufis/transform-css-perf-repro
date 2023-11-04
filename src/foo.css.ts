import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

// create n properties with n values ending in px
const createBloat = (n: number) => {
  const bloat: Record<string, string> = {};
  for (let i = 0; i < n; i++) {
    bloat[`bloat${i}`] = `${i}px`;
  }
  return bloat;
};

const foo = defineProperties({
  defaultCondition: "xxs",
  conditions: {
    xxs: {},
    xs: { "@media": "screen and (min-width: 2px)" },
    s: { "@media": "screen and (min-width: 3px)" },
    m: { "@media": "screen and (min-width: 4px)" },
    l: { "@media": "screen and (min-width: 5px)" },
    xl: { "@media": "screen and (min-width: 6px)" },
    xxl: { "@media": "screen and (min-width: 7px)" },
  },
  properties: {
    paddingTop: createBloat(1000),
    paddingBottom: createBloat(1000),
    paddingLeft: createBloat(1000),
    paddingRight: createBloat(1000),
  },
});

export const sprinkles = createSprinkles(foo);
