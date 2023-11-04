import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

// create n properties with n values ending in px
const createBloat = (n: number) => {
  const bloat: Record<string, string> = {};
  for (let i = 0; i < n; i++) {
    bloat[`bloat${i}`] = `${i}px`;
  }
  return bloat;
};

const bloat1000 = createBloat(1000);

const foo = defineProperties({
  defaultCondition: "default",
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    enabled: { selector: "&:enabled" },
    disabled: { selector: "&:disabled" },
    valid: { selector: "&:valid" },
    invalid: { selector: "&:invalid" },
  },
  properties: {
    paddingTop: bloat1000,
    paddingBottom: bloat1000,
    paddingLeft: bloat1000,
    paddingRight: bloat1000,
  },
});

export const sprinkles = createSprinkles(foo);
