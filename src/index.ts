interface EnsureGetValFromListParams<ItemType, ValueType> {
    /** list data **/
    items: ItemType[]
    value?: ValueType | undefined
    /** How to extract data values ​​in a list **/
    getVal?: (item: ItemType) => ValueType
    /** The position of the returned value when no data is queried **/
    pos?: 'frist' | 'last'
}

// ValueType = ItemType
// 如果不提供 ValueType, 则 ValueType 默认为 ItemType
const ensureGetValFromList = <ItemType, ValueType = ItemType>({
    items,
    value,
    getVal = item => item as unknown as ValueType,
    pos = 'frist'
}: EnsureGetValFromListParams<ItemType, ValueType>): ValueType | null => {
    // It is not an array and returns null directly
    if (!Array.isArray(items)) {
        return null
    }

    const count = items.length
    // The current empty array directly returns null
    if (count === 0) {
        return null;
    }

    // If no value is passed or the current list length is 1, return the unique data of the list directly
    if (!value || count === 1) {
        return getVal(items[0])
    }

    // Query the list to see if there is a value equal to the incoming value
    if (items.some(item => getVal(item) === value)) {
        return value
    }
    // Returns the first or last data in the list
    const index = pos === 'frist' ? 0 : count - 1
    return getVal(items[index])
}

export {
    EnsureGetValFromListParams,
    ensureGetValFromList
}

export default ensureGetValFromList