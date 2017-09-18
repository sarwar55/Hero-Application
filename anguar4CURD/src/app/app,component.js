import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'title': {
    'color': 'gray'
  },
  'addBtn': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'main': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'form': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1f1f1' }]
  },
  'input[type=text]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxSizing': 'border-box'
  },
  'input[type=password]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxSizing': 'border-box'
  },
  'login': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }]
  },
  'spanpsw': {
    'float': 'right',
    'paddingTop': [{ 'unit': 'px', 'value': 16 }]
  },
  'modelPopup': {
    'textAlign': 'left',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'modelPopup input[type=text]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'inline-block',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxSizing': 'border-box'
  },
  'leftDiv': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.48 }]
  },
  'rightDiv': {
    'float': 'Right',
    'width': [{ 'unit': '%H', 'value': 0.48 }]
  },
  'clear': {
    'clear': 'both'
  },
  'footerBtns': {
    'textAlign': 'center'
  },
  'modal': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'display': 'none'
  },
  'modals': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.25 }],
    'right': [{ 'unit': '%H', 'value': 0.25 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'h3': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'blackmodal_show': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'black',
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0.5'
  },
  'blackmodal_hide': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'black',
    'display': 'none',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0.5'
  },
  'addBtnVisible': {
    'display': 'inline-block',
    'backgroundColor': '#5cb85c',
    'borderColor': '#5cb85c',
    'color': '#fff'
  },
  'updateBtnVisible': {
    'display': 'inline-block',
    'backgroundColor': '#5cb85c',
    'borderColor': '#5cb85c',
    'color': '#fff'
  },
  'addBtnHide': {
    'display': 'none'
  },
  'updateBtnHide': {
    'display': 'none'
  }
});
