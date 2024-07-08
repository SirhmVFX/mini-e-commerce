import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="bg-[#191919] p-10 md:p-20 flex flex-col items-center gap-6">
        <div className="flex gap-6 md:gap-10 flex-wrap justify-center">
          <Link href={"#"} className="text-white">
            {" "}
            About{" "}
          </Link>

          <Link href={"#"} className="text-white">
            {" "}
            Blog{" "}
          </Link>

          <Link href={"#"} className="text-white">
            {" "}
            Job{" "}
          </Link>

          <Link href={"#"} className="text-white">
            {" "}
            Press{" "}
          </Link>

          <Link href={"#"} className="text-white">
            {" "}
            Accessibility{" "}
          </Link>

          <Link href={"#"} className="text-white">
            {" "}
            Partners{" "}
          </Link>
        </div>

        <div className="flex gap-4">
          <CiFacebook className="text-white" />
          <CiTwitter className="text-white" />
          <CiInstagram className="text-white" />
        </div>
        <p className="text-white text-center">
          © 2024 Fullstack Mechanic. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
