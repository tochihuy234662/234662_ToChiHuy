import React, { useState, useEffect } from 'react';
import { getBooks, createBook, updateBook, deleteBook } from './services/api';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [editingBook, setEditingBook] = useState(null);

  const notify = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 4000);
  };

  const fetchBooks = async (query = '') => {
    setLoading(true);
    try {
      const res = await getBooks(query);
      setBooks(res.data);
    } catch (err) {
      notify('Lỗi tải dữ liệu: ' + (err.response?.data?.message || err.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchTerm);
  };

  const handleSaveBook = async (bookData) => {
    try {
      if (editingBook) {
        await updateBook(editingBook._id, bookData);
        notify('Cập nhật thông tin sách thành công!');
        setEditingBook(null);
      } else {
        await createBook(bookData);
        notify('Thêm sách mới vào hệ thống thành công!');
      }
      fetchBooks(searchTerm);
    } catch (err) {
      notify('Thao tác thất bại: ' + (err.response?.data?.message || err.message), 'error');
    }
  };

  const handleDeleteBook = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa cuốn sách này?')) {
      try {
        await deleteBook(id);
        notify('Đã xóa sách thành công!');
        fetchBooks(searchTerm);
      } catch (err) {
        notify('Lỗi xóa sách: ' + (err.response?.data?.message || err.message), 'error');
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h2>HỆ THỐNG QUẢN LÝ SÁCH TRÊN ĐÁM MÂY</h2>
        <p>Sinh viên thực hiện: <strong>Tô Chí Huy</strong> - MSSV: <strong>234662</strong></p>
      </header>

      {message.text && (
        <div className={`alert ${message.type === 'error' ? 'alert-error' : 'alert-success'}`}>
          {message.text}
        </div>
      )}

      <BookForm
        currentBook={editingBook}
        onSave={handleSaveBook}
        onCancel={() => setEditingBook(null)}
      />

      <div className="card">
        <div className="search-bar-header">
          <h3>Danh sách sách hiện có</h3>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Nhập tiêu đề sách cần tìm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="btn btn-primary">Tìm kiếm</button>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); fetchBooks(''); }}
              className="btn btn-secondary"
            >
              Đặt lại
            </button>
          </form>
        </div>

        <BookList
          books={books}
          loading={loading}
          onSelect={(b) => setSelectedBook(b)}
          onEdit={(b) => setEditingBook(b)}
          onDelete={handleDeleteBook}
        />
      </div>

      <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}

export default App;