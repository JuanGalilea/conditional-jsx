# conditional-jsx
Conditional statements for JSX, a nice replacement for ternaries or logical operators when conditionally rendering react components in JSX.
## Table of contents

### Functions

- [Case](modules.md#case)
- [If](modules.md#if)
- [IfElse](modules.md#ifelse)
- [OnFalse](modules.md#onfalse)
- [OnTrue](modules.md#ontrue)
- [Satisfies](modules.md#satisfies)
- [Switch](modules.md#switch)
- [Unless](modules.md#unless)
- [When](modules.md#when)

## Functions

### Case

▸ `Const` **Case**(`__namedParameters`: { `condition`: *any* ; `value`: *any*  }): *any*

Renders when its the condition supplied by its parent matches its value prop.
- See also: Satisfies, Switch

**`function`** Case

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |
| `__namedParameters.value` | *any* |

**Returns:** *any*

Defined in: [index.js:102](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L102)

___

### If

▸ `Const` **If**(`__namedParameters`: { `condition`: *any*  }): *any*

Renders when its condition prop is truthy
- Synonyms: When, OnTrue
- See also: Unless, OnFalse

**`function`** If

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:32](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L32)

___

### IfElse

▸ `Const` **IfElse**(`__namedParameters`: { `condition`: *any*  }): *any*

Supplies its condition prop to all its children, use with OnTrue and OnFalse.
- See also: OnTrue, OnFalse

Note:
- Supports multiple OnTrue, OnFalse and/or other components as children.
- It provides keys as best as it can to its children, but its better if they are provided beforehand.

**`function`** IfElse

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:69](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L69)

___

### OnFalse

▸ `Const` **OnFalse**(`__namedParameters`: { `condition`: *any*  }): *any*

Renders when its IfElse parent condition is falsy
- Synonyms: Unless
- See also: If, When, OnTrue

**`function`** OnFalse

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:10](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L10)

___

### OnTrue

▸ `Const` **OnTrue**(`__namedParameters`: { `condition`: *any*  }): *any*

Renders when its IfElse parent condition is truthy
- Synonyms: If, When
- See also: Unless, OnFalse

**`function`** OnTrue

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:21](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L21)

___

### Satisfies

▸ `Const` **Satisfies**(`__namedParameters`: { `condition`: *any* ; `predicate`: (`arg0`: *any*) => *boolean*  }): *any*

Renders when its the condition supplied by its parent matches its value prop.
- See also: Case, Switch

**`function`** Satisfies

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |
| `__namedParameters.predicate` | (`arg0`: *any*) => *boolean* |

**Returns:** *any*

Defined in: [index.js:113](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L113)

___

### Switch

▸ `Const` **Switch**(`__namedParameters`: { `condition`: *any*  }): *any*

Supplies its condition prop to all its children, use with Case or Satisfies as children.
- See also: Case, Satisfies

Note:
- Supports multiple Case, Satisfies and/or other components as children.
- Can also be used as IfElse, but the syntax is sub-optimal.
- It provides keys as best as it can to its children, but its better if they are provided beforehand.

**`function`** Switch

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:92](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L92)

___

### Unless

▸ `Const` **Unless**(`__namedParameters`: { `condition`: *any*  }): *any*

Renders when its condition prop is falsy
- Synonyms: OnFalse
- See also: If, When, OnTrue

**`function`** Unless

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:52](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L52)

___

### When

▸ `Const` **When**(`__namedParameters`: { `condition`: *any*  }): *any*

Renders when its condition prop is truthy
- Synonyms: If, OnTrue
- See also: Unless, OnFalse

**`function`** When

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.condition` | *any* |

**Returns:** *any*

Defined in: [index.js:42](https://github.com/JuanGalilea/conditional-jsx/blob/0b25e4f/src/index.js#L42)
