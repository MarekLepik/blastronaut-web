import React from "react";

function Details() {
  //style={{ backgroundImage: "url('assets/render_21.png')" }}
  return (
    <div className="space-y-5 bg-cover bg-center">
      <div className="grid grid-cols-2 w-full mt-20 h-screen">
        <div className="col-start-1 w-full bg-red-200">
          <h1>first</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full h-screen">
        <div className="col-start-2 w-full bg-red-200">
          <h1>second</h1>
        </div>
      </div>
    </div>
  );
}

export default Details;
