import SearchInput from "./search-input";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

export default function PrimaryHeader({ setSearchJobs, searchJobs }) {
  return (
    <section id="HeaderSection">
      <div className="bg-[url('https://bytegrad.com/course-assets/js/2/pattern.svg')] bg-cover bg-center bg-blue-600 pt-6 pb-20">
        <header className="max-w-5xl mx-auto text-white">
          <div className="flex gap-10 justify-center items-center">
            <img
              src="https://bytegrad.com/course-assets/js/2/logo.svg"
              alt="Rmt|DEV"
              className="w-24 h-24"
            />
            <p>|</p>
            <p className="flex gap-2 justify-center items-center text-sm">
              Bookmarks <BookmarkFilledIcon />
            </p>
          </div>
          <SearchInput searchJobs={searchJobs} setSearchJobs={setSearchJobs} />
        </header>
      </div>
    </section>
  );
}
