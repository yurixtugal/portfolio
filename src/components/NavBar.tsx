import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

interface NavBarProps {
  links: {
    name: string;
    path: string;
  }[],
  logo: string

}


const NavBar = ({
  info
}: {info: NavBarProps}) => {
  const menu = info.links;

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{info.logo}</a>
      </div>
      <div className="hidden sm:flex-none sm:block">
        <ul className="menu menu-horizontal px-1">
          {menu.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end sm:hidden">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Bars3BottomRightIcon className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu.map((item) => (
              <li key={item.name}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
