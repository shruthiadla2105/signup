import React from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="signup">
        <h2> Get started for free!</h2>
        <p>
          Let’s get you all set up so you can start creating your first
          onboarding experience.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              {...register("name", {
                required: "**Name is required",
              })}
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label>Email </label>
            <input
              type="email"
              {...register("email", { required: "**Email is required" })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "**Password is required" })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <div className="check-box">
            {/* <input type="checkbox" className="check" /> */}
            <h4>
              {" "}
              I accept GetShortLink <span>Terms & Conditions </span>
            </h4>
          </div>
          <button type="submit" className="form">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
