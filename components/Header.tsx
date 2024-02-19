"use client";

import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b py-4 w-full ml-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-bg-gray-800 text-3xl font-semibold">TODO APP</h1>
        <div className="flex items-center gap-5">
          <Link href="/todos">List</Link>
          <Link href="/add">Add</Link>
        </div>
      </div>
    </header>
  );
};