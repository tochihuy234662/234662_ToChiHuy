import React from 'react';

const BookList = ({ books, loading, onSelect, onEdit, onDelete }) => {
  if (loading) {
    return <p style={{ textAlign: 'center', padding: '20px' }}>Đang tải dữ liệu từ máy chủ...</p>;
  }

  if (books.length === 0) {
    return <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>Không tìm thấy cuốn sách nào trong kho dữ liệu.</p>;
  }

  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Mã sách</th>
            <th style={styles.th}>Tên sách</th>
            <th style={styles.th}>Tác giả</th>
            <th style={styles.th}>Thể loại</th>
            <th style={styles.th}>Nhà XB</th>
            <th style={styles.th}>Năm XB</th>
            <th style={styles.th}>Số lượng</th>
            <th style={styles.th}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} style={styles.bodyRow}>
              <td style={styles.td}><strong>{book.bookId}</strong></td>
              <td style={styles.td}>{book.title}</td>
              <td style={styles.td}>{book.author}</td>
              <td style={styles.td}>{book.category}</td>
              <td style={styles.td}>{book.publisher}</td>
              <td style={styles.td}>{book.publishYear}</td>
              <td style={styles.td}>{book.quantity}</td>
              <td style={styles.tdAction}>
                <button onClick={() => onSelect(book)} style={btnStyle('#17a2b8')}>Chi tiết</button>
                <button onClick={() => onEdit(book)} style={btnStyle('#ffc107', '#000')}>Sửa</button>
                <button onClick={() => onDelete(book._id)} style={btnStyle('#dc3545')}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableWrapper: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
  headerRow: { backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' },
  th: { padding: '12px 10px', textAlign: 'left', fontWeight: 'bold', color: '#334155' },
  bodyRow: { borderBottom: '1px solid #e2e8f0', transition: 'background-color 0.2s' },
  td: { padding: '10px', color: '#1e293b' },
  tdAction: { padding: '10px', whiteSpace: 'nowrap' },
};

const btnStyle = (bg, color = '#fff') => ({
  backgroundColor: bg,
  color: color,
  border: 'none',
  padding: '6px 10px',
  borderRadius: '4px',
  marginRight: '6px',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '13px',
});

export default BookList;