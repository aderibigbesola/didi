"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
const pathFormat = (str: string) => {
  return str
    .replace("-", " ")
    .split(" ")
    .map((sub_str) => sub_str.charAt(0).toUpperCase() + sub_str.slice(1))
    .join(" ");
};

export default function BreadCrumb() {
  const path = usePathname();
  const paths = path.split("/").filter((path) => path !== "");

  return (
    <>
      <nav className="flex gap-2">
        <Link href={"/"} className="text-gray-500">
          Home
        </Link>
        <p>/</p>
        {paths.map((path, index) => {
          path = pathFormat(path);
          return (
            <Fragment key={path}>
              {index + 1 <= paths.length ? (
                <p>{path} </p>
              ) : (
                <>
                  <Link
                    href={"/" + paths.slice(0, index + 1).join("/")}
                    className="text-gray-500"
                  >
                    {path}
                  </Link>
                  <p>/</p>
                </>
              )}
            </Fragment>
          );
        })}
      </nav>
    </>
  );
}
