

export default function Home({ heading, par, btnOne, btnTwo, imgScr }) {
  return (
    <div className="home flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 ">
      <div className="left text-white text-center md:text-left md:max-w-md space-y-6 animate-fade-in w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">{heading}</h1>
        <p className="text-lg md:text-xl font-light">{par}</p>
        <div className="space-x-4 mt-4">
          <button className="get-started-btn px-6 py-3 bg-white text-green-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            {btnOne}
          </button>
          <button className="login-btn px-6 py-3 bg-green-700 rounded-lg shadow-lg text-gray-700 hover:bg-green-800 hover:scale-105 transition-all duration-300 ease-in-out">
            {btnTwo}
          </button>
        </div>
      </div>

      <div className="home-image mt-10 md:mt-0 md:w-1/2  w-1/2">
        <img
          src={imgScr}
          alt="a hand with directional arrow"
          className="w-96 rounded-lg shadow-lg h-60"
        />
      </div>
    </div>
  );
}

