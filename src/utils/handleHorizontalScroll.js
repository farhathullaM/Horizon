export const handleHorizontalScroll = (ref) => {
    const handleWheelScroll = (e) => {
      if (ref.current) {
        e.preventDefault(); // Prevent vertical scrolling
        ref.current.scrollLeft += e.deltaY; // Scroll horizontally
      }
    };
  
    return {
      attach: () => {
        if (ref.current) {
          ref.current.addEventListener("wheel", handleWheelScroll, { passive: false });
        }
      },
      detach: () => {
        if (ref.current) {
          ref.current.removeEventListener("wheel", handleWheelScroll);
        }
      },
    };
  };
  