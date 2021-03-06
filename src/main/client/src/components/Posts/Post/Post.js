import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';

const Post = ({ post }) => {
	const { id, logo, name, genre } = post;

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea component={Link} to={`/sessions/${id}`}>
				<div className={classes.mediaContainer}>
					<CardMedia
						className={classes.media}
						image={logo}
						title={name}
					/>
				</div>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography gutterBottom variant="subtitle1" component="h3">
						{genre}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Post;