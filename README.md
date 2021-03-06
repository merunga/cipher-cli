# cipher-cli

Implementación de cipher como cli con deno, basado en el tradicional
[cipher](https://github.com/Laboratoria/bootcamp/tree/main/projects/01-cipher)

### Prerrequisitos

[Instalar `deno`](https://deno.land/#installation)

## Modo de uso

### Encode

```sh
deno run cipher.js --encode --offset=23 "hello world"
```

Output:

```sh
> ebiil tloia
```

### Decode

```sh
deno run cipher.js --decode --offset=23 "ebiil tloia"
```

Output:

```sh
> hello world
```

### Sin clonar el repo

#### Encode

```sh
deno run https://raw.githubusercontent.com/merunga/cipher-cli/main/cipher.js --encode --offset=23 "hello world"
```

Output:

```sh
> ebiil tloia
```

#### Decode

```sh
deno run https://raw.githubusercontent.com/merunga/cipher-cli/main/cipher.js --decode --offset=23 "ebiil tloia"
```

Output:

```sh
> hello world
```
## Ejecutar tests

```sh
deno test
```
