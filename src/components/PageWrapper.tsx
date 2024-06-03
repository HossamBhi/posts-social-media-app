import {View, ViewProps} from 'react-native';
import PageHeader, {PageHeaderTypes} from './PageHeader';

const PageWrapper = ({
  children,
  title,
  isShowBack,
  style,
}: ViewProps & PageHeaderTypes) => (
  <View
    className={`flex-1 justify-center items-center bg-white`}
    style={style}>
    <PageHeader {...{title, isShowBack}} />
    <View className="flex-1">{children}</View>
  </View>
);

export default PageWrapper;
