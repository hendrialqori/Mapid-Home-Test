import { Component } from "react";
import { Source, Layer as Maker } from "@urbica/react-map-gl";
import * as Components from './index'


class Display extends Component {
    constructor(props) {
			super(props)
			this.state = {
				dataPopup: null
			}
		}

		showPopUpAction = (data) => {
			this.setState({
				dataPopup: data
			})
		}

		closePopUpAction = () => {
			this.setState({
				dataPopup: null
			})
		}

    render() {
		const { title, data, color, type } = this.props
		return (
			<>
				<Source key={title} id={title} type="geojson" data={data}/>
					<Maker
						id={title}
						type={type}
						source={title}
						paint={color}
						onClick={() => this.showPopUpAction(data)}
					/>
				{
					this.state.dataPopup ? 
						<Components.PopUp 
							data={this.state.dataPopup}
							closePopUp={this.closePopUpAction}
						/> : null
				 }
			</>
		)
    }
}

export class Layer extends Component {
    constructor(props) {
      super(props)
			this.state = {
				data: null
			}
    }

    render() {
			const { data } = this.props
			return (
				<Display 
					title={data.key}
					type="circle"
					data={data}
					color={{
						"circle-color": [
						"match",
						["get", "Status"],
						"Merah",
						"#FF0000",
						"Hijau",
						"#008000",
						"Kuning",
						"#FFFF00",
						"#1B659D",
						],
						"circle-radius": ["get", "circle_radius"],
						"circle-stroke-width": ["get", "circle_stroke_width"],
						"circle-stroke-color": ["get", "circle_stroke_color"],
					}}
			/>
			)
    }
} 