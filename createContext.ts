const generateErrorMessage = (program: string, i: number) => {
  return `Parentheses corresponding to ${program[i]} do not exist.\n\tat ${i}`;
};

export const createTransitionFunction = (
  program: string
): Record<number, number> => {
  const pos2pos: Record<number, number> = {};
  const stack: number[] = [];

  for (let i = 0; i < program.length; i++) {
    if (program[i] === "[") {
      stack.push(i);
    } else if (program[i] === "]") {
      const j = stack.pop();
      if (j === undefined) {
        throw new Error(generateErrorMessage(program, i));
      } else {
        pos2pos[i] = j;
        pos2pos[j] = i;
      }
    } else {
      // nop
    }
  }

  if (stack.length > 0) {
    throw new Error(
      stack.map((i) => generateErrorMessage(program, i)).join("\n")
    );
  }

  return pos2pos;
};

export type Context = {
  program: string;
  memory: number[];
  transitionFunction: Record<number, number>;
  currentProgramPosition: number;
  currentMemoryPosition: number;
};

// c.f. https://ja.wikipedia.org/wiki/Brainfuck
const BYTE_NUM = 30_000;

export const createContext = (program: string): Context => {
  return {
    program,
    memory: Array.from(new Uint8Array(BYTE_NUM)),
    transitionFunction: createTransitionFunction(program),
    currentProgramPosition: 0,
    currentMemoryPosition: 0,
  };
};

if (import.meta.main) {
  const filename = Deno.args[0];
  const content = Deno.readTextFileSync(filename);

  console.log(JSON.stringify(createContext(content)));
}
