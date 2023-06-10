import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LoginContext } from "../../App";
// import ImgeProductWrapper from "../../components/DashboardTemplate/DashboardTemplateWrapper";
import WelcomeStyle from "./Welcome";
import expressImg2 from "../../components/DashboardTemplate/img/express.png";
import axror from "../../components/DashboardTemplate/img/axror.png";
import mainImg from "./img/mainimg.png";
import { useSelector } from "react-redux/es/exports";

export default function Welcome() {
  const { isLogin } = useContext(LoginContext);
  const tasks = useSelector((state) => state.tasks);

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <WelcomeStyle>
      <header className="d-1 p-2 d-flex justify-content-between align-items-center">
        <img src={expressImg2} />
        <input
          type="text"
          placeholder="filter"
          className="rounded p-2"
          value={searchParams.get("filter")}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter != "") setSearchParams({ filter: e.target.value });
            else setSearchParams({});
          }}
        />
        <div>
          <span>
            <img src={axror} />
          </span>
          {isLogin ? (
            <Link to={`/dashboard/home`} className="btn btn-primary">
              Dashboard
            </Link>
          ) : (
            <Link to={`/login`} className="btn btn-primary">
              Sign in
            </Link>
          )}
        </div>
      </header>
      <div className="container1">
        <img src={mainImg} />
      </div>

      <main>
        <div className="container mt-5">
          <h1 className="mb-4">Taomlar</h1>
          <div className="row">
            {tasks
              .filter((item) => {
                const filter = searchParams.get("filter");
                if (!filter) return true;
                return item.taomNomi.toLowerCase().includes(filter);
              })
              .map((item) => {
                return (
                  <div className="col col-sm-6 col-md-4 col-lg-3 mt-4">
                    <div class="card">
                      <img src={item.imgLink} alt="" />
                      <div class="card-body">
                        <h5 class="card-title">{item.taomNomi}</h5>
                        <p class="card-text">{item.title}</p>
                        <p>{item.narxi} so'm</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* salat tugadi */}

          {/* <h1 className="mb-4 mt-5">Taom</h1>
          <div className="row">
            {taomKategoriya.map((item) => {
              return (
                <div className="col col-sm-6 col-md-4 col-lg-3 mt-4">
                  <div class="card">
                    <img src={item.imgLink} alt="" />
                    <div class="card-body">
                      <h5 class="card-title">{item.taomNomi}</h5>
                      <p class="card-text">{item.title}</p>
                      <p>{item.narxi} so'm</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </main>
    </WelcomeStyle>
  );
}
