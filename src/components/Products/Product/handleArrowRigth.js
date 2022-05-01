export function handleArrowRigth (setScrollX, setSlide, widthList) {
  let x = scrollX - Math.round(window.innerWidth / 2)
  if ((window.innerWidth - widthList) > x) {
    x = (window.innerWidth - widthList) + 112
    setScrollX(x)
    setSlide(3)
    return
  }
  setScrollX(x)
  setSlide((slide) => slide + 1)
}
