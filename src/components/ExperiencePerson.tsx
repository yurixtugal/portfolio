interface ExperiencePersonProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const ExperiencePerson = (prop: { info: ExperiencePersonProps[] }) => {
  if (!prop) return null;
  const { info } = prop;
  return (
    <>
      <h2 id="experience" className="text-3xl font-bold text-center py-6">Experience</h2>
      <ul key="experience_1" className="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical">
        {info.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <li key={index}>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden lg:block lg:timeline-start lg:text-end lg:mb-7">
                  <time className="font-mono italic">
                    {item.year}
                  </time>
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="text-sm pb-2">{item.company}</div>
                  {item.description}
                </div>
                <div className="lg:hidden timeline-end lg:text-end mb-7">
                  <time className="font-mono italic">
                    {item.year}
                  </time>
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="text-sm pb-2">{item.company}</div>
                  {item.description}
                </div>
                <hr/>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-7">
                  <time className="font-mono italic">
                    {item.year}
                  </time>
                  <div className="text-lg font-black">{item.title}</div>
                  <div className="text-sm">{item.company}</div>
                  {item.description}
                </div>
                <hr />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export { ExperiencePerson };
