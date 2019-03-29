import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface LatexProps {
  tex: string;
}

interface LatexState {
  tex: string;
}

export default class Latex extends Component<LatexProps, LatexState> {
  static defaultProps: LatexProps = {
    tex: ''
  };
  state: LatexState = {
    tex: ''
  };

  constructor(props: LatexProps) {
    super(...arguments);
    this.updateProps(props);
  }

  componentDidMount() {
    this.updateTex();
  }

  componentWillReceiveProps(nextProps: LatexProps) {
    this.updateProps(nextProps);
  }

  componentDidUpdate() {
    this.updateTex();
  }

  updateProps(props: LatexProps) {
    const { tex } = props;
    this.setState({ tex: tex });
  }
  updateTex() {
    window['MathJax'].Hub.Queue(['Typeset', window['MathJax'].Hub]);
  }

  render() {
    const { tex } = this.props;
    console.log(tex);
    // const _tempTex = tex.replace('\\', '\\\\');

    return (
      <View>
        <View>{tex}</View>
      </View>
    );
  }
}
