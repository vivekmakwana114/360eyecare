

import SubHeader from "components/SubHeader";

import BlogsPage from "../../../components/blog/BlogsPage.js"; // Adjust the path as needed

const Page = async () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Blog" />
      <BlogsPage />
    </main>
  );
};

export default Page;
