function btn(){
  return 'btn';
}

class Slider{
  constructor(width, height, count){
    this.width = width;
    this.height = height;
    this.count = count;
  }

  naxSlide(){
    console.log('Moving forward');
  }

  prevSlide(){
    console.log('Moving back');
  }

  whoAmI(){
    console.log(this.width, this.height, this.count);
  }
}

//extends = наследует параметры родительского класса
//super(width, height, count); = перекидываем значения

class AutoSlider extends Slider{
  constructor(width, height, count, auto){
    super(width, height, count);
    this.auto = auto;
  }

  play(){
    console.log(`Autoplay: ${this.auto}`);
  }
}

// const slider = new AutoSlider(500, 500, 4, true);
// slider.whoAmI(); // 500 500 4
// slider.play(); // Autoplay: true

export {btn, AutoSlider};

// export default AutoSlider;