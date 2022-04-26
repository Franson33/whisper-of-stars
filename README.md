# whisper-of-stars

For now it's just the sandbox to play with react native for web,

Mono repository consist of 3 separate folders, /app for mobile,
/web for web version and /common for shared code base.

## Installation

As react native do not work with symlinks for now, the wml is used
to track changes for mobile part.

```bash
npm install -g wml
```

## Usage

To start the work you need to run ts server to watch for code changes

```bash
cd packages/common

yarn watch
```

To work on mobile part you need to add the link to wlm and start to
watch after it changes

```bash
cd packages/app

wml add ../common ./node_modules/@wow/common

wml start
```

## License

[ISC](https://choosealicense.com/licenses/mit/)
