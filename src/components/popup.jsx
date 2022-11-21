import { Component } from "react";
import { Popup } from "@urbica/react-map-gl";
import * as cssModules from "../styles"

class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { title, desc } = this.props;
		  return (
				<div>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
		  )
    }
}

export default class PopUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
		  const { data, closePopUp } = this.props;
        return (
			<Popup
				longitude={data.geometry.coordinates[0]}
				latitude={data.geometry.coordinates[1]}
				onClose={closePopUp}
			>
				<section className={cssModules.Scomponent.popUp}>
					<Card title="Nama" desc={data.properties.Nama} />
					<Card title="Status" desc={data.properties.Status} />
					<Card title="Angka" desc={data.properties.Angka} />
				</section>
			</Popup>
		)
	}
}
