import { useEffect, useState } from "react";
// import axios from "axios";
import AXIOS from "../../shared/api.js";
// import { useSelector } from "react-redux/es/exports";
import Carousel from "react-bootstrap/Carousel";
import "./dashboard.css";

export const Dashboard = () => {
  // const { auth_token } = useSelector((state) => state.AuthReducer);
  const [data, setData] = useState("");

  useEffect(() => {
    // axios
    //   .get("https://alkemapi.indusnettechnologies.com/api/cms/banner/E", {
    //     headers: { Authorization: `Bearer ${auth_token}` },
    //   })
    //   .then((res) => {
    //     setData(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log("Error--->", err);
    //   });
    AXIOS
      .get("/api/cms/banner/E")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("Error--->", err);
      });
  }, []);


  return (
    <>
      <div className="top_div">
        <h2>Dashboard</h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut
        similique dignissimos quod cupiditate earum, impedit facilis nihil
        adipisci ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit placeat maxime laborum harum amet. Maxime illo sapiente
        aspernatur quo consequatur hic nulla, sint atque nam, quidem error porro
        perferendis sed id itaque, voluptatum autem vel facere cupiditate vitae
        sit. Perspiciatis consectetur amet delectus dolor praesentium. Porro eum
        quidem praesentium ducimus.
      </div>
      <hr />

      <div className="bottom_div">
        <Carousel variant="dark">
          {data ? (
            data.map((ele, i) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 slider_img"
                    src={ele.image_url}
                    alt={ele.banner_id}
                  />
                  <Carousel.Caption>
                    <h3>{i}th slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          ) : (
           null
          )}
        </Carousel>
      </div>
    </>
  );
};
