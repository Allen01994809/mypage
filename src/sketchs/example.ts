import p5 from "p5";
const exampleSketch = (p5: p5) => {
  // variables
  const CANVAS_META = {
    WIDTH: 800,
    HEIGHT: 800,
  };

  const points = new Array(2000).fill(0).map(() => {
    return {
      position: p5.createVector(
        Math.random() * CANVAS_META.WIDTH,
        Math.random() * CANVAS_META.HEIGHT,
      ),
      color: [
        20 * Math.random() + 10, // 色相
        40 * (1 - Math.random() * Math.random()) + 30, // 彩度
        30 + Math.random() * 20,  // 輝度
      ],
    };
  });

  // lifecycles
  p5.setup = () => {
    p5.createCanvas(CANVAS_META.WIDTH, CANVAS_META.HEIGHT);
    p5.background(0, 0, 0, 255);
    p5.colorMode(p5.HSL, 100);
    p5.stroke(100, 100, 100, 0);
    p5.noiseSeed(Math.random() * 1000);
    p5.background(0, 0, 0, 255);
    p5.background(
        20 * Math.random() + 50, // 色相
        40 * (1 - Math.random() * Math.random()) + 10, // 彩度
        50// 輝度
    );
  };

  p5.draw = () => {
    // p5.background(0, 0, 0, 0);
    points.forEach((val, index) => {
      val.position.set((val.position.x + CANVAS_META.WIDTH) % CANVAS_META.WIDTH, (CANVAS_META.HEIGHT + val.position.y) % CANVAS_META.HEIGHT)

      const group = index % 10;
      val.position.add(Math.sin(val.position.y / 40 + group / 3) - 0.2, -2);

      val.position.add(
        (p5.noise(val.position.x / 50, val.position.y / 50, group) - 0.5) * 3,
        (p5.noise(val.position.x / 50 + 0.0009765625, val.position.y / 50 + 0.0009765625, group) - 0.5) * 10,
      );

      p5.fill(val.color);
      p5.square(val.position.x, val.position.y, 5);

    });
  };
};

export default exampleSketch;
