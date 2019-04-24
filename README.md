# @indlekofer/object_set

## Usage

```js
import set from '@indlekofer/object_set';

console.log(set({}, ['a', 'b', 'c'], 'c')); // -> {a: {b: {c: 'c'}}}
```

## Parameters

  **object**: *object* source object will be mutated  
  **path**: *array* walk path  
  **value**: *any* value will be set at path end  

## Returns

  reference to object  
