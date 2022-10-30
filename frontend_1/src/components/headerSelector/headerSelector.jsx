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
import Button from "@mui/material/Button";

export default class HeaderSelector extends Component {

  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
   icon: null //default
    // icon: require(`../../assets/avator/image1.png`).default
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

  handleClick = (item) => {
    // Update the current component status
    this.setState(item.icon)
    // Call a function to update the parent component state
    this.props.setHeader(item.text)
    console.log("avator is clicked: " + item + "  +  " + item)
    for(let key in item){ 
      console.log('key:', key);
    } 
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
            avatar={<Avatar alt="Natacha" src={this.headerList[2].icon} />}
            label="Avatar"
            variant="outlined"
            onClick={this.handleClick}
        />
      </div>
    )

    return (
        <div>
            {listHeader}
            <ImageList cols={6} rowHeight={50}>
                {this.headerList.map((item) => (
                    <ImageListItem key={item.icon}>
                        <Avatar 
                            sx={{ width: 56, height: 56 }} 
                            src={item.icon} 
                            onClick = {(item) => {this.handleClick(item)}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
      
    )
  }
}