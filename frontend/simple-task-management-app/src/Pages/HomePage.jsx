import React from "react";

export const HomePage = () => {
  return (
    <main className="flex flex-col  w-full min-h-[80vh] bg-gray-100">
      <h1 className="font-bold text-4xl text-neutral-700 bg-gray-400 py-9">
        This is a Task Manegment application take few menute to get started.
      </h1>
      <div className="flex w-full">
        <img
          className="w-[50%]"
          src="https://plus.unsplash.com/premium_photo-1705010663930-6f324c9e14e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className="w-[50%]"
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="flex w-full">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1590402494727-0375eeaacf68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"
          alt=""
        />
      </div>
    </main>
  );
};
