import React, { useState, useEffect } from "react";
// import data from "./clientsReviews";
import "./reviews.css";
const Reviews = () => {
  const data = [
    {
      id: 1,
      name: "Antanas",
      review: "Labai puikus dizainas",
    },
    {
      id: 2,
      name: "Jonmas",
      review: "Nuostabus puslapis",
    },
    {
      id: 3,
      name: "Moniak",
      review: "Nesu maciusi geresnio puslapio",
    },
    {
      id: 4,
      name: "dgrgr",
      review: "Labai puikus dizainas",
    },
    {
      id: 5,
      name: "rrh",
      review: "Nuostabus puslapis",
    },
    {
      id: 6,
      name: "rhthth",
      review: "Nesu maciusi geresnio puslapio",
    },
  ];

  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section>
      <div className="background">
        <div className="title">
          <h2>ATSILIEPIMAI</h2>
        </div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, review } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === person.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <h4>{name}</h4>
              <p>{review}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          -
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          +
        </button>
      </div>
    </section>
  );
};

export default Reviews;
