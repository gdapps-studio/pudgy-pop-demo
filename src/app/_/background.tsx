const BackgroundSkyGradient = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-sky-400 from-10% via-blue-300 via-30% to-indigo-50 to-70% -z-50"></div>
);

const BackgroundImage = (props: { children: React.ReactNode }) => (
  <div className="relative bg-main min-h-dvh bg-[40%_-100px] md:bg-[50%_-150px] bg-[length:300%_100%] md:bg-cover bg-no-repeat">
    <BackgroundSkyGradient />
    {props.children}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"></div>
    <div className="pinguine-bubble relative max-w-max overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image priority src="/pinguine-bubble.webp" alt="Pinguine" width={284} height={505} />
      </div>
      <Image src={pinguineSvg} alt="Bubble" width={483} />
    </div>
  </div>
);

export { BackgroundImage };
