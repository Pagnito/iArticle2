import { FETCH_POST } from "../actions/actions";
import { initialState } from "./posts-reducer";

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_POST:
			return {
				items: action.payload.data,
				pic: initialState.pics[action.payload.num]
			};
		default:
			return state;
	}
}
