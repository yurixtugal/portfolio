interface HeroPersonProps {
  title: string;
  content: string;
  image: string;
  button: string;
}

const HeroPerson = (
  {info}: {info: HeroPersonProps}
) => {
  return (
    <div className="hero min-h-screen bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:mx-24">
        <img src={info.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{info.title}</h1>
          <p className="py-6">
          {info.content}
          </p>
          <button className="btn btn-primary">{info.button}</button>
        </div>
      </div>
    </div>
  );
};

export { HeroPerson };
