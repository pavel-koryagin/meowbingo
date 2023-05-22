# meowbingo

An Electron application with React and TypeScript

## TODO list

- Skip the tasks marked 'easy'
- Rename 'Drop' to mark the sentence pair bad and skip it, not skipping the task
- Marge the same sentences.
  - Use the id from the first of them
  - Merge after skipping the ones marked bad
- Rename 'lesson' to 'task'
- Replace Next with 'Bad' and 'Good'? Use backspace for 'Bad'?

## Ranging algorithm

- Use buckets, e.g. 'time to repeat', 'new', 'hard' to avoid some of the cards becoming unavailable
- Define sorting formula for every bucket
- Calculate dynamic parameters for every lesson, based on the answers

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
