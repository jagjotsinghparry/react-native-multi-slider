import React from 'react';
import { View, StyleSheet, Platform, TouchableHighlight } from 'react-native';

class DefaultMarker extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View
          style={
            this.props.enabled
              ? [
                  styles.markerStyle,
                  this.props.markerStyle,
                  this.props.pressed && styles.pressedMarkerStyle,
                  this.props.pressed && this.props.pressedMarkerStyle,
                ]
              : [styles.markerStyle, styles.disabled]
          }
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  markerStyle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#EBEBEB',
    backgroundColor: '#AE2C23',
  },
  pressedMarkerStyle: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
});

export default DefaultMarker;
