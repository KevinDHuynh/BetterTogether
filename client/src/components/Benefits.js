import React from "react";

class benefits extends React.Component {
  render() {
    return (
      <div
        className=" zoneb container-row-space universal-lr-padding"
        id="benefits"
      >
        <section className="mar-top-zero">
          <ul className="container-row-space pad-left-zero">
            <li className="container-column mar-right-std ">
              <h3>Results guaranteed</h3>
              <p className="white p-small mar-top-zero">
                Better Together champions the proven method of the Compounding
                Intrest of Habits popularized by by New York Times best selling
                author <a href="https://jamesclear.com/">James Clear</a> in his
                book Atomic Habits.
              </p>
            </li>
            <li className="container-column mar-right-std  ">
              <h3>Completley free</h3>
              <p className="white p-small mar-top-zero">
                Better Together shall always be 100% free.The Better Together
                team believes that getting rid of barriers to self improvement
                shall cultivate a better society
              </p>
            </li>
            <li className="container-column ">
              <h3>Feeling lost?</h3>
              <p className="white p-small mar-top-zero">
                {" "}
                Pave your own path, or walk down other's. Better Together's
                Habit Recorder offers predefined feilds that make it easy to
                frame new habits to commit to and *search habits shared by
                Better Toghers community memebers*.{" "}
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default benefits;
