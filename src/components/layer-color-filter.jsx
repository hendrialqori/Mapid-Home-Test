import { Component } from "react";
import { connect } from 'react-redux'
import * as Components from './index'
import * as Configs from '../configs'


class LayerColorFilter extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
        this.props.GetApiAction()
      }

    render() {
        const { datas } = this.props.apiData
        const color = this.props.color
        return (
            datas.map((Data, i) => (
              !color ? 
              (
                <Components.Layer data={Data} key={i} />
              ) : (
                Data.properties.Status === color && (
                  <Components.Layer data={Data} key={i} /> )
              )
            ))
        )
    }
}

const mapStateToProps = state => ({
    apiData : state.apiData
  })
  
const mapDispatchToProps = dispatch => ({
    GetApiAction : () => dispatch(Configs.GetApi())
  })

export default connect(mapStateToProps, mapDispatchToProps)(LayerColorFilter)