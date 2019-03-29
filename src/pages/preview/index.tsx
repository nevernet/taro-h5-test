import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';
import Latex from '../../components/latex';

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '预览'
  };

  constructor(props) {
    super(...arguments);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const x = `1111单项式$ \\frac{3xy}{8}$的系数是_____次数是_____`;
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Latex tex={x} />
      </View>
    );
  }
}
