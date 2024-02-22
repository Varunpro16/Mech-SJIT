import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{color: 'red', fontSize: '3vh', fontWeight: 'bolder'}}>X</button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p><strong>
                {index + 1}:</strong> {dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    
      "1:0": [
      
        "Introduction on machines",
        "Shaping",
        "Milling",
        "Grinding"
       
      ],

      "1:1":[
        "Introduction on engines",
        "Two & Four stroke engines  ",
        "Single cylinder engines",
        "Multi cylinder engines"
      ],
      "1:2":[
        "Introduction to Designing", 
        "AutoCAD 2d",
        "Solidworks",
        "CATIA"
      ],
      "1:3":[
        "Introduction to advanced manufacturing",
        "3D scanning &  printing",
        "Laser cutting",
        "Vinyl printing"
      ],
      "1:4":[
        "Hydraulics & pneumatics",
        "Programmable logic controller",
        "Micro proccessor & micro controller",
        "Sensors & transducer"
      ],
      "2:0": [
      
        "Introduction on machines",
        "Shaping",
        "Milling",
        "Grinding"
       
      ],

      "2:1":[
        "Introduction on engines",
        "Two & Four stroke engines  ",
        "Single cylinder engines",
        "Multi cylinder engines"
      ],
      "2:2":[
        "Introduction to Designing",
        "AutoCAD 2d",
        "Solidworks",
        "CATIA"
      ],
      "2:3":[
        "Introduction to advanced manufacturing",
        "3D scanning &  printing",
        "Laser cutting",
        "Vinyl printing"
      ],
      "2:4":[
        "Hydraulics & pneumatics",
        "Programmable logic controller",
        "Micro proccessor & micro controller",
        "Sensors & transducer"
      ],
      "3:0": [
      
        "Introduction on machines",
        "Shaping",
        "Milling",
        "Grinding"
       
      ],

      "3:1":[
        "Introduction on engines",
        "Two & Four stroke engines  ",
        "Single cylinder engines",
        "Multi cylinder engines"
      ],
      "3:2":[
        "Introduction to Designing",
        "AutoCAD 2d",
        "Solidworks",
        "CATIA"
      ],
      "3:3":[
        "Introduction to advanced manufacturing",
        "3D scanning &  printing",
        "Laser cutting",
        "Vinyl printing"
      ],
      "3:4":[
        "Hydraulics & pneumatics",
        "Programmable logic controller",
        "Micro proccessor & micro controller",
        "Sensors & transducer"
      ],
      "4:0": [
      
        "Introduction on machines",
        "Shaping",
        "Milling",
        "Grinding"
       
      ],

      "4:1":[
        "Introduction on engines",
        "Two & Four stroke engines  ",
        "Single cylinder engines",
        "Multi cylinder engines"
      ],
      "4:2":[
        "Introduction to Designing",
        "AutoCAD 2d",
        "Solidworks",
        "CATIA"
      ],
      "4:3":[
        "Introduction to advanced manufacturing",
        "3D scanning &  printing",
        "Laser cutting",
        "Vinyl printing"
      ],
      "4:4":[
        "Hydraulics & pneumatics",
        "Programmable logic controller",
        "Micro proccessor & micro controller",
        "Sensors & transducer"
      ],
      "5:0": [
      
        "Introduction on machines",
        "Shaping",
        "Milling",
        "Grinding"
       
      ],

      "5:1":[
        "Introduction on engines",
        "Two & Four stroke engines  ",
        "Single cylinder engines",
        "Multi cylinder engines"
      ],
      "5:2":[
        "Introduction to Designing",
        "AutoCAD 2d",
        "Solidworks",
        "CATIA"
      ],
      "5:3":[
        "Introduction to advanced manufacturing",
        "3D scanning &  printing",
        "Laser cutting",
        "Vinyl printing"
      ],
      "5:4":[
        "Hydraulics & pneumatics",
        "Programmable logic controller",
        "Micro proccessor & micro controller",
        "Sensors & transducer"
      ],
      "6:0": [
      
        "Introduction on machines",
        "Shaping",
        "Milling",
        "Grinding"
       
      ],

      "6:1":[
        "Introduction on engines",
        "Two & Four stroke engines  ",
        "Single cylinder engines",
        "Multi cylinder engines"
      ],
      "6:2":[
        "Introduction to Designing",
        "AutoCAD 2d",
        "Solidworks",
        "CATIA"
      ],
      "6:3":[
        "Introduction to advanced manufacturing",
        "3D scanning &  printing",
        "Laser cutting",
        "Vinyl printing"
      ],
      "6:4":[
        "Hydraulics & pneumatics",
        "Programmable logic controller",
        "Micro proccessor & micro controller",
        "Sensors & transducer"
      ],

  });
  
  const x = []

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek," ",weekIndex);
    const details = detailsByWeek[selectedWeek+":"+weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  const dates = generateDates(selectedWeek);

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding:'2vh', background:'#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
    <thead>
      <tr>
        {[1, 2, 3, 4, 5, 6].map((week) => (
          <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: selectedWeek === week ? "#007BFF" : "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}>
            (Week {week})
          </th>
        ))}
      </tr>
    </thead> 
  </table>
</div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            {/* /<th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Date</th> */}
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              {/* <td style={{ border: "1px solid black", padding: "8px" }}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</td> */}
              <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Machines That Transformed The World", "Heart Of Automobile", "Design That Defined Everything", "Robots Everywhere", "Reverbrating Recent Trends"][date.getDay()]}</td>
              
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s", }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} />}
    </div>
  );
};

export default Schedule;