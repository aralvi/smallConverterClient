import Testimonial from "@components/testimonial/Testimonial";

function Testimonials() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col">
            <h2 className="text-center fw-bold">Ratings and Reviews</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              illo hic. Aperiam voluptatem{" "}
            </p>
            <p className="text-center text-muted">
              <b className="fw-bold text-warning">4.9</b> out of 5 —{" "}
              <small>23 Ratings</small>
            </p>
          </div>
        </div>
      </div>
      <div className="contianer-fluid bgImage p-4">
        <div className="container p-4">
          <div className="row">
            <div className="col">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bgImage {
          background-image: url("images/testimonialbg.png");
          background-repeat: no-repeat;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  );
}

export default Testimonials;
