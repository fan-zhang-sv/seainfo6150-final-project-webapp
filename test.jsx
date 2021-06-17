import React from "https://cdn.skypack.dev/react";

const App = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Market Size</th>
          <th>Price (BTC)</th>
          <th>My Size</th>
        </tr>
      </thead>

      <tbody>
        {Array(20).map((x) => {
          return (
            <tr>
              <td>1</td>
              <td>0.2</td>
              <td>-</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
