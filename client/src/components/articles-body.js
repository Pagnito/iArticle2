import React, { Component } from "react";
import "../styles/articles-body.css";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions";
import { Link } from "react-router-dom";
class ArticlesBody extends Component {
	constructor(props) {
		super(props);

		this.postList = this.postList.bind(this);
	}
	componentWillMount() {
		this.props.fetchPosts();
	}
	postList() {
		const chunked = _.chunk(this.props.posts.items, 13);
		const frontPagePosts = chunked[0];

		if (Array.isArray(frontPagePosts)) {
			return frontPagePosts.map((post, ind) => {
				return (
					<div
						style={{ border: "1px solid black", backgroundImage: `url(${this.props.posts.pics[ind]})` }}
						id={`post${ind}`}
						className="postWrapper"
						key={post.id}
					>
						<Link className=" postTitleWrapper" to={`/post/${ind}`}>
							<div className="titleWrap">
								<div>{post.title}</div>
							</div>
						</Link>
					</div>
				);
			});
		}
	}

	render() {
		if (!this.props.posts) {
			return "Loading...";
		}

		return <div id="articlesBody">{this.postList()}</div>;
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}
export default connect(
	mapStateToProps,
	{ fetchPosts }
)(ArticlesBody);
