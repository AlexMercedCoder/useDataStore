import * as React from 'react'

type State = { [key: string]: any }

export const createDataStore = (
  initialState: State,
  reducer: React.ReducerWithoutAction<any>
): Array<Function> => {
  const DS = React.createContext({})

  const useDataStore: Function = (): State => {
    return React.useContext(DS)
  }

  const DataStore: React.FC<any> = (props) => {

    const [dataStore, dispatch] = React.useReducer(reducer, initialState)

    return <DS.Provider value={{dataStore, dispatch}}>
      {props.children}
      </DS.Provider>
  }

  return [DataStore, useDataStore]
}
