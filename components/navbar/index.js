import NavbarStyle from "./style";
import Link from "next/link";
import Created from "components/Icons/create";
import HomeIcon from "components/Icons/home";
import UserIcon from "components/Icons/user";
import UsersIcon from "components/Icons/users";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/Home">
          <a>
            <HomeIcon height={25} width={25} />
            <p>Inicio</p>
          </a>
        </Link>
        <Link href="/request/createdRequest">
          <a>
            <Created height={25} width={25} />
            <p>Nuevo</p>
          </a>
        </Link>
        <Link href="/Compose/Request">
          <a>
            <UsersIcon height={25} width={25} />
            <p>Usuarios</p>
          </a>
        </Link>
        <Link href="/Compose/Request">
          <a>
            <UserIcon height={25} width={25} />
            <p>Admin</p>
          </a>
        </Link>
      </nav>
      <style jsx>{NavbarStyle}</style>
    </>
  );
}
