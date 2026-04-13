import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookDetailPage from './features/book/pages/BookDetailPage';
import BookEditPage from './features/book/pages/BookEditPage';
import BookInsertPage from './features/book/pages/BookInsertPage';
import BookListPage from './features/book/pages/BookListPage';
import ProductDetailPage from './features/product/pages/ProductDetailPage';
import ProductEditPage from './features/product/pages/ProductEditPage';
import ProductInsertPage from './features/product/pages/ProductInsertPage';
import ProductListPage from './features/product/pages/ProductListPage';
import DefaultLayout from './app/layouts/DefaultLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultLayout />}>
          <Route index element={<h1>HOME PAGE ~~~</h1>} />
          <Route path="book/*">
            <Route path="insert" element={<BookInsertPage />} />
            <Route path="list" element={<BookListPage />} />
            <Route path="detail/:id" element={<BookDetailPage />} />
            <Route path="edit/:id" element={<BookEditPage />} />
          </Route>
          <Route path="product/*">
            <Route path="insert" element={<ProductInsertPage />} />
            <Route path="list" element={<ProductListPage />} />
            <Route path="detail/:id" element={<ProductDetailPage />} />
            <Route path="edit/:id" element={<ProductEditPage />} />
          </Route>
          <Route path="*" element={<h1>ERROR PAGE ~~~</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
