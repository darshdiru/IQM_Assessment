import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal";
import debounce from "lodash.debounce";
import "./Questions.css";

const pagesize = 100;
const order = "asc";
const body = "firebase";

interface IValues {
  owner: {
    display_name: string;
  };

  question_id: string;
  creation_date: number;
  link: string;
  title: string;
}

interface IProps {}

interface IState {
  lists: IValues[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
  show: boolean;
  data: string;
  temp: string;
}

export default class Questions extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      temp: "",
      lists: [],
      loading: false,
      error: false,
      hasMore: true,
      show: false,
    };

    window.onscroll = debounce(() => {
      const {
        fetchList,
        state: { error, loading, hasMore },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || loading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchList();
      }
    }, 1000);
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    this.setState({ loading: true }, () => {
      axios
        .get(
          `https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow`,
          {
            params: {
              pagesize,
              order,
              body,
            },
          }
        )
        .then((res) => {
          const data = res.data;
          const lists = data.items;

          this.setState({
            hasMore: this.state.lists.length < pagesize,
            lists,
            loading: false,
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            loading: false,
          });
        });
    });
  };

  showModal = (title: string, link: string) => {
    this.setState({ show: true, temp: title, data: link });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { loading, error, hasMore } = this.state;

    return (
      <div className="container">
        <table className="customers">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th style={{ width: "15%" }}>Creation date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lists &&
              this.state.lists.map((value) => (
                <tr key={value.question_id}>
                  <td>{value.owner.display_name}</td>
                  <td
                    onClick={(event: React.MouseEvent) => {
                      this.showModal(value.title, value.link);
                    }}
                  >
                    {value.title}
                  </td>
                  <td>{value.creation_date}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {error && <div style={{ color: "#900" }}>{error}</div>}
        {loading && (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
        {!hasMore && (
          <div>
            <h2>You did it! You reached the end!</h2>
          </div>
        )}

        <Modal
          title={this.state.temp}
          show={this.state.show}
          close={this.closeModal}
          link={this.state.data}
          body={body}
        />
      </div>
    );
  }
}
