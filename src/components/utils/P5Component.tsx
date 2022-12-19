import { FC, useEffect } from "react";
import p5 from 'p5';

const P5Component: FC<{
  sketch: (p: p5) => void;
}> = ({
  sketch,
}) => {
  // TODO canvasとの接続ができるかどうかを確認する
  useEffect(() => {
    const canvas = new p5(sketch);
    return () => {
      canvas.remove();
    };
  }, []);
  return <></>
}

export default P5Component;
