# usedatastore

> State Management Components and Hooks

[![NPM](https://img.shields.io/npm/v/usedatastore.svg)](https://www.npmjs.com/package/usedatastore) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save usedatastore
```

## Usage

### Step 1 - Initialize

Create `DS.js` in your src folder and add the following

```js
const createDataStore = require('usedatastore')

// Define and initialState and Reducer

export const [DataStore, useDataStore] = createDataStore(initialState, reducer)
```

### Wrap Your App Components with DataStore

```tsx
// App.jsx
import React from 'react'
import { DataStore } from './DS'

const App = (props) => {
  return (
    <DataStore>
      <OtherComponent />
    </DataStore>
  )
}
```

### Pull data using hook in any component

```tsx
// /components/Component.jsx
import React from 'react'
import { useDataStore } from '../DS'

const Component = (props) => {
  const { dataStore, dispatch } = useDataStore()

  return (
    <>
      <h1>{dataStore.title}</h1>
      <button onClick={() => dispatch({ type: 'something', payload: 5 })}>
        Click Me
      </button>
    </>
  )
}
```

## License

MIT © [AlexMercedCoder](https://github.com/AlexMercedCoder)
