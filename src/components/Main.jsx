import React, { Component } from "react";
import Section from "./Section";

class Main extends Component {
  state = {
    sections: [
      {
        title: "Contact Details",
        li: [
          { entry: "Phone Number", data: "07898819714" },
          {
            entry: "Email",
            data: `Jackdanielberry@gmail.com
 `,
          },
          {
            entry: "Address",
            data: `The Cottage
72 Byrons Lane
Macclesfield
Cheshire
SK117JS`,
          },
          { entry: "DOB", data: "02/09/1991" },
        ],
      },
      {
        title: "Employment History",
        li: [
          { entry: "Zuto - Dealer Compliance", data: "2014-2016" },
          {
            entry: "Full Time Carer",
            data: `2016-2017`,
          },
          {
            entry: "The E-Cig Store - Area Manager",
            data: `2017-2020`,
          },
          {
            entry: "Self Employed - Landlord/Estate Management",
            data: "2020-Present",
          },
        ],
      },
      {
        title: "Education",
        li: [
          {
            entry: "Degree - 2:2",
            data: "Liverpool Institute for Performing Arts",
          },
          {
            entry: "Btec Level 3 - Distinction, Distinction, Merit",
            data: `The Manchester College`,
          },
          {
            entry: "GCSE's - 4 A's, 5 B's, 2 C's",
            data: `Macclesfield High School `,
          },
        ],
      },
    ],
  };
  render() {
    return (
      <>
        {this.state.sections.map((item) => {
          return <Section title={item.title} li={item.li} />;
        })}
      </>
    );
  }
}

export default Main;
