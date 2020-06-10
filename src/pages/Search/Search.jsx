import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Input,
  Circle,
  List,
  Row,
  Text,
  Block
} from "../../common/Components";
import Icon from "../../common/Icon";

const data = [
  {
    id: "xyz",
    firstname: "George",
    lastname: "Fitzgerald",
    rating: "4.7",
    clients: 3,
    spots: 1
  },
  {
    id: "xyp",
    firstname: "Sarah",
    lasgname: "Johnson",
    rating: "4.2",
    clients: 2,
    spots: 5
  },
  {
    id: "xyp",
    firstname: "Jacob",
    lasgname: "Smith",
    rating: "4.2",
    clients: 5,
    spots: 0
  },
  {
    id: "kaveri",
    firstname: "Kaveri",
    lasgname: "Amazing",
    rating: "4.9",
    clients: 25,
    spots: 2
  },
  {
    id: "philip",
    firstname: "Philip",
    lasgname: "Hultgren",
    rating: "4.1",
    clients: 4,
    spots: 1
  }
];

const Search = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [custom, setCustom] = useState(false);
  const [request, setRequest] = useState(false);

  const focusSearch = useRef(null);

  useEffect(() => {
    focusSearch.current.focus();
  }, []);

  console.log("ressss", results);

  // FETCH API DATA
  const getResults = query => {
    // let data = "I don't want to go, I don't want to go. Mr. Stark , please."; // returns false.
    // let tony = data.includes("Mr. Stark"); //returns true
    // let peter = data.includes("Spiderman"); //return false

    // console.log(tony, peter);
    // console.log(query);
    const foundResults = data.filter(item =>
      item.firstname.toLowerCase().includes(query.toLowerCase())
    );
    // console.log("results >>> +++", foundResults);
    return foundResults;
  };

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  useEffect(() => {
    let currentQuery = true;
    const controller = new AbortController();

    const loadResults = async () => {
      if (!query) return setResults([]);

      await sleep(350);
      if (currentQuery) {
        const results = getResults(query, controller);
        setResults(results);
      }
    };
    loadResults();

    return () => {
      currentQuery = false;
      controller.abort();
    };
  }, [query]);

  const onSearch = () => {
    console.log("search");
  };

  const setSearch = e => {
    const { value: query } = e.target;
    setQuery(query);
  };

  const onCustom = () => setCustom(!custom);
  const onRequest = () => setRequest(!request);

  return (
    <>
      <Button reset onClick={() => history.push("/")}>
        <Icon name="CHEVRON_LEFT" size={20} fill="white" />
      </Button>
      <Block verticalPush={16} direction="column" bgColor="white">
        <Block
          direction="column"
          align="flex-start"
          justify="flex-start"
          bgColor="transparent"
        >
          <p>Search by name:</p>
          <Input
            verticalPush={5}
            type="text"
            placeholder="Search for trainers..."
            ref={focusSearch}
            onChange={setSearch}
            value={query}
          />
        </Block>

        <Block
          align="flex-start"
          justify="flex-start"
          bgColor="transparent"
          direction="column"
        >
          <Button variant="orange" onClick={onCustom} verticalPush={5} reset>
            {!custom ? "Advanced Search" : "Cancel"}
          </Button>
          {custom && (
            <Button verticalPush={5} reset>
              Custom Search
              <Icon name="SEARCH" stroke="none" size={20} fill="white" />
            </Button>
          )}
        </Block>
        <Block direction="row" align="center" bgColor="transparent">
          <List bgColor="white" direction="column" align="flex-start">
            {results?.map((item, index) => (
              <Row
                direction="row"
                justify="flex-start"
                bgColor="white"
                border="#f5f5f8"
                key={index}
                align="center"
                highlight={request}
              >
                <Circle radius="50%" size={40} padding="0px">
                  <Icon name="USER" fill="white" size={30} stroke="none" />
                </Circle>
                <Block
                  justify="space-between"
                  align="center"
                  bgColor="transparent"
                >
                  <Text reset center>
                    {item.firstname}
                  </Text>
                  <Text reset center>
                    {item.rating}
                  </Text>
                  <Text reset center>
                    {item.clients}
                  </Text>
                  <Text reset center>
                    {item.spots}
                  </Text>
                  <Button
                    variant={request ? "green" : "orange"}
                    onClick={onRequest}
                  >
                    {request ? "Cancel Request" : "Request Trainer"}
                  </Button>
                </Block>
                <Button reset variant={request ? "green" : "orange"}>
                  <Icon name="CHECK" size={20} fill="white" />
                </Button>
              </Row>
            ))}
          </List>
        </Block>
      </Block>
    </>
  );
};

export default Search;
