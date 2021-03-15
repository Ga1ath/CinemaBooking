import { FETCH_ALL, FILTER_POSTS } from '../constants/actionTypes';

const initialState = [
	{
		"name": "Avengers: Infinity War",
		"genre": "Action, Adventure, Sci-Fi",
		"logo": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
		"id": 4154756
	},
	{
		"name": "Avengers: Endgame",
		"genre": "Action, Adventure, Drama, Sci-Fi",
		"logo": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
		"id": 4154796
	},
	{
		"name": "Avengers: Age of Ultron",
		"genre": "Action, Adventure, Sci-Fi",
		"logo": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
		"id": 2395427
	},
	{
		"name": "Tenet",
		"genre": "Action, Sci-Fi, Thriller",
		"logo": "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
		"id": 6723592
	}
]

const reducer = (posts = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case FILTER_POSTS:
			return posts.filter(post => post.name.toLowerCase().includes(action?.filter.toLowerCase()));
		default:
			return posts;
	}
}

export default reducer;