import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";
import { api, cancelTokenSource } from "../../utils/config";
import Loading from "../../loading/Loading";
const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: " ",
    message: " ",
    sent: false,
  });
  const [loading, setLoading] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [err, setError] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.getAttribute("name");
    setData({
      ...data,
      [name]: value,
    });
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      message: "",
      sent: false,
    });
  };

  const onSubmit = async (e) => {
    setLoading(true);
    await api
      .post("/contact", data)
      .then((res) => {
        if (res.data.result !== "success") {
          setData({
            ...data,
            sent: false,
          });
          setLoading(false);
          setThankYouMessage("Thank you.");
          document.getElementById("myForm").reset();
          resetForm();
        } else {
          setData({
            ...data,
            sent: true,
          });

          setError("Error in the form");
          resetForm();
        }
      })
      .catch((err) => {
        setData({
          ...data,
        });
      });
  };

  useEffect(() => {
    return () => {
      cancelTokenSource.cancel("Request was canceled");
    };
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.title}>Talk to Me</h1>
      <span className={styles.success}>{thankYouMessage}</span>
      <span className={styles.err}>{err}</span>
      <form className={styles.form} id="myForm">
        <div className={styles.formAction}>
          <label htmlFor="name" className="d-block">
            <i className="icon" data-feather="user"></i>
          </label>

          <input
            type="text"
            name="name"
            className={styles.formControl}
            placeholder="Name"
            onChange={onChange}
          />

          <label htmlFor="email" className="d-block">
            <i className="icon" data-feather="mail"></i>
          </label>
          <input
            type="email"
            name="email"
            className={styles.formControl}
            placeholder="Email"
            onChange={onChange}
          />

          <textarea
            name="message"
            className={styles.message}
            rows="7"
            placeholder="Message"
            onChange={onChange}
          ></textarea>
        </div>

        <div className="text-center"></div>
      </form>
  {    loading ? <Loading/>:
      <button
        type="submit"
        onClick={() => {
          onSubmit();
        }}
        className={styles.btnPrimary}
        tabIndex="-1"
      >
        Submit
      </button>
      } 
    </section>
  );
};

export default ContactForm;
