"use client";

import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <Input
      type="search"
      placeholder="Search Jobs"
      className="w-1/2 mx-auto -mt-4 text-slate-900"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
