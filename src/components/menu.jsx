import { Component } from "react";
import * as cssModules from '../styles';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom'

class Button extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { type, title, urlTarget, icon, onclick, classname } = this.props;
		return (
			type === 'link' ?
			(
				<button className={classname}>
					<Link to={urlTarget}>
							{title}
					</Link>
				</button>
			) : (
				<button className={classname} onClick={onclick}>
					{icon}
					<p>{title}</p>
				</button>
			)
		)
	}
}


export default class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isShowNavbar: false
		}
	}

	handleShowSortNavbar = () => {
		this.setState({
			isShowNavbar: !this.state.isShowNavbar
		})
	}
	
	render() {
		const { isDarkTheme ,toggleThemeAction } = this.props;
		return (
			<section className={cssModules.Scomponent.sortRow}>
				<nav className={
					this.state.isShowNavbar
					? cssModules.Scomponent.sortColor
					: cssModules.Scomponent.sortColorHide
				}>
					<Button type={'link'} urlTarget={'/status-merah'} title="Merah" />
					<Button type={'link'} urlTarget={'/status-hijau'} title="Hijau" />
					<Button type={'link'} urlTarget={'/status-kuning'} title="Kuning" />
					<Button type={'link'} urlTarget={'/'} title="Semua" />
				</nav>
				<section 
					className={cssModules.Scomponent.sortButton}
					aria-label="btn-action-container"
				>
					{
						isDarkTheme ? 
						(
							<Button
								onclick={toggleThemeAction}
								classname={cssModules.Scomponent.buttonLight}
								icon={<FaIcons.FaSun />}
							/>
						) : (
							<Button
								onclick={toggleThemeAction}
								classname={cssModules.Scomponent.buttonDark}
								icon={<FaIcons.FaMoon />}
							/>
						)
					}
					 <Button
						onclick={() => this.handleShowSortNavbar()}
						classname={cssModules.Scomponent.buttonSort}
						title="Sortir"
						icon={<FaIcons.FaFilter />}
					/>
				</section>
			</section>
		)
	}
}
