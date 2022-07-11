import $ from "jquery";

export const parralxItem = (containerClass, itemClass) => {
  $(window).on("scroll", () => {
    const image = $(`.${itemClass}`);
    const container = $(`.${containerClass}`);
    const $window = $(window);

    const containerOffsetTop = container.offset().top;
    const WindowOffsetTop = $window.scrollTop();
    const WindowOffsetBottom = WindowOffsetTop + $window.height();

    const ypost = -0.4 * (WindowOffsetBottom - containerOffsetTop);
    image.css("transform", `translateY(${ypost}px)`);
  });
};
