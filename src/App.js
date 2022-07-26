import React, { useEffect, useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [starRating, updStar] = useState(0);
  useEffect(() => {
    let starArr = document.querySelectorAll('.star-icon');
    let clickedStar = false;

    const mouseOn = (event) => {
      // console.log(event.starValue);
      let starNumber = (event.target.id).substr(-1);
      // console.log(starNumber);
      let intStarNumber = +starNumber;

      starArr.forEach((item, index) => {
        if (index < intStarNumber)
          {
            item.classList.add('yellow');
          }
        else
          {
            item.classList.remove('yellow');
          }
      })

    }

    const mouseOut = (event) => {
      starArr.forEach((item) => {
        item.classList.remove('yellow');
      })
    }

    const clicked = (event) => {
      console.log(event.target.id);
      // console.log(event.starValue);
      let starNumber = (event.target.id).substr(-1);
      // console.log(starNumber);
      let intStarNumber = +starNumber;
      updStar(intStarNumber);

      starArr.forEach((item, index) => {
        if (index < intStarNumber)
          item.classList.add('orange');
        else
          item.classList.remove('orange');
      })

    }

    const nextButton = () => {
      window.location.reload();
    }

    (document.querySelector('.star-fit')).addEventListener('mouseleave', mouseOut);
    (document.querySelector('.next-btn')).addEventListener('click', nextButton);


    starArr.forEach((item, index) => {
      item.addEventListener('click', clicked);
      item.addEventListener('mouseover', mouseOn);
    });

  }, [])






  return (
    <>
      <div className="heading">
        <h2 className="heading-text">RATE THIS PICTURE</h2>
      </div>
      <div className="img-div">
        <img src="https://picsum.photos/400/300" alt="random-pic" className="img" />
      </div>
      <div className="star-div">
        <div className="star-fit">
          <span className="star">
            <i className="fa-solid fa-star star-icon fa-3x" id="star-1"></i>
          </span>
          <span className="star">
            <i className="fa-solid fa-star star-icon fa-3x" id="star-2"></i>
          </span>
          <span className="star">
            <i className="fa-solid fa-star star-icon fa-3x" id="star-3"></i>
          </span>
          <span className="star">
            <i className="fa-solid fa-star star-icon fa-3x" id="star-4"></i>
          </span>
          <span className="star">
            <i className="fa-solid fa-star star-icon fa-3x" id="star-5"></i>
          </span>
        </div>
      </div>
      <div className="rating-mssg-div">
        <h4 className="rating-mssg">You Rated {starRating} Star</h4>
      </div>
      <div className="btn-div">
        <button className="btn btn-warning btn-lg next-btn">NEXT</button>
      </div>
    </>
  );
}

export default App;
