/**
 * DeviceDetect Utility
 * Cung cấp các phương thức để phát hiện thiết bị, kích thước màn hình
 * và tối ưu hóa giao diện cho các thiết bị khác nhau
 */
import React from 'react';

// Kiểm tra xem thiết bị hiện tại có phải là thiết bị di động
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  return Boolean(
    userAgent.match(/Android/i) ||
    userAgent.match(/iPhone/i) ||
    userAgent.match(/iPad/i) ||
    userAgent.match(/iPod/i) ||
    userAgent.match(/BlackBerry/i) ||
    userAgent.match(/Windows Phone/i) ||
    userAgent.match(/Opera Mini/i) ||
    userAgent.match(/IEMobile/i)
  );
};

// Kiểm tra xem thiết bị hiện tại có phải là tablet
export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  return Boolean(
    userAgent.match(/iPad/i) ||
    (userAgent.match(/Android/i) && !userAgent.match(/Mobile/i)) ||
    (userAgent.match(/Tablet/i))
  );
};

// Kiểm tra xem thiết bị hiện tại có phải là desktop
export const isDesktop = () => {
  return !isMobile() && !isTablet();
};

// Lấy kích thước màn hình hiện tại
export const getScreenSize = () => {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

// Trả về device type dựa trên kích thước màn hình
export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  
  if (width <= 480) return 'mobile';
  if (width <= 768) return 'tablet';
  if (width <= 1200) return 'laptop';
  return 'desktop';
};

// Cập nhật hàm getResponsiveFontSize
export const getResponsiveFontSize = (baseSize = 14) => {
  const deviceType = getDeviceType();
  
  switch (deviceType) {
    case 'mobile':
      return Math.max(baseSize - 1, 12); // Đảm bảo không nhỏ hơn 12px
    case 'tablet':
      return Math.max(baseSize - 0.5, 13); // Đảm bảo không nhỏ hơn 13px
    default:
      return baseSize; // 14px
  }
};

// Thêm hàm để tối ưu cho màn hình touch
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
};

// Thêm hàm trả về kích thước tối thiểu an toàn cho touch
export const getMinTouchSize = () => {
  return isTouchDevice() ? 44 : 32; // Apple recommends 44px minimum
};

// Hook useWindowSize để theo dõi kích thước màn hình
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};