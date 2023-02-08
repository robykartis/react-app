import React from "react";

const FormEditProduct = () => {
  return (
    <div>
      <h1 className="title">Product</h1>
      <h2 className="subtitle">Edit Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label htmlFor="" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">
                  Price
                </label>
                <div className="control">
                  <input type="text" className="input" placeholder="Price" />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-success">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
