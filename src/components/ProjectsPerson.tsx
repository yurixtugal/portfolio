interface ProjectsPersonProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  link: string;
}

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const ProjectsPerson = (prop: { info: ProjectsPersonProps[] }) => {
  if (!prop) return null;
  const { info } = prop;
  return (
    <div className="bg-base-200" id="projects">
      <h2 className="text-3xl font-bold text-center py-6">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center pb-10">
        {info.map((item) => (
          <div className="card w-96 bg-base-100 shadow-xl mb-4">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions pt-4">
                {item.tech.map((tech) => (
                  <div className="badge badge-outline">{tech}</div>
                ))}
              </div>
              <div className="card-actions pt-4">
                <a href={item.github} target="_blank" rel="noreferrer">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                  </svg>
                </a>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProjectsPerson };
