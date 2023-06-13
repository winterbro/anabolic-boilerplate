# setup error handling
set -e
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
trap 'echo "\"${last_command}\" command filed with exit code $?."' EXIT

# Remove coverage and public folders
echo "Remove coverage, public and node_modules folders"
rm -rf coverage public node_modules

# Remove all files and sub-directories of folders: assets, features, hooks and pages
echo "Remove files and sub-directories in: assets and features"
find ./src/assets -mindepth 1 -delete
find ./src/features -mindepth 1 -delete

# Remove all __snapshots__ folders
echo "Remove all snapshots"
find . -type d -name "__snapshots__" -exec rm -rf {} +

# Remove all .gitkeep files
echo "Remove all .gitkeep files"
find . -type f -name ".gitkeep" -exec rm -rf {} +

# Replace store with commented out content
echo "Replace store with commented out content"
rm src/store/hooks.ts
touch src/store/hooks.ts

echo "// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from 'store';

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;" >> src/store/hooks.ts

rm src/store/index.ts
touch src/store/index.ts

echo "// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterSlice from 'store/slices';

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export { counterSlice };" >> src/store/index.ts

rm src/store/slices.ts
touch src/store/slices.ts

echo "// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//   },
// });

// export default counterSlice;" >> src/store/slices.ts

rm src/store/__tests__/store.test.ts
touch src/store/__tests__/store.test.ts

echo "// import counterSlice from 'store/slices';

// describe('Counter store', () => {
//   it('should return the initial state of counter', () => {
//     expect(counterSlice.reducer(undefined, { type: undefined })).toEqual({
//       value: 0,
//     });
//   });

//   it('should increment the counter', () => {
//     expect(
//       counterSlice.reducer({ value: 0 }, { type: 'counter/increment' })
//     ).toEqual({
//       value: 1,
//     });
//   });
// });" >> src/store/__tests__/store.test.ts

# Replace App.tsx content with a headline
echo "Replace App.tsx content"
rm src/App.tsx
touch src/App.tsx

echo "import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'layout/GlobalStyle';
// import { Provider } from 'react-redux';
// import { store } from 'store';
import styled from 'styled-components';

const AppContainer = styled.div\`
  width: 100%;
\`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContainer>
  );
}

function WrappedApp() {
  return (
    // <Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
    // </Provider>
  );
}

export default WrappedApp;">> src/App.tsx

# Replace Home.tsx content with a headline
echo "Replace Home.tsx content"
rm src/pages/Home.tsx
touch src/pages/Home.tsx

echo "function Home() {
  return <h1>Anabolic Boilerplate</h1>;
}

export default Home;" >> src/pages/Home.tsx

# Replace GlobalStyle.tsx content
echo "Replace GlobalStyle.tsx content"
rm src/layout/GlobalStyle.tsx
touch src/layout/GlobalStyle.tsx

echo "import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
	:root {
    --sizing-unit: 8px;
		--space-xs: var(--sizing-unit);
		--space-sm: calc(2 * var(--sizing-unit));
		--space-md: calc(3 * var(--sizing-unit));
		--space-lg: calc(4 * var(--sizing-unit));
		--space-xl: calc(6 * var(--sizing-unit));
		--font-family: "Lato", sans-serif;
    --font-size: calc(2 * var(--sizing-unit));
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

  html {
		font-family: var(--font-family);
    font-size: var(--font-size);
  }

  body, #root {
    width: 100%;
    height: 100%;
  }
\`;

export default GlobalStyle;" >> src/layout/GlobalStyle.tsx

echo "Cleanup complete - self destructing..."
rm -- "$0"
