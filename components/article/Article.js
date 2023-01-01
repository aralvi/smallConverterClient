import styles from "../article/Article.module.css";
import Card from "@components/card/Card";
import Link from "next/link";

export const Article = (props) => {
  return (
    <>
      <div className="container-fluid">
        {/* Article */}
        {/* Image */}
        <img className={`img-fluid ${styles.contain}`} src={props.img} alt="" />
        <div className="container">
          <div className="row text-center">
            <div className="col">
              {/* Heading */}
              <h1 className={styles.ArtHeading}>{props.heading}</h1>
              {/* Details */}
              <p className={styles.ArtDetails}>{props.details}</p>
            </div>
          </div>
          <div className="row">
            <p className={styles.ArtText}>{props.text1}</p>
            <p className={styles.ArtText}>{props.text2}</p>
            <p className={styles.ArtText}>{props.text3}</p>
          </div>
          {/* Steps */}
          <div className="row">
            <p className={styles.StepsHeading}>{props.list}</p>
            {/* List */}
            <ol className="list-group-numbered">
              <li className="list-group-item d-flex  align-items-start m-2">
                <div className="ms-2 me-auto">
                  <div className={`fw-bold ${styles.stepList}`}>
                    {props.point1}
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start m-2">
                <div className="ms-2 me-auto">
                  <div className={`fw-bold ${styles.stepList}`}>
                    {props.point2}
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start m-2">
                <div className="ms-2 me-auto">
                  <div className={`fw-bold ${styles.stepList}`}>
                    {props.point3}
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start m-2">
                <div className="ms-2 me-auto">
                  <div className={`fw-bold ${styles.stepList}`}>
                    {props.point4}
                  </div>
                </div>
              </li>
            </ol>
          </div>
          {/* Video */}
          <div className="row">
            <img src="/images/video.png" alt="" />
          </div>
          {/* Other Details */}
          <div className="row">
            <div className="col">
              {/* Heading */}
              <h1 className={styles.ArtHeading}>{props.otherHeading}</h1>
              {/* Details */}
              <p className={styles.ArtDetails}>{props.otherDetails}</p>
              {/* Heading */}
              <h1 className={styles.ArtHeading}>{props.otherHeading1}</h1>
              <p className={styles.ArtText}>{props.othertext1}</p>
              <p className={styles.ArtText}>{props.othertext2}</p>
              <p className={styles.ArtText}>{props.othertext3}</p>
            </div>
          </div>
          {/* Comment */}
          <div className="row">
            <div
              className="col-lg-4  card w-30 border-0"
              style={{ backgroundColor: "#F9F9F9" }}
            >
              <div class="card-body p-4 ">
                <div className="row">
                  <div class="col-3">
                    <img className="img-fluid" src={props.comment} alt="" />
                  </div>
                  <div class="col-9  pt-2 align-start">
                    <h5>{props.name}</h5>
                    <p class="small">{props.title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
          {/* Related Articles */}
          <div className="container mt-4 mb-4">
            <div className="row text-center">
              <h1 className={styles.SectHeading}>Related Articles</h1>
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
            <div className="row">
              {" "}
              <div className="row text-end ">
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
        </div>
      </div>
    </>
  );
};
