import SubHeader from "components/SubHeader";

import BlogsPage from "../../../components/blog/BlogsPage.js"; // Adjust the path as needed

export async function generateMetadata() {
  return {
    title: "360 Eyecare Blog - Eye Care, Eyewear, Vision Care & More",
    description:
      "Our blog helps readers to know about eye care, dry eyes, eye emergency, eye examination, contact lenses, sunglasses and many more. Read now!",
    openGraph: {
      title: "360 Eyecare Blog - Eye Care, Eyewear, Vision Care & More",
      description:
        "Our blog helps readers to know about eye care, dry eyes, eye emergency, eye examination, contact lenses, sunglasses and many more. Read now!",
      url: "https://www.360eyecare.ca/blog/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/blog/",
    },
  };
}

const Page = async () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Blog" />
      <BlogsPage />
    </main>
  );
};

export default Page;
