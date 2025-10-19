import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

// import { constructNow } from "date-fns";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const naviagte = useNavigate();





  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);

    const form = e.target;

    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, password, email });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            naviagte("/")
          })
          .catch((error) => {
            console.log(error)
            setUser(user)
          });
      })
      .catch((error) => {
        alert(error.Message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error ">{nameError}</p>}
            {/* Photo Url */}
            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo Url"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-4">
              Allready Have An Account ?{" "}
              <Link className="text-secondary" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
