cat << 'EOF' > README.md
# Xây dựng và triển khai hệ thống quản lý sách trên nền tảng đám mây

**Thông tin sinh viên:**
- **Họ và tên sinh viên:** Tô Chí Huy
- **Mã số sinh viên (MSSV):** 234662
- **Lớp chuyên ngành:** DH23TIN05
- **Tài khoản GitHub:** [tochihuy234662](https://github.com/tochihuy234662)
- **Tài khoản Docker Hub:** [chihuyto234662](https://hub.docker.com/u/chihuyto234662)
- **Tên Repository GitHub:** `234662_ToChiHuy`
- **Tên Database MongoDB Atlas:** `234662_ToChiHuy`
- **Tên Docker Hub Image (Backend):** `chihuyto234662/backend:latest`
- **Tên Docker Hub Image (Frontend):** `chihuyto234662/frontend:latest`
- **Tên Web Service Backend (Render):** `api-234662`
- **Tên Static Site Frontend (Render):** `web-234662`

 # DANH SÁCH LIÊN KẾT TRIỂN KHAI CÔNG KHAI (DEPLOYMENT LINKS)

| STT | Thành phần dịch vụ | Loại triển khai | Đường dẫn công khai (Public URL) | Trạng thái |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **Mã nguồn GitHub** | Git Repository | [https://github.com/tochihuy234662/234662_ToChiHuy](https://github.com/tochihuy234662/234662_ToChiHuy) | Active |
| 2 | **Docker Hub - Backend** | Container Image | [https://hub.docker.com/r/chihuyto234662/backend](https://hub.docker.com/r/chihuyto234662/backend) | Public |
| 3 | **Docker Hub - Frontend** | Container Image | [https://hub.docker.com/r/chihuyto234662/frontend](https://hub.docker.com/r/chihuyto234662/frontend) | Public |
| 4 | **Frontend UI (Giao diện web)** | Render Static Site | [https://web-234662.onrender.com](https://web-234662.onrender.com) | Live |
| 5 | **Backend Root Service** | Render Web Service | [https://api-234662.onrender.com](https://api-234662.onrender.com) | Live |
| 6 | **Backend Health Endpoint** | REST API Endpoint | [https://api-234662.onrender.com/health](https://api-234662.onrender.com/health) | Live |
| 7 | **Backend Books API** | REST API Endpoint | [https://api-234662.onrender.com/api/books](https://api-234662.onrender.com/api/books) | Live |

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