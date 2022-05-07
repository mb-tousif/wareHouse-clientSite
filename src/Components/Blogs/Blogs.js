import React from 'react';

const Blogs = () => {
    return (
      <div className="text-[#17849d]">
        <div className="Question-1 mb-8">
          <table className="m-2 table-auto border-collapse border p-2 border-slate-800">
            <caption className="text-xl font-medium p-2">
              Difference between javascript and nodejs
            </caption>
            <thead className="bg-[#49236cb6] text-white">
              <tr>
                <th className="border p-2 border-slate-500">Features</th>
                <th className="border p-2 border-slate-500">JavaScript</th>
                <th className="border p-2 border-slate-500">Node JS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 border-slate-500">Definition</td>
                <td className="border p-2 border-slate-500">
                  It is an open-source, cross-platform, interpreted, lightweight
                  scripting programming language that is used to develop dynamic
                  and web applications.
                </td>
                <td className="border p-2 border-slate-500">
                  It is a cross-platform, open-source JavaScript runtime
                  environment that allows JavaScript to be run on the server.
                </td>
              </tr>
              <tr>
                <td className="border p-2 border-slate-500">Type</td>
                <td className="border p-2 border-slate-500">
                  It is a programming language. It works in any browser that has
                  a proper browser engine.
                </td>
                <td className="border p-2 border-slate-500">
                  It's a JavaScript interpreter and environment with some
                  valuable libraries that JavaScript programming can use
                  separately.
                </td>
              </tr>
              <tr>
                <td className="border p-2 border-slate-500">Running Engines</td>
                <td className="border p-2 border-slate-500">
                  JavaScript can be run on any engine, including Spider Monkey,
                  V8, and JavaScript Core.
                </td>
                <td className="border p-2 border-slate-500">
                  Node JS is only supported by the V8 engine, which Google
                  Chrome mostly uses. Any JavaScript program written with Node
                  JS will always be run in the V8 engine.
                </td>
              </tr>
              <tr>
                <td className="border p-2 border-slate-500">Used for</td>
                <td className="border p-2 border-slate-500">
                  It is designed to build network-centric applications.
                </td>
                <td className="border p-2 border-slate-500">
                  It's designed for data-intensive real-time applications that
                  run on several platforms.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Question-2 flex">
          <div className="p-4">
            <h2 className="text-xl">When should you use nodejs?</h2>
            <p className="text-justify">
              Node. js is primarily used for non-blocking, event-driven servers,
              due to its single-threaded nature. It's used for traditional web
              sites and back-end API services, but was designed with real-time,
              push-based architectures in mind.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-xl">When should you use MongoDB?</h2>
            <p className="text-justify">
              MongoDB is a powerful database with many capabilities. As a
              company, they've led the way in popularizing NoSQL and Document
              databases. As a database, they've expanded our understanding of
              data storage best practices, and have seeded their way into many
              applications across the world.MongoDB also offers a free,
              open-source version, which is an excellent option for teams on a
              budget who can stand up a database server on-premises or in the
              cloud.
            </p>
          </div>
        </div>
        <div className="Question-3"></div>
        <div className="Question-4"></div>
      </div>
    );
};

export default Blogs;