import { Component } from "react";

type PawriDay = {
  id: string;
  Day: string;
};

export default class Pawry extends Component<{}, { PawriDays: PawriDay[] }> {
  state = {
    PawriDays: [
      { id: "123s", Day: "Monday" },
      { id: "234r", Day: "Saturday" },
      { id: "12d5", Day: "Sunday" },
    ],
  };

  render() {
    const PartyDays = this.state.PawriDays.length;
    const day = this.state.PawriDays[1];

    return (
      <div>
        <h1>I am User</h1>
        <p>We party: {PartyDays} days a week</p>
        <p>
          Second party day: {day.Day} (id: {day.id})
        </p>

        <h2>All Party Days:</h2>
        <ul>
          {this.state.PawriDays.map((item) => (
            <li key={item.id}>
              {item.Day} - {item.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
