import { css } from 'styled-components';

// Định nghĩa các breakpoint chính
export const sizes = {
  xs: 480,  // Mobile
  sm: 768,  // Tablet
  md: 992,  // Small laptops
  lg: 1200, // Desktops
  xl: 1600  // Large screens
};

// Media query helper - giúp tạo media query đơn giản
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// Custom media query - cho các trường hợp đặc biệt
media.custom = (size) => (...args) => css`
  @media (max-width: ${size}px) {
    ${css(...args)};
  }
`;

// Thay đổi hệ số tỷ lệ cho kích thước cực nhỏ
export const responsiveProp = (baseProp, factor = 0.85) => {
  return {
    default: baseProp,
    lg: baseProp * Math.pow(factor, 1),
    md: baseProp * Math.pow(factor, 2),
    sm: baseProp * Math.pow(factor, 3),
    // Đảm bảo kích thước tối thiểu cho xs
    xs: Math.max(baseProp * Math.pow(factor, 3.5), baseProp * 0.7)
  };
};

// Đảm bảo khoảng cách tối thiểu
export const spacing = {
  xs: {
    default: 4,
    lg: 4,
    md: 4,
    sm: 3,
    xs: 2, // Giá trị tối thiểu
  },
  sm: {
    default: 8,
    lg: 7,
    md: 6,
    sm: 5,
    xs: 4, // Giá trị tối thiểu
  },
  md: {
    default: 16,
    lg: 14,
    md: 12,
    sm: 10,
    xs: 8, // Giá trị tối thiểu
  },
  lg: {
    default: 24,
    lg: 20,
    md: 18,
    sm: 15,
    xs: 12, // Giá trị tối thiểu
  },
  xl: {
    default: 32,
    lg: 28,
    md: 24,
    sm: 20,
    xs: 16, // Giá trị tối thiểu
  }
};

// Cập nhật Font sizes với giá trị tối thiểu
export const fontSizes = {
  xs: {
    default: 0.75,
    lg: 0.72,
    md: 0.7,
    sm: 0.65,
    xs: 0.65, // Đặt kích thước tối thiểu
  },
  sm: {
    default: 0.875,
    lg: 0.84,
    md: 0.82,
    sm: 0.78,
    xs: 0.75, // Đặt kích thước tối thiểu
  },
  md: {
    default: 1,
    lg: 0.95,
    md: 0.9,
    sm: 0.85,
    xs: 0.8, // Đặt kích thước tối thiểu
  },
  lg: {
    default: 1.25,
    lg: 1.2,
    md: 1.15,
    sm: 1,
    xs: 0.95, // Đặt kích thước tối thiểu
  },
  xl: {
    default: 1.5,
    lg: 1.4,
    md: 1.3,
    sm: 1.2,
    xs: 1.1, // Đặt kích thước tối thiểu
  },
  xxl: {
    default: 2,
    lg: 1.8,
    md: 1.6,
    sm: 1.4,
    xs: 1.25, // Đặt kích thước tối thiểu
  },
  xxxl: {
    default: 2.5,
    lg: 2.2,
    md: 1.9,
    sm: 1.6,
    xs: 1.4, // Đặt kích thước tối thiểu
  }
};

// Theme variables - kết nối với CSS variables
export const themeVars = {
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  bgColor: 'var(--bg-color)',
  textColor: 'var(--text-color)',
  panelBg: 'var(--panel-bg)',
  borderColor: 'var(--border-color)',
  buttonBg: 'var(--button-bg)',
  buttonColor: 'var(--button-color)',
  buttonHover: 'var(--button-hover)',
  errorColor: '#ff6b6b',
  errorBg: 'var(--error-bg)'
};