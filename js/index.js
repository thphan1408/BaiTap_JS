// BÀI TẬP 1
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    Lương 1 ngày: 100.000
    Số ngày làm
    Lương: lương 1 ngày * số ngày làm
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến soNgayLam, luong1Ngay, luong
    B2: Gán giá trị cho biến soNgayLam, luong1Ngay
    B3: Tính lương: luong = soNgayLam * luong1Ngay
    B4: In kết quả luong ra console
*/

// Khối 3: Output
/*
    Lương 1 ngày
    Số ngày làm
    Lương
*/

var soNgayLam = 11;
var luong1Ngay = 100000;
var luong = 0;

luong = soNgayLam * luong1Ngay;
luong = luong.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

console.log("**************************************");
console.log("Bài tập 1");
console.log("Lương 1 ngày: " + luong1Ngay);
console.log("Số ngày làm: " + soNgayLam);
console.log("Lương: " + luong);
console.log("**************************************");

// BÀI TẬP 2
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    5 số thực
    Giá trị trung bình của 5 số thực
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến so1, so2, so3, so4, so5, giaTriTrungBinh
    B2: Gán giá trị cho biến so1, so2, so3, so4, so5
    B3: Tính giá trị trung bình: giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5
    B4: In kết quả giaTriTrungBinh ra console
*/

// Khối 3: Output
/*
    Giá trị trung bình của 5 số thực
*/

var so1 = 1;
var so2 = 2;
var so3 = 3;
var so4 = 4;
var so5 = 5;
var giaTriTrungBinh = 0;

giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

console.log("**************************************");
console.log("Bài tập 2");
console.log("Giá trị trung bình của 5 số thực: " + giaTriTrungBinh);
console.log("**************************************");

// BÀI TẬP 3
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    Giá USD là 23.500 VND
    Số tiền USD cần đổi sang VND
    Số tiền VND sau khi đổi
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến giaUSD, soTienUSD, soTienVND
    B2: Gán giá trị cho biến giaUSD, soTienUSD
    B3: Tính số tiền VND sau khi đổi: soTienVND = soTienUSD * giaUSD
    B4: In kết quả soTienVND ra console
*/

// Khối 3: Output
/*
    Số tiền VND sau khi đổi
*/

const giaUSD = 23500;
var soTienUSD = 10;
var soTienVND = 0;

soTienVND = soTienUSD * giaUSD;
soTienVND = soTienVND.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

console.log("**************************************");
console.log("Bài tập 3");
console.log("Số tiền VND sau khi đổi: " + soTienVND);
console.log("**************************************");

// BÀI TẬP 4
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    Chiều dài hình chữ nhật
    Chiều rộng hình chữ nhật
    Chu vi hình chữ nhật
    Diện tích hình chữ nhật
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến chieuDai, chieuRong, chuVi, dienTich
    B2: Gán giá trị cho biến chieuDai, chieuRong
    B3: Tính chu vi: chuVi = (chieuDai + chieuRong) * 2
    B4: Tính diện tích: dienTich = chieuDai * chieuRong
    B5: In kết quả chuVi, dienTich ra console
*/

// Khối 3: Output
/*
    Chiều dài
    Chiều rộng
    Chu vi
    Diện tích
*/

var chieuDai = 10;
var chieuRong = 5;
var chuVi = 0;
var dienTich = 0;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;
console.log("**************************************");
console.log("Bài tập 4");
console.log("Chiều dài: " + chieuDai);
console.log("Chiều rộng: " + chieuRong);
console.log("Chu vi: " + chuVi);
console.log("Diện tích: " + dienTich);
console.log("**************************************");

// BÀI TẬP 5: Tổng 2 ký số
// MÔ HÌNH 3 KHỐI
// Khối 1: Input
/*
    Số có 2 chữ số
    Tổng 2 ký số
*/

// Khối 2: Các bước xử lý
/*
    B1: Tạo biến soCo2ChuSo, tong2KySo
    B2: Gán giá trị cho biến soCo2ChuSo
    B3: Tính tổng 2 ký số: tong2KySo = soCo2ChuSo % 10 + Math.floor(soCo2ChuSo / 10)
    B4: In kết quả tong2KySo ra console
*/

// Khối 3: Output
/*
    Tổng 2 ký số
*/

var soCo2ChuSo = 99;
var tong2KySo = 0;

tong2KySo = soCo2ChuSo % 10 + Math.floor(soCo2ChuSo / 10);

console.log("**************************************");
console.log("Bài tập 5");
console.log("Tổng 2 ký số: " + tong2KySo);
console.log("**************************************");
