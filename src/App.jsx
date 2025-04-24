import "./App.css";
import Tools from "./components/Tools";
import arrow from "../src/assets/arrow.png";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import results from "./data";
import livedata from "./livedata";

function App() {
  const [value, setValue] = useState("1");
  const [mobModal, setMobModal] = useState(false);
  const [mobModalL, setMobModalL] = useState(false);

  const handleMobVersCont = () => {
    setMobModal((prevState) => !prevState);
  };

  const handleMobVersContL = () => {
    setMobModalL((prevState) => !prevState);
  };

  console.log(mobModal);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectedFilters, setSelectedFilters] = useState([
    "MAG",
    "Final",
    "Apparatus",
    "Seniors",
  ]);

  const handleFilterClick = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const filteredResults = results.filter((item) => {
    return selectedFilters.every((filter) =>
      [
        item.genderCategory,
        item.round,
        item.competitionType,
        item.ageCategory,
      ].includes(filter)
    );
  });

  return (
    <div className="app">
      <div className="container">
        <div className="head-text-cont">
          <img src={arrow} width={19} height={14} alt="arrow" />
          <div className="head-text">
            <p>FIG ARTISTIC GYMNASTICS WORLD CUP</p>
            <p>Doha, Qatar | 12/03/2023 - 13/02/2023</p>
          </div>
        </div>
        {/*************************** tab******************************/}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                width: "100%",
                marginTop: "40px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: 0.5,
                  borderColor: "#1A1635",
                  "& .MuiTabs-indicator": {
                    height: "1px",
                    bottom: 0,
                  },
                }}
              >
                <Tab
                  label="Live"
                  value="1"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    flex: "1",
                    position: "relative",
                  }}
                />
                <div className="livered"></div>
                <Tab
                  label="Startlist"
                  value="2"
                  sx={{ color: "white", textTransform: "none", flex: "1" }}
                />
                <Tab
                  label="Schedule"
                  value="3"
                  sx={{ color: "white", textTransform: "none", flex: "1" }}
                />
                <Tab
                  label="Results"
                  value="4"
                  sx={{ color: "white", textTransform: "none", flex: "1" }}
                />
                <Tab
                  label="Medals"
                  value="5"
                  sx={{ color: "white", textTransform: "none", flex: "1" }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="tabitem">
              <table className="result-datas-container">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>App</th>
                    <th>AA</th>
                    <th>Team</th>
                  </tr>
                </thead>
                <tbody>
                  {livedata.map((ld) => (
                    <tr key={ld.id}>
                      <td className="liimg">
                        <img src={ld.tool} alt="tool" />
                      </td>
                      <td>
                        <div className="flag-country">
                          <img
                            src={ld.flag_img}
                            alt="flag"
                            width={24}
                            height={16}
                          />
                          {ld.team_c}
                        </div>
                      </td>
                      <td>{ld.bib}</td>
                      <td>{ld.name}</td>
                      <td>
                        D:{ld.d} 
                      </td>
                      <td>
                        E:{ld.e}
                      </td>
                      <td>
                        P:{ld.p}
                      </td>
                      <td>
                        {ld.app}
                      </td>
                      <td>
                        {ld.aa}
                      </td>
                      <td>
                        {ld.team}
                      </td>
                    </tr>
                  ))}
                  {livedata.filter(ld => ld.team_c === "GER").map((ld,idx) => (
                    <tr key={idx}>
                      <td className="liimg" style={{display: "flex", gap: "7px",
                        alignItems: "center"
                      }}>
                        <span style={{color: "#E08A09"}}>Inquiry Submitted</span>
                        <img src={ld.tool} alt="tool" />
                      </td>
                      <td>
                        <div className="flag-country">
                          <img
                            src={ld.flag_img}
                            alt="flag"
                            width={24}
                            height={16}
                          />
                          {ld.team_c}
                        </div>
                      </td>
                      <td>{ld.bib}</td>
                      <td>{ld.name}</td>
                      <td>
                        D:{ld.d} 
                      </td>
                      <td>
                        E:{ld.e}
                      </td>
                      <td>
                        P:{ld.p}
                      </td>
                      <td>
                        {ld.app}
                      </td>
                      <td>
                        {ld.aa}
                      </td>
                      <td>
                        {ld.team}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="result-mobile">
                {livedata.map((ld, idx) => (
                  <div key={idx}>
                    <li>
                      <div className="tool">
                        <img src={ld.tool} alt="tool" />
                      </div>
                      <div>{ld.team}</div>
                      <div>{ld.name}</div>
                      <div>{ld.d}</div>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "white",
                        }}
                        onClick={handleMobVersContL}
                      >
                        {mobModalL ? (
                          <i className="fa-solid fa-angle-down"></i>
                        ) : (
                          <i className="fa-solid fa-angle-up"></i>
                        )}
                      </button>
                    </li>
                    {mobModalL ? (
                      <div style={{ minHeight: "100px", backgroundColor: "#1A1635",
                        border: "1px solid #1A1635", marginBottom: "20px", marginTop: "-26px",
                        borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px"
                       }}>
                        <div style={{display:"flex", justifyContent: "end", gap: "15px"}}>
                          <div>D:{ld.d}</div>
                          <div>E:{ld.e}</div>
                          <div>P:{ld.p}</div>
                        </div>
                        <div>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>App</span>
                            <span>12.500</span>
                          </div>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>AA</span>
                            <span>102.360</span>
                          </div>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>Team</span>
                            <span>102.360</span>
                          </div>
                        </div>
                       </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
                {livedata.filter(ld => ld.team_c === "GER").map((ld,idx) => (
                    <div key={idx}>
                      <li>
                      <div className="liimg" style={{display: "flex", gap: "7px",
                        alignItems: "center"
                      }}>
                        <span style={{color: "#E08A09"}}>Inquiry Submitted</span> <br />
                        <img src={ld.tool} alt="tool" />
                      </div>
                      <div>{ld.bib}</div>
                      <div>{ld.name}</div>
                      <div>{ld.p}</div>
                      </li>
                    </div>
                  ))}
              </ul>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="tabitem">Startlist</div>
            </TabPanel>
            <TabPanel value="3">
              <div className="tabitem">Schedule</div>
            </TabPanel>
            <TabPanel value="4">
              <div className="filter-container">
                <div className="fc-in">
                  <button
                    className={selectedFilters.includes("MAG") ? "active" : ""}
                    onClick={() => handleFilterClick("MAG")}
                  >
                    MAG
                  </button>
                  <button
                    className={selectedFilters.includes("WAG") ? "active" : ""}
                    onClick={() => handleFilterClick("WAG")}
                  >
                    WAG
                  </button>
                </div>
                <div className="fc-in">
                  <button
                    className={
                      selectedFilters.includes("Qualification") ? "active" : ""
                    }
                    onClick={() => handleFilterClick("Qualification")}
                  >
                    Qualification
                  </button>
                  <button
                    className={
                      selectedFilters.includes("Final") ? "active" : ""
                    }
                    onClick={() => handleFilterClick("Final")}
                  >
                    Final
                  </button>
                </div>
                <div className="fc-in">
                  <button
                    className={
                      selectedFilters.includes("Apparatus") ? "active" : ""
                    }
                    onClick={() => handleFilterClick("Apparatus")}
                  >
                    Apparatus
                  </button>
                  <button
                    className={selectedFilters.includes("Team") ? "active" : ""}
                    onClick={() => handleFilterClick("Team")}
                  >
                    Team
                  </button>
                  <button
                    className={
                      selectedFilters.includes("All-around") ? "active" : ""
                    }
                    onClick={() => handleFilterClick("All-around")}
                  >
                    All-around
                  </button>
                </div>
                <div className="fc-in">
                  <button
                    className={
                      selectedFilters.includes("Seniors") ? "active" : ""
                    }
                    onClick={() => handleFilterClick("Seniors")}
                  >
                    Seniors
                  </button>
                  <button
                    className={
                      selectedFilters.includes("Juniors") ? "active" : ""
                    }
                    onClick={() => handleFilterClick("Juniors")}
                  >
                    Juniors
                  </button>
                </div>
              </div>
              {/*************************** idman novu sekilleri ************/}
              <Tools />
              {/****************************result datas *******************/}
              <table className="result-datas-container">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Bib</th>
                    <th>Name</th>
                    <th>D</th>
                    <th>E</th>
                    <th>Pen</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((fd) => (
                    <tr key={fd.id}>
                      <td className="rank">{fd.rank}</td>
                      <td>
                        <div className="flag-country">
                          <img
                            src={fd.flag_img}
                            alt="flag"
                            width={24}
                            height={16}
                          />
                          {fd.team}
                        </div>
                      </td>
                      <td>{fd.bib}</td>
                      <td>{fd.name}</td>
                      <td>
                        {fd.d} <br />
                        {fd.d}
                      </td>
                      <td>
                        {fd.e} <br /> {fd.e}
                      </td>
                      <td>
                        {fd.pen} <br /> {fd.pen}
                      </td>
                      <td>
                        {fd.total} <br /> {fd.total} <br />{" "}
                        <span style={{ color: "#FF9C07" }}>{fd.total}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="result-mobile">
                {filteredResults.map((fd, idx) => (
                  <div key={idx}>
                    <li>
                      <div className="rank2">{fd.rank}</div>
                      <div>{fd.team}</div>
                      <div>{fd.name}</div>
                      <div>{fd.d}</div>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "white",
                        }}
                        onClick={handleMobVersCont}
                      >
                        {mobModal ? (
                          <i className="fa-solid fa-angle-down"></i>
                        ) : (
                          <i className="fa-solid fa-angle-up"></i>
                        )}
                      </button>
                    </li>
                    {mobModal ? (
                      <div style={{ minHeight: "100px", backgroundColor: "#1A1635",
                        border: "1px solid #1A1635", marginBottom: "20px", marginTop: "-26px",
                        borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px"
                       }}>
                        <div style={{display:"flex", justifyContent: "end", gap: "15px"}}>
                          <div>D:{fd.d}</div>
                          <div>E:{fd.e}</div>
                          <div>P:{fd.pen}</div>
                        </div>
                        <div>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>App</span>
                            <span>12.500</span>
                          </div>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>AA</span>
                            <span>102.360</span>
                          </div>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>Team</span>
                            <span>102.360</span>
                          </div>
                        </div>
                       </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </ul>
            </TabPanel>
            <TabPanel value="5">
              <div className="tabitem">Medals</div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default App;
