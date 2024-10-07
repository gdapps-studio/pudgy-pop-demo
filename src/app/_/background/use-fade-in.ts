import { config, useSpring } from '@react-spring/web';
import { Howl } from 'howler';

const sound = new Howl({
  src: ['/audios/whoosh.mp3'],
  html5: true,
});

export const useFadeIn = (delay = 0, onComplete?: () => void) => {
  const fadeInAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.wobbly,
    delay,
    onStart() {
      console.log('onStart');
      sound.play();
    },

    // onChange(result, ctrl, item) {
    //   console.log('value', result.value.opacity);
    //   if (result.value.opacity > 0.8 && !playedAlready.current) {
    //     sound.play();
    //     playedAlready.current = true;
    //   }
    // },
  });

  return fadeInAnim;
};
