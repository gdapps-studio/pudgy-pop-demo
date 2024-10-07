import { BackgroundSkyGradient } from './background-sky-gradient';
import { GameElements } from './penguine-bubble-with-text';

const BackgroundImage = (props: { children: React.ReactNode }) => (
  <div className="relative bg-main min-h-dvh bg-[40%_-100px] md:bg-[50%_-150px] bg-[length:300%_100%] md:bg-cover bg-no-repeat">
    <BackgroundSkyGradient />
    <GameElements />
    {props.children}
  </div>
);

export { BackgroundImage };
