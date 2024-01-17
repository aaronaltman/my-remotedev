"use client";
import { Input } from "./ui/input";

export default function SearchInput({ setSearchJobs, searchJobs }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("searchJobs", searchJobs);
      }}
    >
      <Input
        type="search"
        placeholder="Search Jobs"
        className="w-1/2 mx-auto -mt-4 text-slate-900"
        onChange={(e) => setSearchJobs(e.target.value)}
        value={searchJobs}
      />
    </form>
  );
}
