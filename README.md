# ensure-get-list-val

[![Build Status](https://www.travis-ci.org/wsafight/ensure-get-list-val.svg?branch=main)](https://www.travis-ci.org/wsafight/ensure-get-list-val)
[![NPM Version](https://badgen.net/npm/v/ensure-get-list-val)](https://www.npmjs.com/package/ensure-get-list-val)

Read this in other languages: [简体中文](https://github.com/wsafight/ensure-get-list-val/blob/main/README.zh-CN.md)

Make sure you can get an available value from the list


## Installation

```bash
npm install ensure-get-list-val
```

或者

```bash
yarn add ensure-get-list-val
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :----| :---- | :---- | :---- |
| items | list data | ItemType[] | undefined |
| value | val  | ValueType | undefined |
| getVal | Function to get value | (item: ItemType) => ValueType | item => item |
| pos | The position of the returned value when no data is queried  | 'first','last' | 'frist' |

## Usage

```ts
import ensureGetValFromList from 'ensure-get-list-val'

const currentVal = ensureGetValFromList<number>({
    items: [1, 2, 3]
})

currentVal // 1
```

```ts
import ensureGetValFromList from 'ensure-get-list-val'

interface stringSelectOptinos {
  label: string;
  value: string;
}

const currentVal = ensureGetValFromList<stringSelectOptinos, string>({
    items: ['1', '2', '3'].map(item => ({label: item, value: item})),
    value: '4',
    getVal: (item) => item.value,
  })

currentVal // 1
```
