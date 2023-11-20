import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

// create n properties with n values ending in px
const createBloat = (n: number) => {
  const bloat: Record<string, string> = {};

  for (let i = 0; i < n; i++) {
    const keyAndValue = `${i}px`;
    bloat[keyAndValue] = keyAndValue;
  }

  return bloat;
};

const bloat500 = createBloat(500);

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
    paddingTop: bloat500,
    paddingBottom: bloat500,
    paddingLeft: bloat500,
    paddingRight: bloat500,
    marginTop: bloat500,
    marginBottom: bloat500,
    marginLeft: bloat500,
    marginRight: bloat500,
  },
});

export const sprinkles = createSprinkles(foo);
