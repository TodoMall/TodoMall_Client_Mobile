export const isLaptop = () => {
  return window.innerWidth > 1024;
}

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth < 1024;
}

export const isMobile = () => {
  return window.innerWidth < 768;
}