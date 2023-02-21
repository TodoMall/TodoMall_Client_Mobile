export const isLaptop = window.innerWidth > 1024;

export const isTablet = window.innerWidth > 768 && window.innerWidth < 1024;

export const isMobile = window.innerWidth < 768;

export const getMaxWidth = () => {
  if (isLaptop) {
    return "64rem";
  }

  if (isTablet) {
    return "48rem";
  }

  return "100%";
}