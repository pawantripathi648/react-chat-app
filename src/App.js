import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router/config';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
