import p5 from "p5";
const exampleSketch = (p5: p5) => {
  // variables
  const CANVAS_META = {
    WIDTH: 800,
    HEIGHT: 800,
  };

  const points = new Array(900).fill(0).map(() => {
    const randomTheta = Math.random() * Math.PI * 2;
    const randomPosition = (1 - Math.random() * Math.random());
    return {
      position: p5.createVector(
        (Math.cos(randomTheta) * CANVAS_META.WIDTH / 2) * randomPosition + CANVAS_META.WIDTH / 2,
        (Math.sin(randomTheta) * CANVAS_META.HEIGHT / 2) * randomPosition + CANVAS_META.HEIGHT / 2 + 500,
      ),
      color: [
        100 * Math.random(), // 色相
        100 * (1 - Math.random() * Math.random()), // 彩度
        70 // 輝度
      ],
    };
  });

  // lifecycles
  p5.setup = () => {
    p5.createCanvas(CANVAS_META.WIDTH, CANVAS_META.HEIGHT);
    p5.colorMode(p5.HSL, 100);
    p5.stroke(100, 100, 100, 0);
  };

  p5.draw = () => {
    p5.background(250);
    points.forEach((val) => {
      val.position.set((val.position.x + CANVAS_META.WIDTH) % CANVAS_META.WIDTH, (CANVAS_META.HEIGHT + val.position.y) % CANVAS_META.HEIGHT)
      val.position.add(0, -2);
      val.position.add(
        (p5.noise(val.position.x / 50, val.position.y / 50) - 0.5) * 2,
        (p5.noise(val.position.x / 50 + 0.0009765625, val.position.y / 50 + 0.0009765625) - 0.5) * 10,
      );

      p5.fill(val.color);
      p5.ellipse(val.position.x, val.position.y, 10, 10);

    });
  };
};

export default exampleSketch;
