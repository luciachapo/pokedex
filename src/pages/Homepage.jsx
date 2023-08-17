import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //e.target.inputTrainer.value
    dispatch(setTrainerG(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div>
      <img src="/pdx.png" alt="" width={800} className="mx-auto mt-5 pt-5" />
      <h2 className="text-center">Welcome, Trainer</h2>
      <p className="text-center">
        Tell me you name and go it for this
      </p>
      <div className="d-flex justify-content-center mx-auto align-items-end" style={{width:400, height: 150}}>
        <form className="d-flex flex-row" onSubmit={handleSubmit}>
          <input className="" id="inputTrainer" ref={inputTrainer} type="text" />
          <br />
          <button className="btn-4">GO</button>
        </form>
      </div>
    </div>
  );
};
export default HomePage;
