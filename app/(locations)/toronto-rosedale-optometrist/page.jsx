import TorontoRosedaleOptometrist from "./TorontoRosedaleOptometrist";
export async function generateMetadata() {
  return {
    title: "360 Eyecare Yorkville Rosedale Toronto | Optometrist | Eye Doctor",
    description:
      "Get best eye care from team of trusted optometrist - 360 Eyecare Yorkville Rosedale. Book eye doctor for your eye exam or Call 416-901-2725!",
    openGraph: {
      title:
        "360 Eyecare Yorkville Rosedale Toronto | Optometrist | Eye Doctor",
      description:
        "Get best eye care from team of trusted optometrist - 360 Eyecare Yorkville Rosedale. Book eye doctor for your eye exam or Call 416-901-2725!",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/toronto-rosedale-optometrist/",
    },
  };
}

const page = () => {
  return <TorontoRosedaleOptometrist />;
};

export default page;
