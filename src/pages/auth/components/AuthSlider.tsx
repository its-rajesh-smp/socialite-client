function AuthSlider() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center lg:w-[60%]">
      <div className="absolute z-10">
        <h1 className="text-7xl font-bold text-white">Socialite</h1>

        <p className="text-right font-semibold text-white">
          An another way to connect
        </p>
      </div>
      <img
        className="h-full w-full object-cover"
        src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2021/05/mainbg.jpg"
      />
    </div>
  );
}

export default AuthSlider;
