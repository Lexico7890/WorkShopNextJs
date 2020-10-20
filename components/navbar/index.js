import NavbarStyle from "./style";
import Link from "next/link";
import Created from "components/Icons/create";
import HomeIcon from "components/Icons/home";
import UserIcon from "components/Icons/user";
import UsersIcon from "components/Icons/users";
import useUser, { USER_STATES } from "hooks/useUser";
import { useEffect } from "react";

export default function Navbar() {
  const user = useUser();
  return (
    <>
      {user === USER_STATES.NOT_KNOW || user === USER_STATES.NOT_LOGGED ? (
        <p>nada</p>
      ) : (
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
          <Link href="/userPage/User">
            <a>
              <UsersIcon height={25} width={25} />
              <p>Usuarios</p>
            </a>
          </Link>
          <Link href={`/adminPage/admin/${user.id}`}>
            <a>
              <UserIcon height={25} width={25} />
              <p>Admin</p>
            </a>
          </Link>
        </nav>
      )}

      <style jsx>{NavbarStyle}</style>
    </>
  );
}
