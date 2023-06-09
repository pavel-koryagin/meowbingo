# meowbingo

An Electron application with React and TypeScript

## TODO list

- More options to classify the answer:
  - a) mark as definitely good (for the future checks)
  - b) mark with note to ask a teacher
- Add session parameters, like direction (eng->geo/geo->eng/both), mark type (new, repeat, hard), etc.
- Create a view to show all tasks and their statuses
- Implement a feature to edit the pairs

## Ranging algorithm

- Use buckets, e.g. 'time to repeat', 'new', 'hard' to avoid some of the cards becoming unavailable
- Define sorting formula for every bucket
- Calculate dynamic parameters for every task, based on the answers

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
