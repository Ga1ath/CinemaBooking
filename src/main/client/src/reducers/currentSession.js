import { FETCH_CURRENT_SESSION } from '../constants/actionTypes';

const initialState =
  [
    [
      {
        name: "1a",
        isBooked: true
      },
      {
        name: "1b",
          isBooked: false
      },
      {
        name: "1c",
          isBooked: true
      },
      {
        name: "1d",
        isBooked: true
      },
      {
        name: "1e",
        isBooked: false
      },
      {
        name: "1f",
        isBooked: true
      },
      {
        name: "1g",
        isBooked: true
      },
      {
        name: "1h",
        isBooked: false
      }
      ],
    [
      {
        name: "2a",
        isBooked: true
      },
      {
        name: "2b",
        isBooked: false
      },
      {
        name: "2c",
        isBooked: true
      },
      {
        name: "2d",
        isBooked: true
      },
      {
        name: "2e",
        isBooked: false
      },
      {
        name: "2f",
        isBooked: true
      },
      {
        name: "2g",
        isBooked: true
      },
      {
        name: "2h",
        isBooked: false
      }
    ],
    [
      {
        name: "3a",
        isBooked: true
      },
      {
        name: "3b",
        isBooked: false
      },
      {
        name: "3c",
        isBooked: true
      },
      {
        name: "3d",
        isBooked: true
      },
      {
        name: "3e",
        isBooked: false
      },
      {
        name: "3f",
        isBooked: true
      },
      {
        name: "3g",
        isBooked: true
      },
      {
        name: "3h",
        isBooked: false
      }
    ],
    [
      {
        name: "4a",
        isBooked: true
      },
      {
        name: "4b",
        isBooked: false
      },
      {
        name: "4c",
        isBooked: true
      },
      {
        name: "4d",
        isBooked: true
      },
      {
        name: "4e",
        isBooked: false
      },
      {
        name: "4f",
        isBooked: true
      },
      {
        name: "4g",
        isBooked: true
      },
      {
        name: "4h",
        isBooked: false
      }
    ],
    [
      {
        name: "5a",
        isBooked: true
      },
      {
        name: "5b",
        isBooked: false
      },
      {
        name: "5c",
        isBooked: true
      },
      {
        name: "5d",
        isBooked: true
      },
      {
        name: "5e",
        isBooked: false
      },
      {
        name: "5f",
        isBooked: true
      },
      {
        name: "5g",
        isBooked: true
      },
      {
        name: "5h",
        isBooked: false
      }
    ],
    [
      {
        name: "6a",
        isBooked: true
      },
      {
        name: "6b",
        isBooked: false
      },
      {
        name: "6c",
        isBooked: true
      },
      {
        name: "6d",
        isBooked: true
      },
      {
        name: "6e",
        isBooked: false
      },
      {
        name: "6f",
        isBooked: true
      },
      {
        name: "6g",
        isBooked: true
      },
      {
        name: "6h",
        isBooked: false
      }
    ],
    [
      {
        name: "7a",
        isBooked: true
      },
      {
        name: "7b",
        isBooked: false
      },
      {
        name: "7c",
        isBooked: true
      },
      {
        name: "7d",
        isBooked: true
      },
      {
        name: "7e",
        isBooked: false
      },
      {
        name: "7f",
        isBooked: true
      },
      {
        name: "7g",
        isBooked: true
      },
      {
        name: "7h",
        isBooked: false
      }
    ],
    [
      {
        name: "1a",
        isBooked: true
      },
      {
        name: "1b",
        isBooked: false
      },
      {
        name: "1c",
        isBooked: true
      },
      {
        name: "1d",
        isBooked: true
      },
      {
        name: "1e",
        isBooked: false
      },
      {
        name: "1f",
        isBooked: true
      },
      {
        name: "1g",
        isBooked: true
      },
      {
        name: "1h",
        isBooked: false
      }
    ],
    [
      {
        name: "2a",
        isBooked: true
      },
      {
        name: "2b",
        isBooked: false
      },
      {
        name: "2c",
        isBooked: true
      },
      {
        name: "2d",
        isBooked: true
      },
      {
        name: "2e",
        isBooked: false
      },
      {
        name: "2f",
        isBooked: true
      },
      {
        name: "2g",
        isBooked: true
      },
      {
        name: "2h",
        isBooked: false
      }
    ],
    [
      {
        name: "3a",
        isBooked: true
      },
      {
        name: "3b",
        isBooked: false
      },
      {
        name: "3c",
        isBooked: true
      },
      {
        name: "3d",
        isBooked: true
      },
      {
        name: "3e",
        isBooked: false
      },
      {
        name: "3f",
        isBooked: true
      },
      {
        name: "3g",
        isBooked: true
      },
      {
        name: "3h",
        isBooked: false
      }
    ],
    [
      {
        name: "4a",
        isBooked: true
      },
      {
        name: "4b",
        isBooked: false
      },
      {
        name: "4c",
        isBooked: true
      },
      {
        name: "4d",
        isBooked: true
      },
      {
        name: "4e",
        isBooked: false
      },
      {
        name: "4f",
        isBooked: true
      },
      {
        name: "4g",
        isBooked: true
      },
      {
        name: "4h",
        isBooked: false
      }
    ],
    [
      {
        name: "5a",
        isBooked: true
      },
      {
        name: "5b",
        isBooked: false
      },
      {
        name: "5c",
        isBooked: true
      },
      {
        name: "5d",
        isBooked: true
      },
      {
        name: "5e",
        isBooked: false
      },
      {
        name: "5f",
        isBooked: true
      },
      {
        name: "5g",
        isBooked: true
      },
      {
        name: "5h",
        isBooked: false
      }
    ],
    [
      {
        name: "6a",
        isBooked: true
      },
      {
        name: "6b",
        isBooked: false
      },
      {
        name: "6c",
        isBooked: true
      },
      {
        name: "6d",
        isBooked: true
      },
      {
        name: "6e",
        isBooked: false
      },
      {
        name: "6f",
        isBooked: true
      },
      {
        name: "6g",
        isBooked: true
      },
      {
        name: "6h",
        isBooked: false
      }
    ],
    [
      {
        name: "7a",
        isBooked: true
      },
      {
        name: "7b",
        isBooked: false
      },
      {
        name: "7c",
        isBooked: true
      },
      {
        name: "7d",
        isBooked: true
      },
      {
        name: "7e",
        isBooked: false
      },
      {
        name: "7f",
        isBooked: true
      },
      {
        name: "7g",
        isBooked: true
      },
      {
        name: "7h",
        isBooked: false
      }
    ],
  ]


const reducer = (seats = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_SESSION:
      return action.payload;
    default:
      return seats;
  }
}

export default reducer;