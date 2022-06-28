# ensure-get-list-val

[![Build Status](https://www.travis-ci.org/wsafight/ensure-get-list-val.svg?branch=main)](https://www.travis-ci.org/wsafight/ensure-get-list-val)
[![NPM Version](https://badgen.net/npm/v/ensure-get-list-val)](https://www.npmjs.com/package/ensure-get-list-val)

确保可以从列表中获取一个可用的值


## 安装

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
| items | 列表数据 | ItemType[] | undefined |
| value | 值  | ValueType | undefined |
| getVal | 获取值的函数 | (item: ItemType) => ValueType | item => item |
| pos | 未查询数据时返回值的位置  | 'first','last' | 'frist' |

## 用法

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
