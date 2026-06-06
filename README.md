# Unit Converter - Công Cụ Chuyển Đổi Đơn Vị

## 📋 Giới Thiệu (Introduction)

Unit Converter là một ứng dụng web đơn giản và dễ sử dụng giúp bạn chuyển đổi giữa các đơn vị đo lường khác nhau. Ứng dụng hỗ trợ chuyển đổi chiều dài (Length), cân nặng (Weight) và nhiệt độ (Temperature).

**Unit Converter is a simple and easy-to-use web application that helps you convert between different units of measurement. The application supports length, weight, and temperature conversions.**

---

## ✨ Tính Năng (Features)

### 🔹 Chuyển Đổi Chiều Dài (Length Conversion)
- Kilometer (km) ↔ Meter (m)
- Meter (m) ↔ Decimeter (dm)
- Centimeter (cm) ↔ Millimeter (mm)
- Và tất cả các kết hợp khác

**Supported units:** Kilometer, Meter, Decimeter, Centimeter, Millimeter

### 🔹 Chuyển Đổi Cân Nặng (Weight Conversion)
- Kilogram (kg) ↔ Gram (g)

**Supported units:** Kilogram, Gram

### 🔹 Chuyển Đổi Nhiệt Độ (Temperature Conversion)
- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

---

## 🚀 Cách Sử Dụng (How to Use)

### 📂 Cấu Trúc Dự Án (Project Structure)
```
unitConverterTest/
├── Convert/
│   ├── index.html          # Trang chuyển đổi chiều dài
│   ├── weight.html         # Trang chuyển đổi cân nặng
│   ├── temperature.html    # Trang chuyển đổi nhiệt độ
│   └── style.css           # Tệp định kiểu CSS chung
├── backEnd/
│   └── main.js             # Lôgic chuyển đổi JavaScript
├── css/
│   └── style.css           # Tệp CSS chính
└── README.md               # Tệp này
```

### 🌐 Để Chạy Ứng Dụng (To Run the Application)

1. **Mở trình duyệt web** (Open your web browser)
2. **Đi đến thư mục `Convert`** (Navigate to the `Convert` folder)
3. **Nhấp đúp vào `index.html`** hoặc **mở nó bằng trình duyệt** (Double-click `index.html` or open it with your browser)

Hoặc sử dụng **Live Server** nếu bạn dùng VS Code:
- Right-click vào `index.html` → **Open with Live Server**

### 🎯 Các Bước Chuyển Đổi (Conversion Steps)

#### Bước 1: Chọn Loại Chuyển Đổi (Step 1: Choose Conversion Type)
- Nhấp vào tab **Length** (Chiều dài), **Weight** (Cân nặng), hoặc **Temperature** (Nhiệt độ)

#### Bước 2: Nhập Giá Trị (Step 2: Enter Value)
- Nhập số bạn muốn chuyển đổi vào ô "Enter Value"
- Ví dụ: `5`, `10.5`, `100`, v.v.

#### Bước 3: Chọn Đơn Vị Nguồn (Step 3: Select Source Unit)
- Chọn đơn vị mà bạn muốn chuyển từ đó
- Từ dropdown **"Unit to convert from"**

#### Bước 4: Chọn Đơn Vị Đích (Step 4: Select Target Unit)
- Chọn đơn vị mà bạn muốn chuyển sang
- Từ dropdown **"Unit to convert to"**

#### Bước 5: Nhấn Nút Convert (Step 5: Click Convert Button)
- Nhấp vào nút **Convert** để xem kết quả
- Kết quả sẽ hiển thị bên dưới

---

## 💡 Ví Dụ Sử Dụng (Usage Examples)

### 📏 Ví Dụ 1: Chuyển Đổi Chiều Dài
```
Nhập giá trị: 1
Chọn từ: Kilometer
Chọn sang: Meter
Kết quả: 1 kilometer = 1000 meter
```

### ⚖️ Ví Dụ 2: Chuyển Đổi Cân Nặng
```
Nhập giá trị: 2.5
Chọn từ: Kilogram
Chọn sang: Gram
Kết quả: 2.5 kilogram = 2500 gram
```

### 🌡️ Ví Dụ 3: Chuyển Đổi Nhiệt Độ
```
Nhập giá trị: 0
Chọn từ: Celsius
Chọn sang: Fahrenheit
Kết quả: 0 celsius = 32 fahrenheit
```

---

## ⚙️ Công Nghệ Sử Dụng (Technologies Used)

- **HTML5** - Cấu trúc ứng dụng
- **CSS3** - Định kiểu giao diện
- **JavaScript (Vanilla)** - Lôgic xử lý chuyển đổi

---

## 🔧 Các Lỗi Thường Gặp (Common Issues)

### ❌ Lỗi: "Please enter a valid number"
**Nguyên nhân:** Bạn chưa nhập giá trị hoặc nhập giá trị không phải là số
**Giải pháp:** Hãy nhập một số hợp lệ (ví dụ: 5, 10.5, 100)

### ❌ Lỗi: Không thể mở tệp
**Nguyên nhân:** Đường dẫn tệp không chính xác
**Giải pháp:** Đảm bảo bạn đang mở tệp từ thư mục `Convert`

---

## 📝 Hỗ Trợ Chính Xác (Precision)

- Kết quả được làm tròn đến **2 chữ số thập phân**
- Ví dụ: `1 meter = 0.00 kilometer` (chứ không phải `0.001 km`)

---

## 🎨 Tùy Chỉnh Giao Diện (Customization)

Để tùy chỉnh giao diện:
1. Mở file `css/style.css`
2. Sửa đổi các thuộc tính CSS theo ý bạn
3. Làm mới trình duyệt (Ctrl+R hoặc Cmd+R)

---

## 📧 Liên Hệ & Hỗ Trợ (Support)

Nếu bạn gặp vấn đề hoặc có câu hỏi:
- Kiểm tra lại các bước sử dụng ở trên
- Đảm bảo rằng trình duyệt của bạn hỗ trợ JavaScript
- Xóa cache trình duyệt và tải lại

---

## 📄 Giấy Phép (License)

Dự án này được phát hành dưới dạng mã mở cho mục đích học tập.

---

**Chúc bạn sử dụng ứng dụng vui vẻ! 🎉**
**Enjoy using the application! 🎉**
