import styles from "../styles/Blog.module.css";
import Card from "@components/card/Card";
import Link from "next/link";

function SeeMore() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row text-center">
          <h1 className={styles.SectHeading}>How-To Guide</h1>
          <p className={styles.SectText}>
            Step-by-step tutorials on using Small Converter Tool
          </p>
        </div>
        {/* Row 1 */}
        <div className="row mt-4 mb-4">
          <div className="col-lg-4 col-sm-12 p-4">
            <Link href="/pdf_to_excel">
              <Card
                className="rounded"
                img={"/images/blogseven.png"}
                heading="HOW TO CONVERT PDF TO EXCEL"
                title="Convert PDF to Excel Online"
                text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
              />
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogthree.png"}
              heading="HOW TO CONVERT WORD TO PDF"
              title="How To Save a Google Doc as a PDF"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogfour.png"}
              heading="HOW TO PROTECT PDF"
              title="How to Encrypt PDF Online for Free"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="row mt-4 mb-4">
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogtwo.png"}
              heading="HOW TO ESIGN PDF"
              title="Digital Signatures Explained"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogeight.png"}
              heading="HOW TO CONVERT WORD TO PDF"
              title="How To Save a Google Doc as a PDF"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blognine.png"}
              heading="HOW TO PROTECT PDF"
              title="How to Encrypt PDF Online for Free"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="row mt-4 mb-4">
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogten.png"}
              heading="HOW TO CONVERT JPG TO PDF"
              title="Digital Signatures Explained"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogtwo.png"}
              heading="HOW TO CONVERT PDF TO WORD"
              title="How To Insert PDF Into Word"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogten.png"}
              heading="HOW TO CONVERT PNG TO PDF"
              title="Convert PNG to Word Online for Free"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SeeMore;
