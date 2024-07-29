import { assertEquals, assertThrows } from "jsr:@std/assert";
import { createTransitionFunction } from "./createContext.ts";

Deno.test("Normal", () => {
  assertEquals(createTransitionFunction("[->+<]"), {
    0: 5,
    5: 0,
  });

  assertEquals(
    createTransitionFunction(
      "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
    ),
    {
      8: 48,
      14: 33,
      33: 14,
      43: 45,
      45: 43,
      48: 8,
    }
  );

  assertEquals(createTransitionFunction(">-<"), {});
});

Deno.test("Abnormal", () => {
  assertThrows(() => createTransitionFunction("[->+<"), Error);
  assertThrows(() => createTransitionFunction("->+<]"), Error);
});
