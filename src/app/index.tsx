import { Pages } from "@/pages"
import { store } from "@/app/store"
import { Provider } from "react-redux"

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Pages />
      </Provider>
    </div>
  )
}

export default App
