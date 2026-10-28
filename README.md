cat << 'EOF' > README.md
# Xây dựng và triển khai hệ thống quản lý sách trên nền tảng đám mây

**Thông tin sinh viên:**
- Họ và tên: Tô Chí Huy
- MSSV: 234662

## 1. Mô tả đề tài
Ứng dụng quản lý sách trực tuyến cho phép xem danh sách, xem chi tiết, thêm mới, cập nhật, xóa và tìm kiếm sách. Hệ thống được phát triển theo mô hình Client-Server.

## 2. Công nghệ sử dụng
- **Frontend:** React, HTML/CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Deployment:** Render, Docker, Docker Hub, GitHub

## 3. Cấu trúc dự án
- `/frontend`: Chứa mã nguồn giao diện người dùng (React).
- `/backend`: Chứa mã nguồn máy chủ API (Node.js/Express).

## 4. Hướng dẫn cài đặt và chạy chương trình
**Yêu cầu hệ thống:** Node.js v18+, Docker.

**Chạy Backend:**
1. `cd backend`
2. `npm install`
3. Tạo file `.env` chứa chuỗi kết nối MongoDB.
4. `npm start`

**Chạy Frontend:**
1. `cd frontend`
2. `npm install`
3. `npm run dev`
EOF