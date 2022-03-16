# cipher-cli

Implementación de cipher como cli con deno, basado en el tradicional
[cipher](https://github.com/Laboratoria/bootcamp/tree/main/projects/01-cipher)

### Prerrequisitos

[Instalar `deno`](https://deno.land/#installation)

## Modo de uso

### Encode

```sh
deno run src/cipher.js --encode --offset=23 "hello world"
> ebiil tloia
```

### Decode

```sh
deno run src/cipher.js --decode --offset=23 "ebiil tloia"
> hello world
```

### Sin clonar el repo

#### Encode

```sh
deno run https://raw.githubusercontent.com/merunga/cipher-cli/main/src/cipher.js --encode --offset=23 "hello world"
> ebiil tloia
```

#### Decode

```sh
deno run https://raw.githubusercontent.com/merunga/cipher-cli/main/src/cipher.js --decode --offset=23 "ebiil tloia"
> hello world
```
## Ejecutar tests

```sh
deno test
```
