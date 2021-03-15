import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { hideHallPopup } from "../../../actions/hallPopup";

import "./styles.css"
import Row from './Row/Row';
import { getCurrentSession } from '../../../actions/currentSession';

const Hall = () => {
	let visible = useSelector(state => state.hallPopup.visible);
	let seats = useSelector(state => state.currentSession);
	const ref = useRef();
	const dispatch = useDispatch();

	const clickHandler = (event) => {
		!event.path.includes(ref.current) && dispatch(hideHallPopup());
	}

	const preventScroll = (event) => {
		event.preventDefault();
	}

	const changeOverflowBody = (state) => {
		document.body.style.overflow = state;
	}

	useEffect(() => {
		dispatch(getCurrentSession());


		document.addEventListener('click', clickHandler);
		changeOverflowBody("hidden");
		document.addEventListener('touchmove', () => preventScroll(), false);
		return () => {
			document.removeEventListener('click', clickHandler);
			changeOverflowBody("visible");
			document.removeEventListener('touchmove', preventScroll, false);
		}
	}, [])


	return (
		<div ref={ref} className="hall">
			<div className="screen"></div>
			{seats.map((row, key) => {
				return (
					<Row row={row} id={key} />
				)
			})}
		</div>
	)
}

export default Hall;