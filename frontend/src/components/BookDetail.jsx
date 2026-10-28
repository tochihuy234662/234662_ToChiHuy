import React from 'react';

const BookDetail = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Chi tiết sách</h3>
        <p><strong>Mã sách:</strong> {book.bookId}</p>
        <p><strong>Tên sách:</strong> {book.title}</p>
        <p><strong>Tác giả:</strong> {book.author}</p>
        <p><strong>Thể loại:</strong> {book.category}</p>
        <p><strong>Nhà xuất bản:</strong> {book.publisher}</p>
        <p><strong>Năm xuất bản:</strong> {book.publishYear}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Số lượng tồn kho:</strong> {book.quantity}</p>
        <p><strong>Mô tả:</strong> {book.description || 'Không có mô tả'}</p>
        <button onClick={onClose} style={styles.btnClose}>Đóng</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  modal: { background: '#fff', padding: '24px', borderRadius: '8px', width: '450px', maxWidth: '90%', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' },
  btnClose: { marginTop: '15px', background: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' },
};

export default BookDetail;