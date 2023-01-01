import Card from "@components/card/Card";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <>
      <br />
      {/* Section One */}
      <div className="container mt-4 mb-4">
        {/* Section One */}
        <div className="row text-center">
          <h1 className={styles.SectHeading}>The Small Converter Tool Blog</h1>
          <p className={styles.SectText}>
            The best tips and tricks on managing digital documents
          </p>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogone.png"}
              heading="ENGINEERING"
              title="Advantages of Using Declarative Frontend Logic to Combat the SetStep Anti-pattern (Part 2)"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-6 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogone.png"}
              heading="ENGINEERING"
              title="Advantages of Using Declarative Frontend Logic to Combat the SetStep Anti-pattern (Part 2)"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
        </div>
        <div className="row text-end pe-4">
          <Link href="/seeMore">
            <span className="text-primary">See More</span>{" "}
            <img
              className="text-primary"
              src="icons/layer1.png"
              alt=""
              srcSet=""
            />
          </Link>
        </div>
      </div>

      {/* Section Two */}
      <div className={`container-fluid ${styles.containerBg}`}>
        <div className="container">
          {/* Section Two */}
          <div className="row text-center">
            <h1 className={styles.SectHeading}>How-To Guide</h1>
          </div>
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
          <div className="row text-end pe-4">
            <Link href="/seeMore">
              <span className="text-primary">See More</span>{" "}
              <img
                className="text-primary"
                src="icons/layer1.png"
                alt=""
                srcSet=""
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Section Three */}
      <div className="container mt-4 mb-4">
        {/* Section Three */}
        <div className="row text-center">
          <h1 className={styles.SectHeading}>All Articles</h1>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogsix.png"}
              heading="ENGINEERING"
              title="Advantages of Using Declarative Frontend Logic to Combat the SetStep Anti-pattern (Part 2)"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogsix.png"}
              heading="ENGINEERING"
              title="Limitations of Scaling a Frontend App With the SetStep Anti-Pattern (Part 1)"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
          <div className="col-lg-4 col-sm-12 p-4">
            <Card
              className="rounded"
              img={"/images/blogfive.png"}
              heading="ENGINEERING"
              title="Staying Responsive While Working on Long-term Initiatives"
              text="In the previous article, we explored SetStep Anti-Pattern limitations. Let’s take a look at how we combat it with declarative logic!"
            />
          </div>
        </div>
        <div className="row text-end pe-4">
          <Link href="/seeMore">
            <span className="text-primary">See More</span>{" "}
            <img
              className="text-primary"
              src="icons/layer1.png"
              alt=""
              srcSet=""
            />
          </Link>
        </div>
      </div>
      {/* Section 4 */}
      <div className={`container-fluid ${styles.containerBg}`}>
        <div className="container">
          <div className="row p-4">
            <div className="col"></div>
            <div className="col-lg-6 text-center p-4">
              <p className={styles.sectText}>
                We are the first PDF software you will actually like. With the
                Small Converter Tool Blog, you&apos;ll find various how-to
                tutorials and productivity guides to help make PDF handling
                easy, just for you.
              </p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
