import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Input } from "antd";
import Chart from "./Chart";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import _ from "lodash";
import { Button } from "react-bootstrap";

function Searchbar() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState();
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;
  const PageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (PageCount === 1) return null;
  const pages = _.range(1, PageCount + 1);

  const handledata = (e) => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei`
    )
      .then((res) => res.json())
      .then((e) => {
        console.log("data featched", e.response.docs);
        setData(e.response.docs);
        setValue(value);
        setPaginatedData(_(e.response.docs).slice(0).take(pageSize).value());
      });
  };

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

  if (data == null) {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <Input
                id="inp"
                placeholder="Search"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </MDBCol>
            <MDBCol>
              <Button id="btn" onClick={handledata}>
                Search
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }

  return (
    <div>
      <MDBContainer>
        <div>
          <MDBContainer>
            <MDBRow >
              <MDBCol>
                <Input
                  id="inp"
                  placeholder="Search"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </MDBCol>
              <MDBCol>
                <Button id="btn" onClick={handledata}>
                  Search
                </Button>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <br></br>
        <br></br>
        <MDBContainer>
          <h5 className="text-center" style={{ color: "red" }}>
            {" "}
            **Here are your search results**
          </h5>
          <h4 style={{ color: "green" }}>{value}-report</h4>
          <MDBRow>
            <MDBCol>
              <MDBTable className="fixed-table">
                <MDBTableHead>
                  <tr id="th">
                    <th scope="col">Publisher_date</th>
                    <th scope="col">Headline</th>
                    <th scope="col">Summary</th>
                    <th scope="col">URL</th>
                    <th scope="col">Source</th>
                  </tr>
                </MDBTableHead>
                {paginatedData.length === 0 ? (
                  <MDBTableBody className="align-center  mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Data Found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  paginatedData.map((item, index) => (
                    //console.log('map feached')
                    <MDBTableBody key={index}>
                      <tr id="tr">
                        <td>{item.pub_date}</td>
                        <td>{item.headline.print_headline}</td>
                        <td>{item.snippet}</td>
                        <td>
                          <Link to="">{item.web_url}</Link>
                        </td>
                        <td>{item.source}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
        <Chart />
      </MDBContainer>
    </div>
  );
}

export default Searchbar;
