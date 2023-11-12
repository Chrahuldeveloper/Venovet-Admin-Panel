import React from "react";

export default function PopUp({ setPop, image, name, quantity }) {
  return (
    <div
      onClick={() => {
        setPop(false);
      }}
      className="fixed inset-0 z-50 flex w-[100vw] items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-sm"
    >
      <div className="bg-white rounded-md w-full h-[50%]">
        <div className="grid grid-cols-5 gap-6">
          {image.map((_, i) => {
            return (
              <div className="max-w-xs bg-blue-50 rounded-xl p-4" key={i}>
                <img className="w-36" src={_} alt="img.png" />
                <div className="flex justify-between items-center pt-3">
                  <p className="text-sm">{name[i]}</p>
                  <p>{quantity[i]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
