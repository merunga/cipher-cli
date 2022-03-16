import { parse } from "https://deno.land/std/flags/mod.ts";
import * as cipher from './lib.js';

const args = parse(Deno.args);

if (!args.encode && !args.decode) {
  console.error('ERROR: Uno de los parámetros `--encode` o `--decode` debe estar presente');
  Deno.exit(1);
}

if (!args.offset || isNaN(parseInt(args.offset))) {
  console.error('ERROR: Debe indicar `--offset`');
  Deno.exit(2);
}

if (!args._.length) {
  console.error('ERROR: Debe indicar texto a codificar/decodificar');
  Deno.exit(3);
}

const action = args.encode ? cipher.encode : cipher.decode;
const str = args._[0];
const result = action(args.offset, str);

console.log(result);

