import React, { useState, useEffect } from 'react';

const BookForm = ({ currentBook, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    bookId: '',
    title: '',
    author: '',
    category: '',
    publisher: '',
    publishYear: new Date().getFullYear(),
    isbn: '',
    quantity: 1,
    description: '',
  });

  useEffect(() => {
    if (currentBook) {
      setFormData(currentBook);
    } else {
      setFormData({
        bookId: '',
        title: '',
        author: '',
        category: '',
        publisher: '',
        publishYear: new Date().getFullYear(),
        isbn: '',
        quantity: 1,
        description: '',
      });
    }
  }, [currentBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'publishYear' || name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={styles.card}>
      <h3>{currentBook ? 'Cập nhật thông tin sách' : 'Thêm mới sách'}</h3>
      <form onSubmit={handleSubmit} style={styles.formGrid}>
        <div>
          <label>Mã sách (bookId):</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            required
            disabled={!!currentBook}
            style={styles.input}
          />
        </div>
        <div>
          <label>Tên sách (title):</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Tác giả (author):</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Thể loại (category):</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Nhà xuất bản (publisher):</label>
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Mã ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Năm xuất bản:</label>
          <input
            type="number"
            name="publishYear"
            value={formData.publishYear}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Số lượng:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="0"
            style={styles.input}
          />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <label>Mô tả sách:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            style={{ ...styles.input, width: '100%' }}
          />
        </div>
        <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px' }}>
          <button type="submit" style={styles.btnSave}>
            {currentBook ? 'Lưu thay đổi' : 'Thêm sách'}
          </button>
          {currentBook && (
            <button type="button" onClick={onCancel} style={styles.btnCancel}>
              Hủy
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

const styles = {
  card: { background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  input: { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '4px', boxSizing: 'border-box' },
  btnSave: { background: '#28a745', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  btnCancel: { background: '#6c757d', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '4px', cursor: 'pointer' },
};

export default BookForm;