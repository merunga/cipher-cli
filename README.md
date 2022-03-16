# cipher-cli

Implementación de cipher como cli con deno

### Prerrequisitos

[Instalar `deno`](https://deno.land/#installation)

## Modo de uso

### Encode

```sh
deno run cipher.js --encode --offset=23 "hello world"
> ebiil tloia
```

### Decode

```sh
deno run cipher.js --decode --offset=23 "ebiil tloia"
> hello world
```

### Sin clonar el repo

#### Encode

```sh
deno run https://raw.githubusercontent.com/merunga/cipher-cli/main/cipher.js --encode --offset=23 "hello world"
> ebiil tloia
```

#### Decode

```sh
deno run https://raw.githubusercontent.com/merunga/cipher-cli/main/cipher.js --decode --offset=23 "ebiil tloia"
> hello world
```
