/* eslint-disable*/ 

/*
Select the UI component for the user's avatar
 */
import React, {Component} from 'react'
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Chip from "@mui/material/Chip"
import Avatar from "@mui/material/Avatar"
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {

  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
    icon: null //default
  }

  constructor(props) {
    super(props)
    // Prepare the list data to display
    this.headerList = []
    for (let i = 0; i < 20; i++) {
      this.headerList.push({
        text: 'image'+(i+1),
        icon: require(`../../assets/avator/image${i+1}.png`).default
      })
    }
  }

  handleClick = ({text, icon}) => {
    // Update the current component status
    this.setState({icon})
    // Call a function to update the parent component state
    this.props.setHeader(text)
  }

  render () {
    const {icon} = this.state
    const listHeader = !icon ? (
        <Typography component="h6" variant="h6" color="#F44336">
            Please select the Avatar
        </Typography>
    ) : (
      <div>
        <Chip
            avatar={<Avatar alt="Natacha" src={this.headerList[0].icon} />}
            label="Avatar"
            variant="outlined"
        />
      </div>
    )

    return (
        <div>
            {listHeader}
            <ImageList cols={6} rowHeight={50}>
                {this.headerList.map((item) => (
                    <ImageListItem key={item.icon}>
                        <Avatar sx={{ width: 56, height: 56 }} src={item.icon} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
      
    )
  }
}