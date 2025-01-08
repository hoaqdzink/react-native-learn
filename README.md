# react-native-learn

# Tìm hiểu về Styling 

## Inline Styles
- Inline styles được định nghĩa trực tiếp trong thuộc tính `style` của một thành phần.
- Đây là cách đơn giản và nhanh chóng để áp dụng style, nhưng không phải là cách tốt nhất cho các ứng dụng phức tạp.

## StyleSheet
- `StyleSheet` là cách tốt hơn để quản lý style trong các ứng dụng lớn.
- Nó cho phép bạn định nghĩa các style trong một đối tượng riêng biệt và tái sử dụng chúng trong nhiều thành phần.


# Tìm hiểu về Layout và Flexbox

## `flexDirection` - Thuộc tính xác định hướng sắp xếp
`flexDirection` là một thuộc tính của Flexbox giúp sắp xếp các thành phần con trong View theo hướng nhất định.

### Các giá trị của `flexDirection`:
- **row**: Hàng ngang từ trái sang phải.
- **column (mặc định)**: Cột dọc từ trên xuống dưới.
- **row-reverse**: Hàng ngang ngược từ phải sang trái.
- **column-reverse**: Cột ngược từ dưới lên trên.

## `justifyContent`
- `justifyContent` là thuộc tính của Flexbox dùng để căn chỉnh các thành phần con dọc theo trục chính (hướng được xác định bởi `flexDirection`).
- **flex-start (mặc định)**: Căn các thành phần về đầu trục chính.
- **center**: Căn giữa trục chính.
- **flex-end**: Căn về cuối trục chính.
- **space-between**: Giãn đều khoảng cách giữa các thành phần, không có khoảng cách ở hai đầu.
- **space-around**: Giãn đều với khoảng đệm ở hai đầu.
- **space-evenly**: Giãn đều với khoảng cách bằng nhau từ hai đầu và giữa các thành phần.


## Các sự kiện phổ biến trong React Native
| **Event**         | **Component**                       | **Ý nghĩa**                                                           |
|-------------------|--------------------------------------|------------------------------------------------------------------------|
| `onPress`         | `Button`, `TouchableOpacity`, `View`, `Text` | Xử lý sự kiện khi nhấn vào một thành phần.                            |
| `onLongPress`     | `TouchableOpacity`, `TouchableHighlight` | Xử lý sự kiện khi nhấn giữ lâu một thành phần.                         |
| `onChangeText`    | `TextInput`                          | Xử lý khi người dùng nhập hoặc thay đổi văn bản.                       |
| `onSubmitEditing` | `TextInput`                          | Xử lý khi người dùng nhấn phím "Enter" hoặc hoàn thành nhập văn bản.   |
| `onFocus`         | `TextInput`                          | Xử lý khi một `TextInput` được focus (được chọn).                      |
| `onBlur`          | `TextInput`                          | Xử lý khi một `TextInput` bị mất focus.                                |
| `onScroll`        | `ScrollView`, `FlatList`, `SectionList` | Xử lý sự kiện khi người dùng cuộn nội dung trong danh sách hoặc màn hình. |
| `onPressIn`       | `TouchableOpacity`, `TouchableHighlight` | Xử lý sự kiện khi bắt đầu nhấn vào một thành phần.                     |
| `onPressOut`      | `TouchableOpacity`, `TouchableHighlight` | Xử lý sự kiện khi người dùng nhả tay ra khỏi một thành phần.           |
| `onEndReached`    | `FlatList`, `ScrollView`, `SectionList` | Xử lý khi người dùng cuộn đến cuối danh sách.                          |

---


# **React Native Navigation**

## **1. Giới thiệu**
**Navigation** là hệ thống điều hướng giữa các màn hình trong ứng dụng React Native. Dưới đây là các dạng điều hướng phổ biến:

---

## **2. Các dạng Navigation**

| **Dạng Navigation** | **Ý nghĩa**                                                   | **Sử dụng**                                    |
|---------------------|---------------------------------------------------------------|------------------------------------------------|
| **Stack Navigation** | Điều hướng dạng ngăn xếp (forward/backward như trình duyệt).   | `createStackNavigator()`                       |
| **Tab Navigation**   | Điều hướng theo tab (chuyển đổi giữa các màn hình chính).      | `createBottomTabNavigator()`, `createMaterialTopTabNavigator()` |
| **Drawer Navigation**| Điều hướng bằng menu dạng ngăn kéo từ cạnh màn hình.           | `createDrawerNavigator()`                      |
| **Nested Navigation**| Kết hợp nhiều dạng điều hướng trong một ứng dụng (lồng nhau).  | Kết hợp Stack, Tab, và Drawer.                 |

---

## **3. Cài đặt React Navigation**
Chạy lệnh để cài đặt thư viện:
```bash
npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-screens react-native-safe-area-context react-native-vector-icons react-native-animated
