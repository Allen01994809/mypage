import { FC, useEffect } from "react";
import p5 from 'p5';

const P5Component: FC<{
}> = () => {
  // TODO canvasとの接続ができるかどうかを確認する
  useEffect(() => {
    const canvas = new p5(() => {
    });
    return () => {
      canvas.remove();
    };
  }, []);
  return <></>
}

export default P5Component;
